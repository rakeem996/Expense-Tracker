import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transaction: [],
};

//create context
export const GlobalContext = createContext(initialState);

//creating a provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action
  function deleteTransaction(id){
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
  }

  function addTransaction(newTransaction){
    dispatch({
      type: "ADD_TRANSACTION",
      payload : newTransaction,
    })
  }

  return (
    <GlobalContext.Provider value={{ transaction: state.transaction , deleteTransaction ,addTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
};
