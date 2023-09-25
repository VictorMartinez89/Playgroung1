import styles from '../doctor.module.css'
import {Link} from 'react-router-dom'
import React from "react";
import Favs from '../Routes/Favs';




const Card = ({ name, username, id, email, phone, website }) => {

   
  const addFav = ()=>{

    // Aqui iria la logica para agregar la Card en el localStorage
    //[doctor, setDoctor] = useState([]); 
//    localStorage.getItem(prop.count) 
  
  }



  return (
    <div className="card_one">
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
          Favs:{}
          </h3>
        <button onClick={Favs}
                className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
