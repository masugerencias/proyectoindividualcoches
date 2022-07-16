import React from "react";
import { useState,useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap'


const Cdescapotable = () =>{

    const [descapotable, setDescapotable] = useState("");

    const realizarBusquedaDescapotable = () => {
           
          const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {descapotable: descapotable})
          
        };

        fetch("descapotables", requestOptions)
          .then((response) => response.json())
          .then((response) =>{setDescapotable(response);
                              console.log(response);
                            })
      
    }
   
return(
  <div class="card border-0 shadow">
  <div className="filtrosCard">
  <Form>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/R.a9b863adfbaee13c5200c40a4b3e8c0d?rik=MnXozl4HcC6r4A&riu=http%3a%2f%2fperiodismodelmotor.com%2fwp-content%2fuploads%2f2015%2f03%2fdiez-clasicos-descapotables-e-type-3.jpg&ehk=y5orYGowchWxzkJwxdY0loHjgV0SGkEZg7cEsPNaOc4%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          <Card.Title>TECHO</Card.Title>
          <Card.Text>
          </Card.Text>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={(e) => setDescapotable(e.target.value)}>
              <option>¿Descapotable?</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>


          <Button variant="primary" onClick={() => realizarBusquedaDescapotable()}>MOSTRAR </Button>
        </Card.Body>
      </Card>

    </Form>


          
    
    
      </div>

      </div>
      




)
}

export default Cdescapotable