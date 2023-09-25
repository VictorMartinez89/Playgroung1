import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card'
import Favs from './Favs';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  // 

  const [doctors, setDoctors]= useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data)=>{
      setDoctors(data);})
    .finally(()=>{
      setLoading(false);
    })  
  .catch((error) =>{
    console.error("Error al obtener una respuesta", error);
  })
},[])

const list = doctors.map((d, i) => ( 
  
  <div className={`card${i}`} key={i}>
  <Card  name={d.name} username={d.username} id={d.id} email={d.email} phone={d.phone} website={d.website}/>
  <Favs name={d.name} id={d.id} email={d.email} phone={d.phone}/>
  </div>

));

  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
       
        {loading ?(
           <ul>
          <li>
          <div>Loading ...</div>
          </li>
          </ul>
        ) : (
          <div 
        
          >
          <ul>
            <li>{list}</li>
          </ul>
          </div>
        )
      
        
      }
      </div>
    </main>
  )
}

export default Home