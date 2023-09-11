import React from "react";
import { useState } from "react";

const Form = () => {

  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  function handleName(e){
    setName(e.target.value);
  }

  function handleLastname(e){
    setLastname(e.target.value)
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function clearForm(){
    setName("")
    setLastname("")
    setEmail("")
  }

  function send(e){
    e.preventDefault();
    var validRegex = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";
    if(name.length >= 5 && lastname.length >= 3&& email.length >5 && email.indexOf("@")>0 ){
      alert(`Gracias ${name} ${lastname}, te contactaremos cuando antes vía mail ${email}`)
      setTimeout(() => {
        e.target.reset();
        setName('');
        setLastname('');
        setEmail('');
      }, 1000);
     
    }else{

      alert("Por favor verifique su información nuevamente.")
     
    }
  }

  return (
    <div>
      <form onSubmit={send}>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Ingrese su nombre" onChange={handleName}/>
        
          <label>Apellido</label>
          <input type="text" placeholder="Ingrese su apellido" onChange={handleLastname}/>

          <label>Email</label>
          <input type="type" placeholder="Ingrese su correo" onChange={handleEmail}/>

          <input type="submit" placeholder="registrar"/>
        </div>


      </form>
    </div>
  );
};

export default Form;
