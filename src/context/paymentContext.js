import { createContext, useContext, useState } from 'react';
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

export { usePmtCtx, PaymentProvider };
