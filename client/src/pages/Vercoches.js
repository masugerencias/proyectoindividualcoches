import React from "react";
import Cgrid from "../componentes/Cgrid";
import Cnavbar from "../componentes/Cnavbar";
import Cfooter from "../componentes/Cfooter";
import Cbusquedas from "../componentes/Cbusquedas";


const Vercoches = () => {
  
   
    
        return(
            <div className="filtros">

            {Cbusquedas()} <br></br>{Cgrid()}
            </div>
        ) 

    
}
export default Vercoches;
