
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState}from 'react'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import NoPage from "./Routes/NoPage";
import Layout from '../src/Components/Layout';
import ThemeContext, {themes} from "./context";
import { ContextProvider } from './Components/utils/global.context';


function App() {
  const[theme, setTheme]= useState(themes.light); 

  const handleChangeTheme=()=> {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  //const providerValue = useMemo(()=>({themes,handleChangeTheme}),[themes,handleChangeTheme])


  return (
      <div className="App">
          <ThemeContext.Provider value={{themes, handleChangeTheme}} >       
            
              <Layout>
                             
        
                <Routes>
                
                  <Route path='/' element={<Navbar/>}>
                    <Route index element={<Home />} />
                    <Route path='/contact/' element={<Contact />}/>
                    
                    <Route path='/dentist/:id' element={<Detail />}/>
                    
                    <Route path='/favs/' element={<Favs />}/>
                    <Route path='/*/' element={<NoPage />}/>
                    
                    <Route path='*' element={<NoPage />}/>
                  
                  </Route>
                
                 
            
                </Routes>
           
              
              </Layout>
              <Footer/>
        
          </ThemeContext.Provider>
      </div>
  );
}

export default App;
