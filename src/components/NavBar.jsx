import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación.

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../public/logo.png" alt="Logo" />
        <h2>Gestión de Alumnos</h2>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>{" "}
        <li>
          <Link to="/alumnos">Alumnos</Link>
        </li>{" "}
        <li>
          <Link to="/acerca">Acerca de</Link>
        </li>{" "}
      </ul>
    </nav>

    //<Link to="/alumnos/nuevo">Agregar Alumno</Link>
  );
};

export default NavBar;
