
import Cofertas from "../componentes/Cofertas";
import { Link } from "react-router-dom";
import Ccarrousel from "../componentes/Ccarrousel";


const Inicio = () => {
  

    
        return(
           
              <div className="iniciocss">          
            {Ccarrousel()} 
            OFERTAS POR CATEEGORIA
            <br></br>
            <br></br>
            {Cofertas()}

            <br></br>

            <br></br>
            
            <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button"><Link style ={{textDecoration:'none', color:'white'}} to={"/vercoches"}>VER TODOS</Link></button>
</div>
<br></br>
<br></br>








            ¿Qué es Lorem Ipsum?
Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
<br></br>
<br></br>
            <br></br>
            </div>
        ) 

    
}
export default Inicio;
