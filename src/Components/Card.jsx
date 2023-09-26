import React from "react";
import styles from '../doctor.module.css'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";



const Card = ({ name, username, id, email, phone, website }) => {

  const { state, dispatch } = useContext(ContextGlobal);

  const isFav = state.favs.some((fav) => fav.id === id);
  //const isFav = state.fav?.some((f)=> f.id === id)|| true;
  //const isFav = state.favs.some((f)=> f.id === id);
  //const isFav = true;

  console.log("isfAV" + isFav)
  const addFav = ()=>{
    
    if(isFav) {    
      dispatch({ type: "REMOVE_FAV", payload: { id, name, username, email, phone, website } }); 
      alert("Eliminadode Favoritos")
    }else{
      dispatch({ type: "ADD_FAVS", payload: { id, name, username, email, phone, website }});
      alert(" Agregado a Favoritos")
    }
  }



  return (
    <div className="card_one" style={{ background: state.theme.backgroundCard, color: state.theme.color}}>
      <img className="card" src="../Components/img/doctor1.jpg " alt="" height="200px" width="480px"/>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div key={name} id={styles.card_one}>
          <div >
            <nav>
              <Link to={`/dentist/${id}`} document={id}>
                <h2>ID:{id}</h2>
              </Link>
            <h2>Name: {name}</h2>
            <h2>Username: {username}</h2>
        
            <h2>Website:{website}</h2>
            <h2>Telephone: {phone}</h2>
            </nav>
          </div>

        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <h3>
          favs:{}
          </h3>
        <button className="favButton" onClick={addFav}>
        {isFav ? (
          <>
          <button style={{background: "#FFFFFF" , color: state.theme.color}}> Add fav </button>
          </>
        ): (
          <>
          <button style={{background: "#000000" , color: state.theme.backgroundCard}}> No Add fav </button>
          </>

        )}
        </button>
    </div>
  );
};

export default Card;
