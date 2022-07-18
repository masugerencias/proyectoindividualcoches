// importar React de la biblioteca.
import React from 'react'; //aqui no se porqué se me abrieron unos corchetes.
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

//Componente funcional -> 
const ComponenteRegistro = () => {
  const navigate = useNavigate()


    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [empleado, setEmpleado] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");    
    const [confirmarcontrasena, setConfirmarcontrasena] = useState("");
    const [registro, setRegistro] =  useState("");
  


    useEffect(() => {
      if (registro){
      


      navigate('/perfil'); 
      }
          },[registro])
          /* esto que esta entre corchetes no sé que es */
  



    //const [info, setInfo] = useState(""); 
    
    const enviarRegistro = () => {
           
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify( 
                  {nombre: nombre,
                  apellido:apellido,
                  empleado:empleado,
                  telefono:telefono,
                  email:email,
                  contrasena:contrasena,
              confirmarcontrasena:confirmarcontrasena}),
              
            };
  
            fetch("registro", requestOptions)
              .then((response) => response.json())
              .then((response) =>setRegistro(response))
              
            
    } 
    return (
<div className='granRegistro'>
  CREAR CUENTA
<div classname="mb-3">
    <label for="exampleInputEmail1" classname="form-label">Nombre</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setNombre(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" classname="form-label">Apellido</label>
    <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e) => setApellido(e.target.value)}/>
  </div>

  <div classname="mb-3">
    <label for="exampleInputEmail1" classname="form-label">Teléfono</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setTelefono(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" classname="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1"onChange={(e) => setEmail(e.target.value)}/>
  </div>
 
  <div className="mb-3">
    <label for="exampleInputPassword1" classname="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => setContrasena(e.target.value)}/>
  </div>
  <button className="btn btn-dark" onClick={() => enviarRegistro()}>CREAR CUENTA</button>
  
   
  {/* aqui tiene que cargarse la pagina de nuevo solo con login
 */}


  
  
  

 </div>

        
    )
}
export default ComponenteRegistro;