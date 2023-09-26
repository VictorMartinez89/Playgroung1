import React from 'react'
import {useContext} from 'react';
import { Outlet, Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

const { state, toggleTheme} = useContext(ContextGlobal);

  return (
    <>
    <div style={{background: state.theme.backgroundNavbar, color: state.theme.color }}>
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
      <button className='button-17' onClick={toggleTheme}>Change theme</button>
    </nav>
    <Outlet/>
    </div>
    </>
  )
}

export default Navbar