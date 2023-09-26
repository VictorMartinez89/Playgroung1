import React, { createContext, useReducer, useEffect } from "react";

export const initialState = {
  theme:{
    light:{
      backgroundHome: "#FFFFFF", 
      backgroundDetail:"#FFFFFF",
      backgroundNavbar:"#F8F9F9",
      backgroundFooter:"#ef4747",
      backgroundCard:"#A1A1A1",
      color:"#000000"
    }, 
    dark:{
      backgroundHome: "#2E2E2E", 
      backgroundDetail:"#A1A1A1",
      backgroundNavbar:"#A1A1A1",
      backgroundFooter:"#A1A1A1",
      backgroundCard:"#2E2E2E",
      color:"#FFFFFF"
    }
  }, 
  data: [],
  data2:[],
  favs: JSON.parse(localStorage.getItem("favs"))||[],
  add: parseInt(localStorage.getItem("add"))|| [],

  
};

export const ContextGlobal = createContext(initialState);

const reducer =(state, action)=>{
  switch(action.type){
    case "TOGGLE_THEME": 
      const newTheme = state.theme === initialState.theme.dark ?  initialState.theme.light : initialState.theme.dark;

      return {
        ...state,
        theme: newTheme, 
      };
    
    case "SET_DATA":
      return{
        ...state, 
        data: action.payload,
      };
   
    case "ADD_FAVS":
      return{
        ...state,
        favs: [...state.favs, action.payload ],
        add:[...state.add, action.payload],
      };
    
    case "REMOVE_FAV":
    
      return {
        ...state,
        favs: state.favs.filter((fav)=> fav.id !== action.payload.id),
        add: state.add.filter((ad)=> ad.id !== action.payload.id),
      };
    
    default:
      return state;
  }
}
 
const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const[state, dispatch] = useReducer(reducer, {
    ...initialState,
    theme: initialState.theme.light,
  });

  useEffect(()=>{
    localStorage.removeItem('favs');
    localStorage.clear();
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs])

  console.log(state)
 
  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: "SET_DATA", payload: data});
      
      }
      catch(e){
        console.log(e)
      }
    };
    fetchData();
  }, []);

  const toggleTheme = ()=>{
    dispatch({ type: "TOGGLE_THEME"})
  }
  
  return (
  
    <ContextGlobal.Provider value={{toggleTheme, state, dispatch}}>
        {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;




