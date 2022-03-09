import { createContext, useState, useContext } from 'react';

const FormOpenContext = createContext();

const FormOpenProvider = ({ children }) => {
  const [formId, setFormId] = useState(null);

  const openForm = (value) => {
    setFormId(value);
  };

  return (
    <FormOpenContext.Provider value={{ formId, openForm }}>
      {children}
    </FormOpenContext.Provider>
  );
};
const useFormOpenCtx = () => useContext(FormOpenContext);

export { useFormOpenCtx, FormOpenProvider };
