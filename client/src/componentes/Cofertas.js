import React from "react";
import {Card,Button} from "react-bootstrap"
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";


const Cofertas = () => {
   

return(
 
  
  
      <CardGroup >
        <Card className="ofertasymapas">
        <Card.Img variant="top" src="..\fotoCoches\\fiat1500spider.jpg"/>
          <Card.Body>

            <Card.Title>FIAT "1500 Spider"</Card.Title>
            <Card.Text>
             Coche clasico para dos personas, ideal para recorrer la costa azul.
            </Card.Text>

          </Card.Body>
          <Button  variant="info" ><Link style ={{textDecoration:'none', color:'black'}} to={"/masinfo"}>Reservar </Link></Button>

          <Card.Footer>
            <small className="text-muted">Consultar condiciones</small>
          </Card.Footer>
        </Card>
        <Card className="ofertasymapas">
        <Card.Img variant="top" src="..\fotoCoches\\astonmartindb6.jpg"/>
          <Card.Body>
            <Card.Title>ASTON MARTIN "db6 Volante"</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>

          </Card.Body>
          <Button  variant="info" ><Link style ={{textDecoration:'none', color:'black'}} to={"/masinfo"}>Reservar </Link></Button>

          <Card.Footer>
            <small className="text-muted">Consultar condiciones</small>
          </Card.Footer>
        </Card>
        <Card className="ofertasymapas">
        <Card.Img variant="top" src="..\fotoCoches\\giuliettaspider.jpg"/>
          <Card.Body>
            <Card.Title>ALFA ROMEO "Giulia Spider"</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>

          </Card.Body>
          <Button  variant="info" ><Link style ={{textDecoration:'none', color:'black'}} to={"/masinfo"}>Reservar </Link></Button>


          <Card.Footer>
            <small className="text-muted">Consultar condiciones</small>
          </Card.Footer>
        </Card>
      </CardGroup>
  
  
 
  

)
}
export default Cofertas;

