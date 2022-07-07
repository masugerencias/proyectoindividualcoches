// importar React de la biblioteca.
import React from 'react'; 
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';


const Clogin = () => {
/* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
Es decir, lo que está más abajo en HTML*/
const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [login, setLogin] =  useState("");
   
    useEffect(() => {
        if (login){
        console.log('logon es true')
        navigate('/bienvenido'); 

        sessionStorage.setItem("userLogin", email);


        }
    },[login])

    const entrar = () => {
           
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {
              email:email,
              contrasena:contrasena,
          }),
        };

        fetch("login", requestOptions)
          .then((response) => response.json())
          .then((response) =>setLogin(response))         
        } 

return (

<div id='login'>
    LOGIN:
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e) => setContrasena(e.target.value)}/>
  </div>
 
  <button class="btn btn-dark" onClick={() => entrar()}>ENTRAR</button>
{login ? "" : <p>uusario incorrecto</p>} 


  </div>

    )

}






export default Clogin;