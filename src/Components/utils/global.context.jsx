import React, { createContext, useReducer, useEffect, useState, useMemo } from "react";
import ThemeContext, {themes} from '../../context'



export const initialState = {theme: "", data: []}

const counterReducer =(state,action)=> {
  switch (action.type){
      case "INCREMENT":
          return {count: state.count+1};
      case "DECREMENT":
          return {count: state.count-1};
  }
};

export const ContextGlobal = createContext(undefined);
 
 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

 

  const initialState={count: parseInt(localStorage.getItem("count")) || 0 }

  const [state, dispatch] = useReducer(counterReducer,initialState);

  useEffect(()=>{
      localStorage.setItem("count",state.count.toString());
  },[state.count]);

  
  return (
  
    <ContextGlobal.Provider value={{state, dispatch}}>
        {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;


