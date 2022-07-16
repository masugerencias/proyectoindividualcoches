import React from "react";
import { useState } from "react";
import {Button,Form,Card} from 'react-bootstrap'

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
  <div class="card border-0 shadow">

  <div className="filtrosCards">
  <Form>
    <Card style={{ width: '18rem' }}>
   
   <Card.Img variant="top" src="https://www.vaultcars.com/wp-content/uploads/62CaddyConvertible-012-1024x682.jpg" />
   <Card.Body>
   <Card.Title>ASIENTOS</Card.Title>
   <Card.Text>
       Filtra por número de asientos
     </Card.Text>
    <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" onChange={(e) => setPlazas(e.target.value)}>
                <option>Número de asientos</option>
              <option value="2">2 asientos</option>
              <option value="4">4 asientos</option>
              <option value="5">5 asientos</option>
                </Form.Control>
              </Form.Group>
    
     
              <Button variant="primary" onClick={() => realizarBusquedaPlazas()}>asientos </Button>  
              </Card.Body>
    </Card>
    
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
      </div>
)
}


export default Cplazas