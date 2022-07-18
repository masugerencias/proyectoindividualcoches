import React from "react";
import "../App.css"
import {Card,Form,Button} from 'react-bootstrap'

import { useState, useEffect } from 'react';





const Cgrid=()=>{
  const [todoscoches, setTodoscoches] = useState("");


 // Está a la espera de cualquier cambio que haya en todocoches.
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
      
  


/* De todos modos los divs no se me generan en funcion de los resultaods de mongo...osea que tambien tengo que arreglar eso*/

return(
<div className="gridCards">

{todoscoches ? todoscoches.map((msj,i) => <div className="card border-0 shadow" key={i}>
<Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={msj.foto} />
      <Card.Body>
      
        <Card.Title>{msj.marca}</Card.Title>
        <Card.Text>
         {msj.modelo}
        </Card.Text>
        <Card.Text>
         Pais de fabricación: {msj.pais}<br></br> Año: {msj.ano}
        </Card.Text>
        
        <Button  variant="primary"  >Seleccionar</Button>
        
      </Card.Body>
     
    </Card>
    </div>) :""}  
 
    </div>

)

}

export default Cgrid;

