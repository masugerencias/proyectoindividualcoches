import React from "react";
import Clogin from "../componentes/Clogin";
import ComponenteRegistro from "../componentes/ComponenteRegistro";


const Perfil = () => {  
    return( 
        
<div className="loginregistrogrande">

        <div className="loginno">  
        { Clogin()} 
        
        <br></br>
        </div>
        <div className="registrono">  
        <br></br>
{ ComponenteRegistro()}
      
        </div>
        
        </div>

    ) 


}
export default Perfil;