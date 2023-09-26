import React from 'react';
import Card from "../Components/Card";

import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state} = useContext(ContextGlobal);
  const favoriteDentists = state.favs; 



const list = favoriteDentists.map((d, i) => (
 
  //(favoriteDentists.id === d.id)? 

  <div className={`card${i}`} key={i}>
    <Card 
    key={d.id}
    id={d.id}
    name={d.name}
    username={d.username}
    
  />
  </div>
));




  return (
    <>

      <div style={{ background: state.theme.backgroundHome}}>
      <h1 style={{ color: state.theme.color}}>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {list}
    
       
    
      </div>
      </div>
    </>
  );
};

export default Favs;
