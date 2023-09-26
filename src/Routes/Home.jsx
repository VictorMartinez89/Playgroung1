import React, { useState, useEffect} from 'react';
import Card from '../Components/Card'
import Favs from './Favs';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  // 

  const [doctors, setDoctors]= useState([]);
  const[loading, setLoading] = useState(false);
  const { state}= useContext(ContextGlobal)
  

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
  </div>

));

  
  return (
    <main className="card-contained" style={{ background: state.theme.backgroundHome}} >
      <h1 style={{ color: state.theme.color}}>Home</h1>
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