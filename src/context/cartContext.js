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
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { cartListData, addItemToCart, updateCartItem, deleteFromCart } =
    useCartAPICtx();

  const addToCart = (item) => {
    const index = cartListData.findIndex((e) => e.id === item.id);
    if (index < 0) {
      addItemToCart(item);
    }
  };

  const incQty = (id, pid) => {
    const index = cartListData.findIndex((e) => e.id === id);
    cartListData[index].count++;
    updateCartItem(id, cartListData[index]);
  };

  const decQty = (id, pid) => {
    const index = cartListData.findIndex((e) => e.pid === pid);
    cartListData[index].count--;
    if (cartListData[index].count <= 0) {
      deleteFromCart(id);
    }
    updateCartItem(id, cartListData[index]);
  };

  return (
    <CartContext.Provider
      value={{ totalItems: cartListData.length, incQty, decQty, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartCtx = () => useContext(CartContext);

// Cart API context
const CartAPIContext = createContext();

const collectionName = 'cart';
const docRef = collection(db, collectionName);

const cartApiReducerFunc = (state, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      return {
        ...state,
        cartLoading: true
      };
    case 'API_RESPONSE':
      return {
        ...state,
        cartLoading: false,
        cartListData: [...action.payload]
      };
    case 'UPDATE_WISHLIST_PID':
      const pidArray = state.cartListData;
      return {
        ...state,
        addedCartPID: pidArray.map((elem) => elem.pid)
      };
    default:
      return { ...state };
  }
};

const CartAPIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartApiReducerFunc, {
    cartLoading: false,
    cartListData: [],
    addedCartPID: []
  });
  const { cartLoading, cartListData, addedCartPID } = state;

  const getCartList = async () => {
    const data = await getDocs(docRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    dispatch({ type: 'API_RESPONSE', payload: dataList });
    dispatch({ type: 'UPDATE_WISHLIST_PID' });
  };

  const addItemToCart = async (objectData) => {
    // console.log(objectData);
    dispatch({ type: 'API_REQUEST' });
    await addDoc(docRef, objectData);
    getCartList();
  };

  const deleteFromCart = async (id) => {
    dispatch({ type: 'API_REQUEST' });
    const addrDoc = doc(db, collectionName, id);
    await deleteDoc(addrDoc);
    getCartList();
  };

  const updateCartItem = async (id, payload) => {
    dispatch({ type: 'API_REQUEST' });
    const userDoc = doc(db, collectionName, id);
    await updateDoc(userDoc, { ...payload });
    getCartList();
  };

  useEffect(() => {
    dispatch({ type: 'API_REQUEST' });
    getCartList();
    return () => console.log('wishlist clean up');
  }, []);

  return (
    <CartAPIContext.Provider
      value={{
        cartLoading,
        cartListData,
        getCartList,
        addedCartPID,
        addItemToCart,
        deleteFromCart,
        updateCartItem
      }}
    >
      <CartProvider>{children}</CartProvider>
    </CartAPIContext.Provider>
  );
};

const useCartAPICtx = () => useContext(CartAPIContext);

export { useCartCtx, useCartAPICtx, CartAPIProvider };
