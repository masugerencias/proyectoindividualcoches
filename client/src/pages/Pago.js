import React from "react";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";




const Pago = () =>{
 const { id } = useParams()
  const [todosfiltros, setTodosfiltros] = useState("");


   //aqui tengo que meterlo en un useeeffect para que se ejecute solo.

  useEffect(() => {
 
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { matricula: id })

    };
console.log(requestOptions)
    fetch("/masinfo", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setTodosfiltros(response)
        console.log(response);
      })

    }, []);
 



  

 console.log(id)
    // Está a la espera de cualquier cambio que haya en todocoches.
  




 



    return(
    <div>
<div className="returnenteropago">
<div className="pagocontenedor">

<div class="shadow-lg p-3 mb-5 bg-white rounded">

<Form.Group as={Col} controlId="formGridState">
          <Form.Label>Lugar de recogida</Form.Label>
          <Form.Select defaultValue="Choose...">
          <option>Elige...</option>
            <option>Granada</option>
            <option>Madrid</option>
            <option>Barcelona</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Lugar de devolución</Form.Label>
          <Form.Select defaultValue="Choose...">
          <option>Elige...</option>
            <option>Granada</option>
            <option>Madrid</option>
            <option>Barcelona</option>

          </Form.Select>
        </Form.Group>

     


      <label for="start">Inicio del alquiler:</label>

<input type="date" id="start" name="trip-start"
       value="2022-07-22"
       min="2022-01-01" max="2022-12-31"/>

<label for="start">Fin del alquiler:</label>

<input type="date" id="start" name="trip-start"
       value="2022-07-22"
       min="2022-01-01" max="2022-12-31"/>



</div>
</div>


<Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={todosfiltros.foto} />
      <Card.Body>
      
        <Card.Title>{todosfiltros.marca}</Card.Title>
        <Card.Text>
         {todosfiltros.modelo}<br></br>50€ al día
        </Card.Text>
       
        
        
      </Card.Body>
     
    </Card>
   


  <div class="shadow-lg p-3 mb-5 bg-white rounded">
    <Form className="pagocontenedor">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre de tarjeta</Form.Label>
          <Form.Control type="text" placeholder="Nombre que figura en la tarjeta" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control type="text" placeholder="16 digitos" />
        </Form.Group>
      </Row>   

      <Row className="mb-3">
        

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tipo de tarjeta</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Elige...</option>
            <option>Visa</option>
            <option>MasterCard</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CVV</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Recordar datos" />
      </Form.Group>


    </Form>
    </div>



   

    </div>
   <div>
    <br></br><br></br>
    <Button variant="primary"><Link style ={{textDecoration:'none', color:'white'}} to={`/despuespago/${todosfiltros.matricula}`}>CONFIRMAR Y PAGAR</Link></Button>

 </div>
 </div>
  );




 



  
  
}
export default Pago;
