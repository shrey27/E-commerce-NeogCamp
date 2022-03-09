import { createContext, useContext, useEffect, useReducer } from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

const PaymentApiContext = createContext(null);

const collectionName = 'payment';
const docRef = collection(db, collectionName);

const paymentApiReducerFunc = (state, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      return {
        ...state,
        paymentLoading: true
      };
    case 'API_RESPONSE':
      return {
        ...state,
        paymentLoading: false,
        paymentOptions: [...action.payload]
      };
    default:
      return { ...state };
  }
};

const PaymentApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentApiReducerFunc, {
    paymentLoading: false,
    paymentOptions: []
  });
  const { paymentLoading, paymentOptions } = state;

  const getOptions = async () => {
    const data = await getDocs(docRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    dispatch({ type: 'API_RESPONSE', payload: dataList });
  };

  const deleteOption = async (id) => {
    dispatch({ type: 'API_REQUEST' });
    const addrDoc = doc(db, collectionName, id);
    await deleteDoc(addrDoc);
    getOptions();
  };

  const addNewData = async (payload) => {
    dispatch({ type: 'API_REQUEST' });
    await addDoc(docRef, payload);
    getOptions();
  };

  const updateData = async (id, payload) => {
    dispatch({ type: 'API_REQUEST' });
    const userDoc = doc(db, collectionName, id);
    await updateDoc(userDoc, { ...payload });
    getOptions();
  };

  useEffect(() => {
    dispatch({ type: 'API_REQUEST' });
    getOptions();
  }, []);

  return (
    <PaymentApiContext.Provider
      value={{
        paymentLoading,
        paymentOptions,
        addNewData,
        deleteOption,
        getOptions,
        updateData
      }}
    >
      {children}
    </PaymentApiContext.Provider>
  );
};
const usePmtApiCtx = () => useContext(PaymentApiContext);

export { usePmtApiCtx, PaymentApiProvider };
