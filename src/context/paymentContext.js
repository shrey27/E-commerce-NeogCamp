import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
  const [modeId, setModeId] = useState(null);

  const openModeForm = (value) => {
    setModeId(value);
  };

  return (
    <PaymentContext.Provider value={{ modeId, openModeForm }}>
      {children}
    </PaymentContext.Provider>
  );
};
const usePmtCtx = () => useContext(PaymentContext);

// Context for calling cards and upi API
const CardsContext = createContext();

const cardsRef = collection(db, 'cards');

const CardsApiProvider = ({ children }) => {
  const [cardsList, setCardsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCards = async () => {
    setLoading(true);
    const data = await getDocs(cardsRef);
    const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCardsList(dataList);
    setLoading(false);
  };

  const deleteCard = async (id) => {
    setLoading(true);
    const addrDoc = doc(db, 'cards', id);
    await deleteDoc(addrDoc);
    getCards();
  };

  const addNewCard = async (payload) => {
    setLoading(true);
    await addDoc(cardsRef, payload);
    getCards();
  };

  const updateCard = async (id, payload) => {
    setLoading(true);
    const userDoc = doc(db, 'cards', id);
    await updateDoc(userDoc, { ...payload });
    getCards();
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <CardsContext.Provider
      value={{
        loading,
        cardsList,
        addNewCard,
        deleteCard,
        getCards,
        updateCard
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
const useCardsApiCtx = () => useContext(CardsContext);

export { usePmtCtx, PaymentProvider, useCardsApiCtx, CardsApiProvider};
