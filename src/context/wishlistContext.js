import { createContext, useContext, useReducer, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc
} from 'firebase/firestore';

const WishListContext = createContext();

const collectionName = 'wishlist';
const docRef = collection(db, collectionName);

const wishlistApiReducerFunc = (state, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      return {
        ...state,
        wishlistLoading: true
      };
    case 'API_RESPONSE':
      return {
        ...state,
        wishlistLoading: false,
        wishlistData: [...action.payload]
      };
    case 'UPDATE_WISHLIST_PID':
      const pidArray = state.wishlistData;
      return {
        ...state,
        addedPID: pidArray.map((elem) => elem.pid)
      };
    default:
      return { ...state };
  }
};

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistApiReducerFunc, {
    wishlistLoading: false,
    wishlistData: [],
    addedPID: []
  });
  const { wishlistLoading, wishlistData, addedPID } = state;

  const getWishlist = async () => {
    const data = await getDocs(docRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    dispatch({ type: 'API_RESPONSE', payload: dataList });
    dispatch({ type: 'UPDATE_WISHLIST_PID' });
  };

  const addToWishlist = async (pid, objectData) => {
    dispatch({ type: 'API_REQUEST' });
    const index = wishlistData.findIndex((e) => e.pid === pid);
    if (index < 0) {
      await addDoc(docRef, objectData);
    }
    getWishlist();
  };

  const deleteFromWishlist = async (pid, id) => {
    dispatch({ type: 'API_REQUEST' });
    const addrDoc = doc(db, collectionName, id);
    await deleteDoc(addrDoc);
    getWishlist();
  };

  useEffect(() => {
    dispatch({ type: 'API_REQUEST' });
    getWishlist();
    return () => console.log('wishlist clean up');
  }, []);

  return (
    <WishListContext.Provider
      value={{
        addedPID,
        wishlistLoading,
        wishlistData,
        addToWishlist,
        deleteFromWishlist
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
const useWishlistCtx = () => useContext(WishListContext);

export { useWishlistCtx, WishlistProvider };
