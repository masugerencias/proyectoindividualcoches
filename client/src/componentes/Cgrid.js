import React from "react";
import "../App.css"
import {Card,Form,Button} from 'react-bootstrap'

import { useState, useEffect } from 'react';





const Cgrid=()=>{
  const [todoscoches, setTodoscoches] = useState("");


 // Está a la espera de cualquier cambio que haya en edad.
 useEffect(() => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  fetch("todoslosvehiculos", requestOptions)
    .then((response) => response.json())
    .then((response) => setTodoscoches(response))

}, []);
      
  

/* NO ME FUNCIONA ESTA HISTORIA DE LA FOTO
let url1 = todoscoches[0].foto;
const imagen1 = <img src={url1}/> 


De todos modos los divs no se me generan en funcion de los resultaods de mongo...osea que tambien tengo que arreglar eso*/
 
return(
<div className="gridCards">

{todoscoches ? todoscoches.map((msj,i) => <div class="card border-0 shadow" key={i}>
<Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.92adbbe1a0c7c9ec41b36642cd0c6880?rik=YerYXIrk%2b7Z%2blQ&pid=ImgRaw&r=0" />
      <Card.Body>
      
        <Card.Title>{msj.marca}</Card.Title>
        <Card.Text>
         {msj.modelo}
        </Card.Text>
        <Card.Text>
         Pais de fabricación: {msj.pais} Año: {msj.ano} Asientos: {msj.plazas} Descapotable: {msj.descapotable}
        </Card.Text>
        
        <Button  variant="primary"  >Seleccionar</Button>
        
      </Card.Body>
     
    </Card>
    </div>) : ""}  
 
    </div>

)

}

export default Cgrid;

