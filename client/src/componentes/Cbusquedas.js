import React from "react";




const Cbusquedas=()=>{



return(
<div class="row g-3">
 
 
<div class="col-md-3">
    <label for="validationDefault04" class="form-label"></label>
    <select class="form-select" id="validationDefault04" required>
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
      <option selected disabled value="">Marca</option>
      <option>Seat</option>
      <option>Fiat</option>
      <option>Citroen</option>
      <option>Mercedes</option>
      <option>Volkswagen</option>
      <option>Aston Martin</option>
      <option>Rolls Royce</option>
      <option>Jaguar</option>
      <option>Volvo</option>
      <option>Triumph</option>
      <option>MG</option>
      <option>Ferrari</option>
      <option>Lancia</option>
      <option>BMW</option>


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
    <button class="btn btn-primary" type="buton"> BUSCAR</button>
  </div>
</div>
/*Al darle a este boton lo que quiero es que se haga la busqueda en mongo y que se me muestre en una pagina nueva que se llame RESULTADOS como el endppoinbt del back.  */
  



)

}

export default Cbusquedas;

