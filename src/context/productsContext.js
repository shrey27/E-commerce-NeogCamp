import { createContext, useContext, useReducer } from 'react';
import { items } from '../common/constants';

const ProductsContext = createContext();

const useProductsCtx = () => useContext(ProductsContext);
const defaultState = {
  includeOutOfStock: false,
  onlyFastDelivery: false,
  category: [],
  sortingDirection: '',
  rating: 0,
  priceLimit: 10000,
  selectedInputs: []
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_OUT_OF_STOCK':
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock,
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'TOGGLE_ONLY_FAST_DELIVERY':
      return {
        ...state,
        onlyFastDelivery: !state.onlyFastDelivery,
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        category: action.payload && [...state.category, action.payload],
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'REMOVE_CATEGORY':
      return {
        ...state,
        category:
          action.payload &&
          [...state.category].filter((e) => e !== action.payload),
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'SET_SORTING_DIRECTION':
      return {
        ...state,
        sortingDirection: action.payload,
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'SET_RATING':
      return {
        ...state,
        rating: action.payload,
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'SET_PRICE_LIMIT':
      return {
        ...state,
        priceLimit: action.payload,
        selectedInputs: [...state.selectedInputs, action.target]
      };
    case 'CLEAR_ALL':
      return {
        ...defaultState
      };
    default:
      return {
        ...state
      };
  }
};

const sortAndFilterItems = (
  list,
  includeOutOfStock,
  onlyFastDelivery,
  category,
  sortingDirection,
  rating,
  priceLimit
) => {
  let tempList = [...list];

  tempList = [
    ...tempList.filter((elem) => (includeOutOfStock ? true : !elem.nostock))
  ];

  if (onlyFastDelivery) {
    tempList = [...tempList.filter((elem) => elem.fastdelivery)];
  }
  if (rating) {
    tempList = [...tempList.filter((elem) => elem.rating >= rating)];
  }
  if (priceLimit) {
    tempList = [...tempList.filter((elem) => elem.price <= priceLimit)];
  }
  if (category.length !== 0) {
    tempList = [...tempList.filter((elem) => category.includes(elem.category))];
  }

  if (sortingDirection) {
    return sortingDirection === 'LOW_TO_HIGH'
      ? tempList.sort((a, b) => a['price'] - b['price'])
      : tempList.sort((a, b) => b['price'] - a['price']);
  } else {
    return tempList;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, defaultState);

  const {
    includeOutOfStock,
    onlyFastDelivery,
    category,
    sortingDirection,
    rating,
    priceLimit,
    selectedInputs
  } = state;

  const filteredData = sortAndFilterItems(
    items,
    includeOutOfStock,
    onlyFastDelivery,
    category,
    sortingDirection,
    rating,
    priceLimit
  );

  return (
    <ProductsContext.Provider
      value={{
        productListing: [...filteredData],
        priceLimit,
        dispatch,
        selectedInputs
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { useProductsCtx, ProductsContextProvider };
