import React from 'react'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Cnavbar = () => {
return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <Link to={"/"} class="navbar-brand">Rentacar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to={"/"} class="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>

        <li class="nav-item">
          <Link to={"/vercoches"} class="nav-link">Ver coches</Link>
          
        </li>
        <li class="nav-item">
          <Link to={"/perfil"} class="nav-link">Identificarse / Registrarse</Link>
          
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Donde estamos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={"/dondemadrid"}class="dropdown-item" >Madrid</Link></li>
            <li><Link to={"/dondebarcelona"} class="dropdown-item">Barcelona</Link></li>
            <li><Link to={"/dondegranada"} class="dropdown-item" >Granada</Link></li>

            
          </ul>
        </li>
        <li class="nav-item">
          <Link to={"/contacto"} class="nav-link">Contacto</Link>
          
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Marca ej: Fiat" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
)

}

export default Cnavbar;