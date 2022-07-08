import React from "react";

import { useState, useEffect } from 'react';




const Cgrid=()=>{
  const [todoscoches, setTodoscoches] = useState("");

  useEffect(() => {
 
      
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    fetch("todoslosvehiculos", requestOptions)
      .then((response) => response.json())
      .then((response) => {setTodoscoches(response);
        console.log(todoscoches)})
}, []) 

console.log(todoscoches);
/* NO ME FUNCIONA ESTA HISTORIA DE LA FOTO
let url1 = todoscoches[0].foto;
const imagen1 = <img src={url1}/> 


De todos modos los divs no se me generan en funcion de los resultaods de mongo...*/
 
return(
  <div className="filtrosycoches">
 
            <p></p>
  


  
  



<div class="container">
  <div class="row">





  <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/R.4b0d0250880fb8b12580f9e6e5d3688b?rik=EKB6lrE44MYKmw&riu=http%3a%2f%2fd500.epimg.net%2fcincodias%2fimagenes%2f2013%2f07%2f23%2falbum%2f1374589973_640825_1374590551_album_normal.jpg&ehk=OmVNOrBImN%2b2rVDwn4RGWuiZNda2nE2iGSyt7x0th4I%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..."/>
         <div class="card-body text-center">
          <h5 class="card-title mb-0">{todoscoches ? todoscoches[0].marca : ""}</h5>
          <div class="card-text text-black-50">{todoscoches ? todoscoches[0].modelo : ""}</div>
        </div>
      </div>
    </div>





  <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://classicroadtrips.es/wp-content/uploads/2018/06/LIVEN-Tuja_Hector-2462-1024x1024.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{todoscoches ? todoscoches[1].marca : ""}</h5>
          <div class="card-text text-black-50">{todoscoches ? todoscoches[1].modelo : ""}</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://i.pinimg.com/736x/5f/8b/15/5f8b1528620e03127971874ae28c8960--traction-avant-vintage-bikes.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{todoscoches ? todoscoches[2].marca : ""}</h5>
          <div class="card-text text-black-50">{todoscoches ? todoscoches[2].modelo : ""}</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{todoscoches ? todoscoches[3].marca : ""}</h5>
          <div class="card-text text-black-50">{todoscoches ? todoscoches[3].modelo : ""}</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{todoscoches ? todoscoches[4].marca : ""}</h5>
          <div class="card-text text-black-50">{todoscoches ? todoscoches[4].modelo : ""}</div>
        </div>
      </div>
    </div>






 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{todoscoches ? todoscoches[5].marca : ""}</h5>
          <div class="card-text text-black-50">{todoscoches ? todoscoches[5].modelo : ""}</div>
        </div>
      </div>
    </div>

 




 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>






 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>







 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>






 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>






 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>






 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>

 



 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>





 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>

 



 <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1
" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>


  </div>
  

</div>

</div> 
)

}

export default Cgrid;

