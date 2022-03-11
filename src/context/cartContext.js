import { createContext, useContext, useReducer, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

const defaultState = {
  name: 'default',
  email: 'default',
  mobile: 9999999999,
  address: 'default',

  cardtype: '',
  upiId: '',
  number: 'default',
  month: 'default',
  year: 'default',

  remainingAmount: 0,
  cartList: [
    {
      source: '',
      title: 'default',
      price: 0,
      mrp: 0,
      discount: 0,
      delivery: 0,
      count: 0,
      productTotal: 0,
      discountOnProduct: 0
    }
  ]
};

const CheckoutContext = createContext();

const checkoutReducerFunc = (checkoutState, action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      const {
        name,
        email,
        mobile,
        line_1,
        line_2,
        landmark,
        city,
        state,
        pincode
      } = action.payload;
      return {
        ...checkoutState,
        name: name,
        email: email,
        mobile: mobile,
        address: `${line_1}, ${line_2}, ${landmark}, ${city}, ${state}, ${pincode}`
      };
    case 'UPDATE_PAYMENT_MODE':
      const { cardtype, upiId, number, month, year } = action.payload;
      return {
        ...checkoutState,
        cardtype: cardtype,
        upiId: upiId,
        number: number,
        month: month,
        year: year
      };
    case 'UPDATE_CART_LIST':
      const { cartList, remainingAmount } = action.payload;
      return {
        ...checkoutState,
        cartList: [...cartList],
        remainingAmount: remainingAmount
      };
    default:
      return {
        ...checkoutState
      };
  }
};

const CheckoutProvider = ({ children }) => {
  const [checkoutState, dispatch] = useReducer(
    checkoutReducerFunc,
    defaultState
  );
  return (
    <CheckoutContext.Provider value={{ checkoutState, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};
const useCheckoutCtx = () => useContext(CheckoutContext);

//Cart Management context
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
const ordersDocRef = collection(db, 'orders');

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
    case 'ORDERS_API_REQUEST':
      return {
        ...state,
        ordersLoading: true
      };
    case 'ORDERS_API_RESPONSE':
      return {
        ...state,
        ordersLoading: false,
        ordersListData: [...action.payload]
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
    ordersLoading: false,
    ordersListData: [],
    cartListData: [],
    addedCartPID: []
  });
  const {
    cartLoading,
    cartListData,
    addedCartPID,
    ordersLoading,
    ordersListData
  } = state;

  const getOrdersList = async () => {
    const data = await getDocs(ordersDocRef);
    const dataList = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    dispatch({ type: 'ORDERS_API_RESPONSE', payload: dataList });
  };

  const addNewOrders = async (objectData) => {
    dispatch({ type: 'ORDERS_API_REQUEST' });
    await addDoc(ordersDocRef, objectData);
    getOrdersList();
    cartListData.forEach((element) => {
      deleteFromCart(element.id);
    });
  };

  const updateAnOrder = async (id, index) => {
    dispatch({ type: 'ORDERS_API_REQUEST' });
    const orderDoc = ordersListData.filter((e) => e.id === id);
    console.log(...orderDoc);
    const objectToUpdate = orderDoc[0].ordersList[index];
    objectToUpdate.status = 'Cancelled';
    const userDoc = doc(db, 'orders', id);
    await updateDoc(userDoc, { ordersList: orderDoc[0].ordersList });
    getOrdersList();
  };

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
    console.log(objectData);
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
    delete payload.id;
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

  useEffect(() => {
    dispatch({ type: 'ORDERS_API_REQUEST' });
    getOrdersList();
    return () => console.log('orders clean up');
  }, []);

  return (
    <CartAPIContext.Provider
      value={{
        cartLoading,
        cartListData,
        ordersLoading,
        ordersListData,
        addNewOrders,
        updateAnOrder,
        getCartList,
        addedCartPID,
        addItemToCart,
        deleteFromCart,
        updateCartItem
      }}
    >
      <CartProvider>
        <CheckoutProvider>{children}</CheckoutProvider>
      </CartProvider>
    </CartAPIContext.Provider>
  );
};

const useCartAPICtx = () => useContext(CartAPIContext);

export { useCartCtx, useCartAPICtx, useCheckoutCtx, CartAPIProvider };
