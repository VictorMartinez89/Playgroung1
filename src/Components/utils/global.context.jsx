import React, { createContext, useReducer, useEffect, useState, useMemo } from "react";




export const initialState = {theme: "", data: []}



export const ContextGlobal = createContext(undefined);
 
 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

 



  
  return (
  
    <ContextGlobal.Provider >
        {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;


