import { createContext, useContext } from 'react';

const ProductsContext = createContext();

const useProductsCtx = () => useContext(ProductsContext);

const ProductsContextProvider = ({ children }) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};

export { useProductsCtx, ProductsContextProvider };
