import React from "react";
import Cgrid from "../componentes/Cgrid";
import Cnavbar from "../componentes/Cnavbar";
import Cfooter from "../componentes/Cfooter";
// importar React de la biblioteca.
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';


/* en esta pagina seran los filtros de los coches de mongo */
const Resultados = () => {
    const [pais, setPais] = useState("");

/* aqui tienen que aparecer los resultados tras darle al boton de buscar, joder */





/* ESTA PAGINA NO LA USO, YA QUE LO SEPARÉ TODO POR COMPONENTES EN LAS BUSQUEDAS!"" */



const buscar = () => {
           
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( 
          {
          pais:pais})
    };

    fetch("busquedavehiculos", requestOptions)
      .then((response) => response.json())
      .then((response) =>setPais(response))         
    } 
    
  
    return (
      <div className="row g-3">
  
  
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label"></label>
          <select className="form-select" id="validationDefault04" >
            <option selected disabled value="">País</option>
            <option>España</option>
            <option>Italia</option>
            <option>Francia</option>
            <option>Inglaterra</option>
            <option>Alemania</option>
            <option>Suecia</option>
  
  
  
          </select>
        </div>
  
  
  
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label"></label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Descapotable</option>
            <option>Si</option>
            <option>No</option>
  
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label"></label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Número de puertas</option>
            <option>3</option>
            <option>5</option>
  
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label"></label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Número de plazas</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
  
  
          </select>
        </div>
   
  
  
        <div className="col-12">
          <br></br>
          <button className="btn btn-dark"onClick={() => buscar()}>BUSCAR</button>

  {/* ESTE BOTON manda a ejecutar la funcion que va al back dentro de este componente. */}
        </div>
      </div>,
                <p>{pais ? pais[0].marca : ""}</p>,
<p>aqui me tiene que aparecer un botn y el friltro coño</p>,
      /*Al darle a este boton lo que quiero es que se haga la busqueda en mongo y que se me muestre en una pagina nueva que se llame RESULTADOS como el endppoinbt del back.  */

      <button className="btn btn-dark"onClick={() => buscar()}>BUSCAR</button>

  
  
    )
  
  }
  
    

export default Resultados;
