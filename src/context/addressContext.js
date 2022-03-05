import { createContext, useContext, useState } from 'react';
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

export { useAddrCtx, AddressProvider };
