import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


const Cpais = () => {

  const [pais, setPais] = useState("");
  const [infoPais, setinfoPais] = useState("");
  const [reservar, setReservar] = useState("")



  const realizarBusquedaPais = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { pais: pais })

    };
    fetch("pais", requestOptions)
      .then((res) => res.json())
      .then((res) => setinfoPais(res))

  }

  const navigate = useNavigate()


  /* USEEFFECT 
  Ppara que al darle al boton me rediriga a la pagina 
  Masinfo con el id y que alli haga una busqueda en mongo con ese ID */

  

  return (
    <div className='tarjetaMap'>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="filtrosCard">
          <Form>
            <Card style={{ width: '18rem' }}>

              <Card.Img variant="top" src="https://th.bing.com/th/id/R.167085a7859c15e3e6fc7bb40d4f403c?rik=Er7S9%2faM8Rv%2bYg&pid=ImgRaw&r=0" />
              <Card.Body>
                <Card.Title>PAÍS</Card.Title>
                <Card.Text>
                  Filtro de marcas por paises
                </Card.Text>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select" onChange={(e) => setPais(e.target.value)}>
                    <option>País</option>
                    <option value="Alemania">Alemania</option>
                    <option value="Espana">España</option>
                    <option value="Francia">Francia</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="Italia">Italia</option>
                    <option value="Suecia">Suecia</option>
                  </Form.Control>
                </Form.Group>


                <Button variant="primary" onClick={() => realizarBusquedaPais()}>MOSTRAR </Button>
              </Card.Body>
            </Card>

          </Form>

      </div>
      <div className='tarjetaMap'>

      {infoPais ? infoPais.map((busqued, i) => {

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

                <Button variant="info"><Link style ={{textDecoration:'none', color:'white'}} to={`/masinfo/${busqued.matricula}`}>Más información</Link></Button>
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

export default Cpais