// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa los componentes necesarios para el enrutamiento.

// Importa los componentes que crearás en los siguientes pasos
import Home from './components/Home';
import ListaAlumnos from './components/ListaAlumnos';
import AgregarAlumno from './components/AgregarAlumno';
import EditarAlumno from './components/EditarAlumno';
import DetalleAlumno from './components/DetalleAlumno';
import AcercaDe from './components/AcercaDe';
import NavBar from './components/NavBar'; // Este será tu menú de navegación general

function App() {
  return (
    <Router>
      <NavBar /> {/* El menú de navegación debe ser accesible desde todas las vistas. */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home: Bienvenida o presentación del sistema. */}
        <Route path="/alumnos" element={<ListaAlumnos />} /> {/* Lista de Alumnos: Mostrar todos los alumnos en una tabla o tarjetas. */}
        <Route path="/alumnos/nuevo" element={<AgregarAlumno />} /> {/* Agregar Alumno: Formulario para crear un nuevo alumno. */}
        {/* Rutas dinámicas para editar y ver detalles de alumno. */}
        <Route path="/alumnos/:id/editar" element={<EditarAlumno />} /> {/* Editar Alumno: Formulario precargado para modificar un alumno existente. */}
        <Route path="/alumnos/:id" element={<DetalleAlumno />} /> {/* Detalle del Alumno: Vista de todos los datos del alumno. */}
        <Route path="/acerca" element={<AcercaDe />} /> {/* Acerca de: Puede ser una vista con información de los creadores de la aplicación. */}
      </Routes>
    </Router>
  );
}

export default App;