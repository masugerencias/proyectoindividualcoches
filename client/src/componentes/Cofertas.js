import React from "react";
import {Card,Button} from "react-bootstrap"
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";


const Cofertas = () => {
   

return(
 
  
  
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>

          </Card.Body>
          <Button  variant="info" ><Link style ={{textDecoration:'none', color:'black'}} to={"/masinfo"}>Reservar </Link></Button>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>

          </Card.Body>
          <Button  variant="info" ><Link style ={{textDecoration:'none', color:'black'}} to={"/masinfo"}>Reservar </Link></Button>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>

          </Card.Body>
          <Button  variant="info" ><Link style ={{textDecoration:'none', color:'black'}} to={"/masinfo"}>Reservar </Link></Button>


          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
  
  
 
  

)
}
export default Cofertas;

