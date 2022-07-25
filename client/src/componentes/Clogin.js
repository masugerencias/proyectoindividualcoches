// importar React de la biblioteca.
import React from 'react'; 
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

/**
 * 
 * @returns {boolean} true o false. Si es true, el ususario se ha logueado con éxito, de lo contrario es false.
 */
const Clogin = () => {

      const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [login, setLogin] =  useState("");
   /* ESTO EN TEORIA TIENE QUE EJECUTARSE DESPUES DE QUE SE HAYA RENDERIZADO EL COMPOENTNE, pues poniendo esto en el fetch me funciona . */
   /*  useEffect(() => {
        if (login){
        
        navigate('/bienvenido'); 

        sessionStorage.setItem("userLogin", email);

        }
        
    },[login]) */

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
          .then((response) => {setLogin(response);
            if (login){
        
              navigate('/bienvenido'); 
      
              sessionStorage.setItem("userLogin", email);
      
              }
          })   



        } 

return (


<div id='login' class="shadow-lg p-3 mb-5 bg-white rounded">
    LOGIN:
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Correo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => setContrasena(e.target.value)}/>
  </div>
 
  <button className="btn btn-dark" onClick={entrar()} >ENTRAR</button>




  </div>

    )

}






export default Clogin;