import React from 'react';
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext} from 'react'
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
 
  const[doctor, setDoctor]= useState([]);
  const[loading, setLoading] = useState(false);
  
  const {state} = useContext(ContextGlobal);
  
  const {id}= useParams();
  const navigate = useNavigate();
 
  const goBack = () => {
    navigate(-1)
  };

  useEffect(() =>{


    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data)=>{
      console.log(data)
      console.log(data.length)
      setDoctor(data);})
    .finally(()=>{
      setLoading(false);
    })  
  .catch((error) =>{
    console.error("Error al obtener una respuesta", error);
  })
},[])

  return (   
    <>
    <div className='detailDiv' style={{ background: state.theme.backgroundDetail, color: state.theme.color}}>
      <h1>Detail Dentist id: {doctor.id} </h1>
      
      {loading ?(
           <ul>
          <li>
          <div>Loading ...</div>
          </li>
          </ul>
        ) : (
          <ul>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
       <div className='cardDetail' style={{ background: state.theme.backgroundCard, color: state.theme.color}}>
        <img src='../Components/img/doctor2.jpg' alt='' width={200}/>
        <h1>Name: {doctor?.name}</h1>
        <h3>Username: {doctor?.username}</h3>
        <h3>ID:{doctor?.id}</h3> 
        <h3>Email:{doctor?.email}</h3>
        <h3>Phone:{doctor?.phone}</h3>
        <h3>Website:{doctor?.website}</h3>
        <h3>Company:
              <ul>
                <li>Name: {doctor?.company?.name}</li>
                <li>Bs: {doctor?.company?.bs}</li>
                <li>Quote:{doctor?.company?.catchPhrase}</li> 
              
              </ul>
        </h3>
        <h3>Address:
          <ul>
            <li>City:{doctor?.address?.city}</li>
            <li>Street:{doctor?.address?.street}</li>
            <li>Suite:{doctor?.address?.suite}</li>
            <li>Zipcode:{doctor?.address?.zipcode}</li>
            
          </ul>
        </h3>
       </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
         <div>
            <button onClick={goBack}>Go back</button>
         </div>
         
         </ul>
        )}
     </div>   
    </>
  )
}

export default Detail