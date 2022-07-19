import React from "react";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



const Masinfo = () =>{
  const { id } = useParams()
  const [todosfiltros, setTodosfiltros] = useState("");


   //aqui tengo que meterlo en un useeeffect para que se ejecute solo.

  useEffect(() => {
    //Runs only on the first render
 
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
          
<div className="tarjetainfogrande">
<div className="shadow-lg p-3 mb-5 bg-white rounded">

    <Card className="text-justify" id="tarjetainfo">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{todosfiltros.marca} "{todosfiltros.modelo}"</Card.Title>
        <Card.Img className="fotoinfo" src={todosfiltros.foto} alt="Card image" />

        

        <Card.Text>
        <br></br>
        {todosfiltros.descripcion}
        </Card.Text>
        <Card.Text className="text-justify">
        Año de fabricación: {todosfiltros.ano}<br></br>
        País de fabricación: {todosfiltros.pais}<br></br>
        Número de asientos: {todosfiltros.plazas}<br></br>
        Número de puertas: {todosfiltros.puertas}<br></br>
        Descapotable: {todosfiltros.descapotable}<br></br>
        Precio por día: 50€
        
        </Card.Text>
        <Button variant="primary"><Link style ={{textDecoration:'none', color:'white'}} to={`/pago/${todosfiltros.matricula}`}>Alquilar</Link></Button>

      </Card.Body>
      <Card.Footer className="text-muted">Consutlar condiciones</Card.Footer>
    </Card>
    </div>
    </div>
  );




  
  
}
export default Masinfo;
