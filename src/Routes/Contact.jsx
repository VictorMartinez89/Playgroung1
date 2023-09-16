import React, {useContext} from 'react'
import Form from '../Components/Form'
import ThemeContext from '../context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

const {theme} = useContext(ThemeContext);
  
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <div
      // style={{background: theme.background, color:theme.color}}
      >
      <Form/>
      </div>
    </div>
  )
}

export default Contact