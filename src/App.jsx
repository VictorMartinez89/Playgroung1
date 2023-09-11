
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import NoPage from "./Routes/NoPage";


function App() {
  return (
      <div className="App">
         
              <BrowserRouter >
                <Routes>
                  <Route path='/' element={<Navbar/>}>
                    <Route index element={<Home />} />
                    <Route path='/contact/' element={<Contact />}/>
                    <Route path='/detail/' element={<Detail />}/>
                    <Route path='/favs/' element={<Favs />}/>
                    <Route path='/*/' element={<NoPage />}/>
                    
                    <Route path='*' element={<NoPage />}/>
                  </Route>
                </Routes>
              </BrowserRouter>
          <Footer/>
      </div>
  );
}

export default App;
