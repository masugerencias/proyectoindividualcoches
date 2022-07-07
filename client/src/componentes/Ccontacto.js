import React
 from "react"


const Ccontacto = () =>{
return(
    <form>
        <div className="form-group-todo">
        Ayudamos a mejorar
    <div class="form-group">
      <label for="exampleFormControlInput1">Email</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" />
    </div>
   
   
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Pon tu comentario</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button class="btn btn-dark" >ENVIAR</button>

    </div>
  </form>

/* aqui quiero meter una funcion para que se envie a mongo los comentarios en una coleccion nueva. */
)
}

export default Ccontacto 