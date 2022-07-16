import React from "react";
import { useState } from "react";
import {Button,Form} from 'react-bootstrap'

const Cplazas = () =>{

    const [plazas, setPlazas] = useState("");

    const realizarBusquedaPlazas = () => {
           
          const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {plazas: plazas})
          
        };

        fetch("busquedaplazas", requestOptions)
          .then((response) => response.json())
          .then((response) =>{setPlazas(response);
                              console.log(response);
                            })
      
    }
   
return(
 
    <div className="soloRegistro">
    <Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label></Form.Label>
                <Form.Control as="select" onChange={(e) => setPlazas(e.target.value)}>
                <option>Número de asientos</option>
              <option value="2">2 asientos</option>
              <option value="4">4 asientos</option>
              <option value="5">5 asientos</option>
                </Form.Control>
              </Form.Group>
    
     
              <Button variant="primary" onClick={() => realizarBusquedaPlazas()}>asientos </Button>  
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


export default Cplazas