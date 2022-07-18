import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function mapas() {
  return (
    <CardGroup className="fotosmapas">
      <Card className="ofertasymapas">
        
        <Card.Body>

          <Card.Img className="fotomapa" variant="top" src="..\fotoCoches\\ciudadbarcelona.jpg" />
            <Card.Title><br></br>BARCELONA<br></br></Card.Title>
          <Card.Text>
          <iframe
   src="https://maps.google.com/maps?q=calle%20tallers%202&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
   width="400"
   height="250"
   frameBorder="0"
   style={{ border: 0 }}
   allowFullScreen=""
   aria-hidden="false"
   tabIndex="0"
/>

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Carrer dels Tallers, 2</small>
        </Card.Footer>
      </Card>
      <Card className="ofertasymapas">
      <Card.Img className="fotomapa" variant="top" src="..\fotoCoches\\ciudadgranada.jpg" />

        <Card.Body>
          <Card.Title><br></br>GRANADA<br></br></Card.Title>
          <Card.Text>
          <iframe
    src="https://maps.google.com/maps?q=Maestro%20Cebri%C3%A1n%20granada&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"      width="400"
      height="250"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
   />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Maestro Cebrián, 1</small>
        </Card.Footer>
      </Card>
      <Card className="ofertasymapas">
      <Card.Img className="fotomapa" variant="top" src="..\fotoCoches\\ciudadmadrid.jpg" />
        <Card.Body>
          <Card.Title><br></br>MADRID<br></br></Card.Title>
          <Card.Text>
          <iframe
      src="https://maps.google.com/maps?q=plaza%20de%20cascorro%201&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      width="400"
      height="250"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
   />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Pl. de Cascorro, 1</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default mapas;