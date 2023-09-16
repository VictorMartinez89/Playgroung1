import React from 'react';
import  { useContext } from "react";
import Card from "../Components/Card";
import ContextProvider from "../Components/utils/global.context";
import {Link} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = ({id, name, phone, email}) => {

  //const { state} = useContext(ContextProvider);

  return (
    <>


      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {/*<h2>Doctor:{state.counter}</h2>*/}

        <div key={name} >
          <div >
            <nav>
            <Link to={`/dentist/${id}`} document={id}>
                <h2>ID:{id}</h2>
              </Link>
          
           
            <h2>Name: {name}</h2>
            <h2>Email:{email}</h2>
          
           
            </nav>
          </div>

        </div>
      </div>
    </>
  );
};

export default Favs;
