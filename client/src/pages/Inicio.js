
import Cofertas from "../componentes/Cofertas";
import { Link } from "react-router-dom";
import Ccarrousel from "../componentes/Ccarrousel";


const Inicio = () => {
  

    
        return(
           
              <div className="iniciocss">          
            <Ccarrousel/> 
            
            <br></br>
_________________________________________________________________            <br></br>
            <br></br> <br></br>
            <Cofertas/>

            <br></br>

            <br></br>
            
            <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button"><Link style ={{textDecoration:'none', color:'white'}} to={"/vercoches"}>VER TODOS</Link></button>
</div>
<br></br>
<br></br>

<div className="textoinicio">

Un automóvil de turismo, también conocido simplemente como turismo, o automóvil, es un tipo de vehículo de motor destinado al transporte de personas, con al menos cuatro ruedas y un máximo de nueve plazas incluido el conductor.

Otros términos para referirse a un automóvil de turismo son carro (en gran parte de Hispanoamérica), coche (principalmente en España) y auto (en Argentina, Chile y Uruguay).<br></br>
<br></br>
            <br></br>
            </div>
            </div>
        ) 

    
}
export default Inicio;
