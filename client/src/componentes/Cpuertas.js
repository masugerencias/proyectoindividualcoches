import React from "react";
import { useState } from "react";
import {Button,Form} from 'react-bootstrap'

const Cpuertas = () =>{

    const [puertas, setPuertas] = useState("");

    const realizarBusquedaPuertas = () => {
           
          const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {puertas: puertas})
          
        };

        fetch("busquedapuertas", requestOptions)
          .then((response) => response.json())
          .then((response) =>{setPuertas(response);
                              console.log(response);
                            })
      
    }
   
return(
 
    <div className="soloRegistro">
    <Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label></Form.Label>
                <Form.Control as="select" onChange={(e) => setPuertas(e.target.value)}>
                <option>Número de puertas</option>
              <option value="3">3 puertas</option>
              <option value="5">5 puertas</option>
                </Form.Control>
              </Form.Group>
    
     
              <Button variant="primary" onClick={() => realizarBusquedaPuertas()}>MOSTRAR </Button>  
      </Form>
    


      <div>

   {/*    {pais ? pais.map((pai, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
                <Card.Body>
                <Card.Title>{pai.marca}</Card.Title>
                <Card.Text>{pai.modelo}</Card.Text>
                </Card.Body>
            </Card>
          )
        }) : ""} */}
 
    </div>
    
      </div>

)
}


export default Cpuertas