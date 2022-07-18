import React from "react";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";


const Masinfo = () =>{
  const { id } = useParams()

   //aqui tengo que meterlo en un useeeffect para que se ejecute solo.

  useEffect(() => {
    //Runs only on the first render
 
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { matricula: id })

    };
console.log(requestOptions)
    fetch("matriculas", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })

    }, []);
 



  

 console.log(id)
    // Está a la espera de cualquier cambio que haya en todocoches.
  








    return(
          
       <p>Confirma que res humano, escribe este codigo en el input:¨{id}"".</p>


  
    ) 
}
export default Masinfo;
