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

const profileApiReducerFunc = (state, action) => {
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
    case 'ADD_NEW_ID':
      return {
        ...state,
        addedId: [...state.addedId, action.payload]
      };
    case 'REMOVE_AN_ID':
      return {
        ...state,
        addedId: state.addedId.filter((elem) => elem !== action.payload)
      };
    default:
      return { ...state };
  }
};

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileApiReducerFunc, {
    wishlistLoading: false,
    wishlistData: [],
    addedId: []
  });
  const { wishlistLoading, wishlistData, addedId } = state;

  const getWishlist = async () => {
    const data = await getDocs(docRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    dispatch({ type: 'API_RESPONSE', payload: dataList });
  };

  const addToWishlist = async (pid, objectData) => {
    console.log(pid, objectData);
    dispatch({ type: 'API_REQUEST' });
    await addDoc(docRef, objectData);
    getWishlist();
    dispatch({ type: 'ADD_NEW_ID', payload: pid });
  };

  const deleteFromWishlist = async (pid, id) => {
    dispatch({ type: 'API_REQUEST' });
    const addrDoc = doc(db, collectionName, id);
    await deleteDoc(addrDoc);
    getWishlist();
    dispatch({ type: 'REMOVE_AN_ID', payload: pid });
  };

  useEffect(() => {
    dispatch({ type: 'API_REQUEST' });
    getWishlist();
    return () => console.log('wishlist clean up');
  }, []);

  return (
    <WishListContext.Provider
      value={{
        addedId,
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
