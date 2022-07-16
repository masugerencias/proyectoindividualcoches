import React from "react";
import { useState,useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap'
import Cdescapotable from "../componentes/Cdescapotable";
import Cpais from "../componentes/Cpais";
import Cpuertas from "../componentes/Cpuertas";
import Cplazas from "../componentes/Cplazas";





const Busqueda = () =>{
  
 
     const [pais, setPais] = useState("");

    const realizarBusquedaPais = () => {
           
          const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {pais: pais})
          
        };

        fetch("busquedavehiculos", requestOptions)
          .then((response) => response.json())
          .then((response) =>{setPais(response);
                              console.log(response);
                            })
      
    }
    
    return(

<div className='granRegistro'>


{/* A PARTIR DE AQUI LAS BUSQUEDAS IRÁN POR COMPONENTES */}




        {Cpais()}
        {Cplazas()}
        {Cdescapotable()}
        {Cpuertas()}
       
        


  
 


 


 
  

</div>







/* 
  <p>{pais ? pais[i].marca : ""}</p>
 <p>{pais ? pais[0].modelo : ""}</p> 

<div classname="mb-3">
    <label for="exampleInputEmail1" classname="form-label" ></label>
    <input type="text" placeholder="Pais" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setPais(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  
  

 {pais ? pais.map((msj,i) => <div>
      {msj.marca},{msj.modelo}
      </div>) : "el boton me va fatal, ntnces cuando pongo el map, no funciona nada"}  

<p>{pais ? pais[1].marca : ""}</p>
<p>{pais ? pais[1].modelo : ""}</p>
<p>{pais ? pais[2].marca : ""}</p>
<p>{pais ? pais[2].modelo : ""}</p>
<p>{pais ? pais[3].marca : ""}</p>
<p>{pais ? pais[3].modelo : ""}</p>
/* <p>{pais ? pais[4].marca : ""}</p>
<p>{pais ? pais[4].modelo : ""}</p> */









    ) 





    
}
export default Busqueda;
