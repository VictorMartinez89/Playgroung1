import React from 'react'
import {useContext} from 'react';
import { Outlet, Link } from "react-router-dom";
import ThemeContext from '../../src/context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export const HandleTheme = () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark');
}

const Navbar = () => {

  const{theme, handleChangeTheme} = useContext( ThemeContext);

  return (
    <>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/dentist/:id" >Detail</Link></li>
                    <li><Link to="/favs">Favs</Link></li>
                </ul>
            </nav>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button 
      onClick={handleChangeTheme}
     //style={{background: theme.background, color:theme.color}}
      >Change theme</button>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar