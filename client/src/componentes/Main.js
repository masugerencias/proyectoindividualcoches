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


const Main = () => {
       
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

        </Routes>
    </div>
    );

}
export default Main;
