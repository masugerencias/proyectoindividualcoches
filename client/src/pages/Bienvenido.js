import React from "react";
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import Clogin from "../componentes/Clogin";
/* import { Link, useNavigate } from 'react-router-dom'; */


const Bienvenido = () => {
    const [infousuario, setInfousuario] = useState("");

    useEffect(() => {
 
        let datos = sessionStorage.getItem('userLogin' )

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  email: datos  }),
            //este email viene de session storage y es lo que metemos en la busqueda de SQL.
        };
    
        fetch("bienvenido", requestOptions)
            .then((response) => response.json())
            .then((response) =>  {setInfousuario(response);
            console.log("funcionando")})
            
    }, [])


    /* FUNCION DESCONECTAR */
    const navigate = useNavigate();

            function desconectar (){
                    sessionStorage.clear();
                    navigate('/');

            }

    return (
    
    <div>
        <p>{infousuario ? infousuario[0].nombre : "No tiene nombre"}</p>
        <p>{infousuario ? infousuario[0].apellido : "No tiene apellido"}</p>
        <p>{infousuario ? infousuario[0].email : "No tiene email"}</p>
        <p>{infousuario ? infousuario[0].telefono : "No tiene telefono"}</p>
        <p>{infousuario ? "Administrador" :""}</p>
        <button  class="btn btn-dark"  onClick={() => desconectar()}>Desconectar</button>

    </div>

     )
     

}
export default Bienvenido;
