import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect
} from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc
} from 'firebase/firestore';

const FormOpenContext = createContext();

const collectionName = 'profile';
const docRef = collection(db, collectionName);

const profileApiReducerFunc = (state, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      return {
        ...state,
        profileLoading: true
      };
    case 'API_RESPONSE':
      return {
        ...state,
        profileLoading: false,
        profileData: { ...action.payload[0] }
      };
    default:
      return { ...state };
  }
};

const FormOpenProvider = ({ children }) => {
  const [formId, setFormId] = useState(null);

  const [state, dispatch] = useReducer(profileApiReducerFunc, {
    profileLoading: false,
    profileData: {}
  });
  const { profileLoading, profileData } = state;

  const openForm = (value) => {
    setFormId(value);
  };

  const getProfile = async () => {
    const data = await getDocs(docRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    console.log(dataList);
    dispatch({ type: 'API_RESPONSE', payload: dataList });
  };

  const addNewProfile = async (payload) => {
    dispatch({ type: 'API_REQUEST' });
    await addDoc(docRef, payload);
    getProfile();
  };

  const updateProfile = async (id, payload) => {
    dispatch({ type: 'API_REQUEST' });
    const userDoc = doc(db, collectionName, id);
    await updateDoc(userDoc, { ...payload });
    getProfile();
  };

  useEffect(() => {
    dispatch({ type: 'API_REQUEST' });
    getProfile();
    return () => console.log('profile clean up');
  }, []);

  return (
    <FormOpenContext.Provider
      value={{
        formId,
        openForm,
        profileLoading,
        profileData,
        getProfile,
        addNewProfile,
        updateProfile
      }}
    >
      {children}
    </FormOpenContext.Provider>
  );
};
const useFormOpenCtx = () => useContext(FormOpenContext);

export { useFormOpenCtx, FormOpenProvider };
