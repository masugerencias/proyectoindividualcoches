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
 
    <div className="soloRegistro">
    <Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label></Form.Label>
                <Form.Control as="select" onChange={(e) => setDescapotable(e.target.value)}>
                <option>Descapotable</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>
    
     
              <Button variant="primary" onClick={() => realizarBusquedaDescapotable()}>MOSTRAR </Button>  
      </Form>
    
    
<div>

 
 
    </div>

 
    
            
          
    
    
      </div>





)
}

export default Cdescapotable