import React from "react";

import { useState, useEffect } from 'react';




const Cgrid=()=>{
  const [todoscoches, setTodoscoches] = useState("");


 
      
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    fetch("todoslosvehiculos", requestOptions)
      .then((response) => response.json())
      .then((response) => {setTodoscoches(response)})


/* NO ME FUNCIONA ESTA HISTORIA DE LA FOTO
let url1 = todoscoches[0].foto;
const imagen1 = <img src={url1}/> 


De todos modos los divs no se me generan en funcion de los resultaods de mongo...osea que tambien tengo que arreglar eso*/
 
return(
<div>

{todoscoches ? todoscoches.map((msj,i) => <div>
    
  <div class="row">   
<div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{msj.marca}</h5>
          <div class="card-text text-black-50">{msj.modelo}</div>
        </div>
      </div>
    </div>

    </div>  

    </div>) : ""}  
 
    </div>

)

}

export default Cgrid;

