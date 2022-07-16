import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function mapas() {
  return (
    <CardGroup>
      <Card>
        
        <Card.Body>
       
          <Card.Img variant="top" src="https://i.pinimg.com/originals/83/44/ca/8344ca513b7f63ac76a3464ecffd8670.jpg
" />
            <Card.Title><br></br>BARCELONA<br></br></Card.Title>
          <Card.Text>
          <iframe
   src="https://maps.google.com/maps?q=calle%20tallers%202&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
   width="600"
   height="450"
   frameBorder="0"
   style={{ border: 0 }}
   allowFullScreen=""
   aria-hidden="false"
   tabIndex="0"
/>

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/83/44/ca/8344ca513b7f63ac76a3464ecffd8670.jpg
" />
        <Card.Body>
          <Card.Title>GRANADA</Card.Title>
          <Card.Text>
          <iframe
    src="https://maps.google.com/maps?q=Maestro%20Cebri%C3%A1n%20granada&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
   />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/83/44/ca/8344ca513b7f63ac76a3464ecffd8670.jpg
" />        <Card.Body>
          <Card.Title>MADRID</Card.Title>
          <Card.Text>
          <iframe
      src="https://maps.google.com/maps?q=plaza%20de%20cascorro%201&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
   />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default mapas;