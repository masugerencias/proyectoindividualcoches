import React from "react";
import { useState,useEffect } from 'react';




const Busqueda = () =>{
    
    const [pais, setPais] = useState("");

    const realizarBusqueda = () => {
           
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {pais: pais})
          
        };

        fetch("busquedavehiculos", requestOptions)
          .then((response) => response.json())
          .then((response) =>{
            setPais(response);
            console.log(response)})
          
        
} 
    
    return(
/* AHORA NADA MAS PONERME UNA LETRA SE ME VA PARA LA OTRA PAGINA,.. */
<div className='granRegistro'>

<div classname="mb-3">
    <label for="exampleInputEmail1" classname="form-label" ></label>
    <input type="text" placeholder="Pais" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setPais(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  
  <button  class="btn btn-dark"  onClick={() => realizarBusqueda()}>MOSTRAR RESULTADOS</button>
  
 
  {/* PROBLEMAS:
  se me carga automaticamente al poner una letra...
  - si pongo la linea 56 y no hay un quinto coche aleman, no se pinta nada.
      Por ejmeplo coches espanoles solo hay dos, asi que no se me pinta ninguno.

  - Encima esta busqueda solo responde a al criterio d eun pais...
      Desde Mongo compas las busquedas las hago de este modo::  {pais:"italia",descapotable:"si"}
 */}
 {pais ? pais.map((msj,i) => <div>
      {msj.marca},{msj.modelo}
      </div>) : "el boton me va fatal, ntnces cuando pongo el map, no funciona nada"}  
{/* <p>{pais ? pais[0].marca : ""}</p>
<p>{pais ? pais[0].modelo : ""}</p>
<p>{pais ? pais[1].marca : ""}</p>
<p>{pais ? pais[1].modelo : ""}</p>
<p>{pais ? pais[2].marca : ""}</p>
<p>{pais ? pais[2].modelo : ""}</p>
<p>{pais ? pais[3].marca : ""}</p>
<p>{pais ? pais[3].modelo : ""}</p> */}
{/* <p>{pais ? pais[4].marca : ""}</p>
<p>{pais ? pais[4].modelo : ""}</p> */}

 </div>







    ) 
}
export default Busqueda;
