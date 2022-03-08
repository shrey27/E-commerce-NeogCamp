import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer
} from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';
import { validationList, addressFormFields } from '../common/validations';

// To handle Form open dynamics of multiple address forms
const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [formId, setFormId] = useState(null);

  const openForm = (value) => {
    setFormId(value);
  };

  return (
    <AddressContext.Provider value={{ formId, openForm }}>
      {children}
    </AddressContext.Provider>
  );
};
const useAddrCtx = () => useContext(AddressContext);

// Form Validation and Form Submission handling

const AddressFormContext = createContext();

//Form validation
const validateInput = (name, value) => {
  console.log(validationList[name])
  const { pattern, errorMsg } = validationList[name];
  if (!value || value.trim() === '')
    return { hasError: true, error: 'Please provide this detail' };
  else if (!pattern.test(value)) {
    return {
      hasError: true,
      error: errorMsg
    };
  } else {
    return { hasError: false, error: '' };
  }
};

//handle Form Input change
const handleFormChangeFunc = (e, form, dispatch) => {
  const { name, value } = e.target;

  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in form) {
    const item = form[key];
    // Check if the current field has error
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      // Check if any other field has error
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: 'UPDATE_FORM',
    data: {
      name,
      value,
      hasError,
      error,
      touched: false,
      isFormValid
    }
  });
};

//handle Form fields focus change
const onFocusOutFunc = (e, form, dispatch) => {
  const { name, value } = e.target;
  const { hasError, error } = validateInput(name, value);

  let isFormValid = true;

  for (const key in form) {
    const item = form[key];
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: 'UPDATE_FORM',
    data: { name, value, hasError, error, touched: true, isFormValid }
  });
};

const submitHandler = (
  id,
  openForm,
  toUpdate,
  form,
  updateAddress,
  addNewAddress
) => {
  const arrayofKeys = Object.keys(form);
  const formObject = arrayofKeys.reduce((prev, curr) => {
    return curr === 'isFormValid'
      ? { ...prev }
      : { ...prev, [curr]: form[curr].value };
  }, {});
  console.log(formObject);
  toUpdate ? updateAddress(id, formObject) : addNewAddress(formObject);
  openForm();
};

const formSubmitHandlerFunc = (
  e,
  keyToAvoid,
  toUpdate,
  form,
  dispatch,
  setShowError,
  id,
  openForm,
  updateAddress,
  addNewAddress
) => {
  e.preventDefault(); //prevents the form from submitting
  // console.log('------toUpdate-------' + toUpdate);
  let isFormValid = true;
  for (const name in form) {
    if (name === keyToAvoid) continue;
    const item = form[name];
    const { value } = item;
    const { hasError, error } = validateInput(name, value);
    if (hasError) {
      isFormValid = false;
    }
    if (name) {
      dispatch({
        type: 'UPDATE_FORM',
        data: {
          name,
          value,
          hasError,
          error,
          touched: true,
          isFormValid
        }
      });
    }
  }
  if (!isFormValid) {
    // for (const key in form) {
    //   const item = form[key];
    //   console.table({ [key]: item });
    // }
    setShowError(true);
  } else {
    submitHandler(id, openForm, toUpdate, form, updateAddress, addNewAddress);
  }

  // Hide the error message after 5 seconds
  setTimeout(() => {
    setShowError(false);
  }, 3000);
};

const formsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid
      };
    default:
      return state;
  }
};

const AddressFormProvider = ({ children, formData }) => {
  const [showError, setShowError] = useState(false);
  const { addNewAddress, updateAddress } = useAddrApiCtx();
  const { openForm } = useAddrCtx();

  const initialValues = () => {
    return addressFormFields.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: {
          value: formData?.[curr] || '',
          touched: false,
          hasError: true,
          error: ''
        }
      };
    }, {});
  };
  const [form, dispatch] = useReducer(formsReducer, initialValues());

  const handleFormChange = (e) => {
    handleFormChangeFunc(e, form, dispatch);
  };

  const formSubmitHandler = (e, keyToAvoid) => {
    formSubmitHandlerFunc(
      e,
      keyToAvoid,
      formData?.update,
      form,
      dispatch,
      setShowError,
      formData?.id,
      openForm,
      updateAddress,
      addNewAddress
    );
  };

  const onFocusOut = (e) => {
    onFocusOutFunc(e, form, dispatch);
  };

  return (
    <AddressFormContext.Provider
      value={{
        showError,
        form,
        onFocusOut,
        handleFormChange,
        formSubmitHandler
      }}
    >
      {children}
    </AddressFormContext.Provider>
  );
};

const useAddrFormCtx = () => useContext(AddressFormContext);

// API handling
const AddressApiContext = createContext();

const docRef = collection(db, 'address');
const collectionName = 'address';

const AddressApiProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAddress = async () => {
    setLoading(true);
    const data = await getDocs(docRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    setListItems(dataList);
    setLoading(false);
  };

  const deleteAddress = async (id) => {
    setLoading(true);
    const addrDoc = doc(db, collectionName, id);
    await deleteDoc(addrDoc);
    getAddress();
  };

  const addNewAddress = async (payload) => {
    setLoading(true);
    await addDoc(docRef, payload);
    getAddress();
  };

  const updateAddress = async (id, payload) => {
    setLoading(true);
    const userDoc = doc(db, collectionName, id);
    await updateDoc(userDoc, { ...payload });
    getAddress();
  };

  useEffect(() => {
    getAddress();
    return () => console.log('clean up');
  }, []);

  return (
    <AddressApiContext.Provider
      value={{
        loading,
        listItems,
        addNewAddress,
        deleteAddress,
        getAddress,
        updateAddress
      }}
    >
      <AddressProvider>{children}</AddressProvider>
    </AddressApiContext.Provider>
  );
};
const useAddrApiCtx = () => useContext(AddressApiContext);

export {
  useAddrFormCtx,
  useAddrCtx,
  useAddrApiCtx,
  AddressApiProvider,
  AddressFormProvider
};
