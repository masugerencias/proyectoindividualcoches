import React from "react";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";




const Despuespago = () =>{
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
        <h1>TRANSACCIÓN REALIZADA CORRECTAMENTE</h1>
        
               
<div className="contenedorbotones">


<div id="contenedorboton1" class="shadow-lg p-3 mb-5 bg-white rounded">

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Si tienes una cuenta</Card.Title>
        <Card.Text>
          En tu perfil encontrarás el el historial de transacciones, vehículos, pagos y facturas.
        </Card.Text>
        <Button variant="primary">Ir a mi perfil</Button>
      </Card.Body>
    </Card>

    </div>         
        
        
    <div id="contenedorboton2" className="shadow-lg p-3 mb-5 bg-white rounded">

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Descargar factura</Card.Title>
        <Card.Text>
          Si no estás registrado, puedes descargar la factura directamente pulsando el botón
        </Card.Text>
        <Button variant="primary">Descargar </Button>
      </Card.Body>
    </Card>
    </div>
        
        
    </div>  
        
        
      



 
 </div>
  );




 



  
  
}
export default Despuespago;
