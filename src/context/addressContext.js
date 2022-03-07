import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

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

// API handling

const AddressApiContext = createContext();

const docRef = collection(db, 'address');

const AddressApiProvider = ({ children }) => {
  const [adrList, setAdrList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAddress = async () => {
    setLoading(true);
    const data = await getDocs(docRef);
    const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(dataList);
    setAdrList(dataList);
    setLoading(false);
  };

  const deleteAddress = async (id) => {
    setLoading(true);
    const addrDoc = doc(db, 'address', id);
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
    const userDoc = doc(db, 'address', id);
    await updateDoc(userDoc, { ...payload });
    getAddress();
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <AddressApiContext.Provider
      value={{
        loading,
        getDocs,
        docRef,
        adrList,
        addNewAddress,
        deleteAddress,
        getAddress,
        updateAddress
      }}
    >
      {children}
    </AddressApiContext.Provider>
  );
};
const useAddrApiCtx = () => useContext(AddressApiContext);

export { useAddrCtx, useAddrApiCtx, AddressProvider, AddressApiProvider };
