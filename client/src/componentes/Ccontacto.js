import React
 from "react"

/**
 * Es un componente que sólo consta de un formulario de contacto.
 * @returns Un formulario de contacto
 */
const Ccontacto = () =>{
return(
    <form>
        <div className="form-group-todo">
        Ayudamos a mejorar
    <div className="form-group">
      <label for="exampleFormControlInput1">Email</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" />
    </div>
   
   
    <div className="form-group">
      <label for="exampleFormControlTextarea1">Pon tu comentario</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button className="btn btn-dark" >ENVIAR</button>

    </div>
  </form>

/* aqui quiero meter una funcion para que se envie a mongo los comentarios en una coleccion nueva. */
)
}

export default Ccontacto 