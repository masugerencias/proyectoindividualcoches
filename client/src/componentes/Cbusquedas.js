// importar React de la biblioteca.
import React from 'react'; //aqui no se porqué se me abrieron unos corchetes.
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';



const Cbusquedas = () => {

   



  return (

      <div className="col-12">
        <br></br>
        <button className="btn btn-primary" type="button"><Link style ={{textDecoration:'none', color:'white'}} to={"/busqueda"}>BUSQUEDA AVANZADA</Link></button>

{/* ESTE BOTON manda a ejecutar la funcion que va al back dentro de este componente. */}
      </div>
  
    /*Al darle a este boton lo que quiero es que se haga la busqueda en mongo y que se me muestre en una pagina nueva que se llame RESULTADOS como el endppoinbt del back.  */




  )

}
export default Cbusquedas;

