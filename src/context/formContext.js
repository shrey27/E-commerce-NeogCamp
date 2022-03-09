import { createContext, useContext, useState, useReducer } from 'react';
import {
  validationList,
  formFields
} from '../common/validations';
import { useAddrApiCtx } from './addressContext';
import { useFormOpenCtx } from '../context/formOpenContext';
import { usePmtApiCtx } from '../context/paymentContext';

const FormContext = createContext();

const validateInput = (name, value) => {
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

const submitHandler = (id, openForm, toUpdate, form, updateFunc, addFunc) => {
  const arrayofKeys = Object.keys(form);
  const formObject = arrayofKeys.reduce((prev, curr) => {
    return curr === 'isFormValid'
      ? { ...prev }
      : { ...prev, [curr]: form[curr].value };
  }, {});
  // console.log(formObject);
  toUpdate ? updateFunc(id, formObject) : addFunc(formObject);
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
  updateFunc,
  addFunc
) => {
  e.preventDefault();
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
    for (const key in form) {
      const item = form[key];
      console.table({ [key]: item });
    }
    setShowError(true);
  } else {
    submitHandler(id, openForm, toUpdate, form, updateFunc, addFunc);
  }

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

const FormProvider = ({ children, fieldSet, formData }) => {
  const [showError, setShowError] = useState(false);
  const { addNewAddress, updateAddress } = useAddrApiCtx();
  const { addNewOption, updateOptions } = usePmtApiCtx();
  const { openForm } = useFormOpenCtx();

  const initialValues = () => {
    const initializeFieldsArray = formFields[fieldSet];
    return initializeFieldsArray.reduce((prev, curr) => {
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
      fieldSet === 'addressFormFields' ? updateAddress : updateOptions,
      fieldSet === 'addressFormFields' ? addNewAddress : addNewOption
    );
  };

  const onFocusOut = (e) => {
    onFocusOutFunc(e, form, dispatch);
  };

  return (
    <FormContext.Provider
      value={{
        showError,
        form,
        onFocusOut,
        handleFormChange,
        formSubmitHandler
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useFormCtx = () => useContext(FormContext);

export { useFormCtx, FormProvider };
