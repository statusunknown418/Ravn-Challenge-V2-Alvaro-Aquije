import { ContextType, createContext, useState } from "react";

export const IdContext = createContext(null);

export const PersonIdProvider = ({ children }) => {
  const [personId, setPersonId] = useState(null);
  return (
    <IdContext.Provider
      value={{
        personId,
        setPersonId,
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
