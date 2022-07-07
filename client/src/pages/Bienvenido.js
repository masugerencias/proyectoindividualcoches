import React from "react";
import { useState, useEffect } from 'react';

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
        };
    
        fetch("bienvenido", requestOptions)
            .then((response) => response.json())
            .then((response) =>  {setInfousuario(response);
            console.log("funcionando")})


    }, [])

  
    
 //
    return (
    
    <div>
        <p>hola   {infousuario ? infousuario[0].apellido : "lo  que quiera"}</p>
       
    </div>
     )


}
export default Bienvenido;
