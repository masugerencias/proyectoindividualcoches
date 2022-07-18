import React from "react";

import { Routes, Route } from "react-router-dom";
import Vercoches from "../pages/Vercoches";
import Inicio from "../pages/Inicio";
import Perfil from "../pages/Perfil";
import Contacto from "../pages/Contacto";
import Dondegranada from "../pages/Dondegranada";
import Dondemadrid from "../pages/Dondemadrid";
import Dondebarcelona from "../pages/Dondebarcelona";
import Resultados from "../pages/Resultados";
import Bienvenido from "../pages/Bienvenido";
import Busqueda from "../pages/Busqueda";
import Masinfo from "../pages/Masinfo";
import Obtenidos from "../pages/Obtenidos";


const Main = () => {
       /* al meterse en path escrityo, se mostrara el elemento que hay en corchetes, que es lo que enrouta MAIN desde APP js. */
    return (
    <div>
        <Routes>
        <Route path="/vercoches" element={<Vercoches/>} />
        <Route path="/" element={<Inicio/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/dondegranada" element={<Dondegranada/>} />
        <Route path="/dondemadrid" element={<Dondemadrid/>} />
        <Route path="/dondebarcelona" element={<Dondebarcelona/>} />
        <Route path="/resultados" element={<Resultados/>} />
        <Route path="/bienvenido" element={<Bienvenido/>} />
        <Route path="/busqueda" element={<Busqueda/>} />
        <Route path="/masinfo/:id" element={<Masinfo/>} />
        <Route path="/obtenidos" element={<Obtenidos/>} />





        </Routes>
    </div>
    );

}
export default Main;
