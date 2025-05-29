import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación.

function NavBar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/">Inicio</Link></li> {/* Enlace a la página de inicio. */}
        <li><Link to="/alumnos">Lista de Alumnos</Link></li> {/* Enlace a la lista de alumnos. */}
        <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li> {/* Enlace al formulario para agregar un nuevo alumno. */}
        <li><Link to="/acerca">Acerca de</Link></li> {/* Enlace a la página "Acerca de". */}
      </ul>
    </nav>
  );
}

export default NavBar;