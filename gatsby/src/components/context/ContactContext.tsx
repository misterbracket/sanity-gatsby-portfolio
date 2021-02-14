import React, { ReactNode, useContext, useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  mapleSyrup: ""
};

export type ContactDataType = {
  name?: string;
  email?: string;
  message?: string;
  mapleSyrup?: string;
};

export type ContactStateType = {
  values?: typeof initialState;
  updateValue?: <T>(value: T) => void;
  setInputs?: (state: typeof initialState) => void;
};

const ContactContext = React.createContext<ContactStateType>({});

export const useContact = () => useContext(ContactContext);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [values, setInputs] = useState(initialState);

  function updateValue<T>(value: T) {
    setInputs({ ...values, ...value });
  }
  return (
    <ContactContext.Provider value={{ values, updateValue, setInputs }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;
