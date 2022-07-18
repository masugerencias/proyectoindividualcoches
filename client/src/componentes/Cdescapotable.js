import React from "react";
import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";


const Cdescapotable = () => {

  const [descapotable, setDescapotable] = useState("");
  const [infoDescapotable, setInfodescapotable] = useState("");



  const realizarBusquedaDescapotable = () => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { descapotable: descapotable })

    };

    fetch("descapotables", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setInfodescapotable(response);
        console.log(response);
      })

  }

  return (
    <div className='tarjetaMap'>
      <div className="card border-0 shadow">
        <div className="filtrosCard">
          <Form>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.a9b863adfbaee13c5200c40a4b3e8c0d?rik=MnXozl4HcC6r4A&riu=http%3a%2f%2fperiodismodelmotor.com%2fwp-content%2fuploads%2f2015%2f03%2fdiez-clasicos-descapotables-e-type-3.jpg&ehk=y5orYGowchWxzkJwxdY0loHjgV0SGkEZg7cEsPNaOc4%3d&risl=&pid=ImgRaw&r=0" />
              <Card.Body>
                <Card.Title>TECHO</Card.Title>
                <Card.Text>
                  ¿Descapotable?
                </Card.Text>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select" onChange={(e) => setDescapotable(e.target.value)}>
                    <option>¿Descapotable?</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>


                <Button variant="primary" onClick={() => realizarBusquedaDescapotable()}>MOSTRAR </Button>
              </Card.Body>
            </Card>

          </Form>
        </div>
        <div className='tarjetaMap'>

      {infoDescapotable ? infoDescapotable.map((busqued, i) => {

        return (
          <div className='tarjetaMap'>

            <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={busqued.foto} />

              <Card.Body>
                <Card.Title>{busqued.marca}</Card.Title>
                <Card.Text>{busqued.modelo}</Card.Text>
                <Card.Text>
         Pais de fabricación: {busqued.pais}.<br></br> Año: {busqued.ano}
        </Card.Text>

                <Button variant="info" ><Link style={{ textDecoration: 'none', color: 'black' }} to={"/masinfo"}>Reservar </Link></Button>
              </Card.Body>
            </Card>
            </div>
            )
          

      }) : ""}

</div>
    </div>


    </div>









  )
}

export default Cdescapotable