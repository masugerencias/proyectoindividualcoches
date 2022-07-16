import React from "react";
import { useState } from "react";
import {Button,Form,Card} from 'react-bootstrap'

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
  <div class="card border-0 shadow">

  <div className="filtrosCard">
  <Form>
    <Card style={{ width: '18rem' }}>
   
   <Card.Img variant="top" src="https://th.bing.com/th/id/R.339f105500cb5649e66991ea5ca24616?rik=IF5NZvxxGF9JCg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-iMqmMuLp-8w%2fTdbrG2XP7HI%2fAAAAAAAAMA4%2fnFo6PEorwmw%2fs1600%2fbmw-isetta-1.jpg&ehk=1SgRlEQMry4HmSs4jkQzPABekOmletX0%2fo5Crq7Rfyk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" />
   <Card.Body>
   <Card.Title>PUERTAS</Card.Title>
   <Card.Text>
       Selecciona el nº de puertas
     </Card.Text>
    <Form.Group controlId="exampleForm.ControlSelect1">
                
                <Form.Control as="select" onChange={(e) => setPuertas(e.target.value)}>
                <option>Número de puertas</option>
              <option value="3">3 puertas</option>
              <option value="5">5 puertas</option>
                </Form.Control>
              </Form.Group>
    
     
              <Button variant="primary" onClick={() => realizarBusquedaPuertas()}>MOSTRAR </Button>  
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


export default Cpuertas