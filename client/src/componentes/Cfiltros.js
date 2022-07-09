import React from "react";
import Cgrid from "../componentes/Cgrid";
import Cnavbar from "../componentes/Cnavbar";
import Cfooter from "../componentes/Cfooter";
// importar React de la biblioteca.
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';


/* en esta pagina seran los filtros de los coches de mongo */
const Cfiltros = () => {

/* aqui tienen que aparecer los resultados tras darle al boton de buscar, joder */
const buscar = () => {





}


    
  
    return (
      <div class="row g-3">
  
  
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label"></label>
          <select class="form-select" id="validationDefault04" >
            <option selected disabled value="">País</option>
            <option>España</option>
            <option>Italia</option>
            <option>Francia</option>
            <option>Inglaterra</option>
            <option>Alemania</option>
            <option>Suecia</option>
  
  
  
          </select>
        </div>
  
  
  
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label"></label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Descapotable</option>
            <option>Si</option>
            <option>No</option>
  
          </select>
        </div>
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label"></label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Número de puertas</option>
            <option>3</option>
            <option>5</option>
  
          </select>
        </div>
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label"></label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Número de plazas</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
  
  
          </select>
        </div>
   
  
  
        <div class="col-12">
          <br></br>
          <button class="btn btn-dark"onClick={() => buscar()}>BUSCAR</button>

  {/* ESTE BOTON manda a ejecutar la funcion que va al back dentro de este componente. */}
        </div>
      </div>,<p>aqui me tiene que aparecer un botn y el friltro coño</p>,
      /*Al darle a este boton lo que quiero es que se haga la busqueda en mongo y que se me muestre en una pagina nueva que se llame RESULTADOS como el endppoinbt del back.  */

      <button class="btn btn-dark"onClick={() => buscar()}>BUSCAR</button>

  
  
    )
  
  }
  
    

export default Cfiltros;
