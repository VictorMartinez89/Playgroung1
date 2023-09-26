
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState}from 'react'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import NoPage from "./Routes/NoPage";


import { ContextProvider } from './Components/utils/global.context';


function App() {

  return (
      <div className="App">
              <Navbar/>
               <Routes>       
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact/' element={<Contact />}/>
                    <Route path='/dentist/:id' element={<Detail />}/>
                    <Route path='/favs/' element={<Favs />}/>
                    <Route path='/*/' element={<NoPage />}/>                  
               </Routes>
              <Footer/>
      </div>
  );
}

export default App;
