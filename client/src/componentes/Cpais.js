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
  <div class="card border-0 shadow">
  <div className="filtrosCard">
  <Form>
     <Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.167085a7859c15e3e6fc7bb40d4f403c?rik=Er7S9%2faM8Rv%2bYg&pid=ImgRaw&r=0" />
      <Card.Body>
      <Card.Title>PAÍS</Card.Title>
      <Card.Text>
          Filtro de marcas por paises
        </Card.Text>
      <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" onChange={(e) => setPais(e.target.value)}>
                <option>País</option>
              <option value="alemania">Alemania</option>
              <option value="espana">España</option>
              <option value="italia">Italia</option>
                </Form.Control>
              </Form.Group>
        
        
        <Button variant="primary" onClick={() => realizarBusquedaPais()}>MOSTRAR </Button>  
      </Card.Body>
    </Card>
    
    </Form>
   {/*  {pais ? pais.map((pai, i) => {
          return (<div>
            <Card style={{ width: '18rem' }} key={i}>
                <Card.Body>
                <Card.Title>{pai.marca}</Card.Title>
                <Card.Text>{pai.modelo}</Card.Text>
                </Card.Body>
            </Card>
            </div>)
        }) : ""}  */}
     <p>{pais ? pais[0].marca : ""}</p> 
     <p>{pais ? pais[1].marca : ""}</p> 


    </div>
     </div>
    
    
    
    
  
    


    
    

)
}

export default Cpais