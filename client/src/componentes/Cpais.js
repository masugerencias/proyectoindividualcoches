import React from "react";
import { useState,useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap'


const Cpais = () =>{

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
 
    <div className="soloRegistro">
    <Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label></Form.Label>
                <Form.Control as="select" onChange={(e) => setPais(e.target.value)}>
                <option>País</option>
              <option value="alemania">Alemania</option>
              <option value="espana">España</option>
              <option value="italia">Italia</option>
                </Form.Control>
              </Form.Group>
    
     
              <Button variant="primary" onClick={() => realizarBusquedaPais()}>MOSTRAR </Button>  
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

export default Cpais