// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Importa tus componentes
import Home from "./components/Home";
import ListaAlumnos from "./components/ListaAlumnos";
import AgregarAlumno from "./components/AgregarAlumno";
import EditarAlumno from "./components/EditarAlumno";
import DetalleAlumno from "./components/DetalleAlumno";
import AcercaDe from "./components/AcercaDe";
import NavBar from "./components/NavBar";

//CSS
import "./App.css"; // Asegúrate de tener un archivo CSS para estilos globales

function App() {
  const [alumnos, setAlumnos] = useState([]);

  const navigate = useNavigate(); // Ya funciona porque App está dentro de <BrowserRouter>

  const agregarNuevoAlumno = (nuevoAlumno) => {
    const id = (
      alumnos.length > 0
        ? Math.max(...alumnos.map((a) => parseInt(a.id))) + 1
        : 1
    ).toString();
    const alumnoConId = { ...nuevoAlumno, id };
    setAlumnos([...alumnos, alumnoConId]);
    navigate("/alumnos");
  };

  const eliminarAlumno = (id) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar a este alumno?")
    ) {
      setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    }
  };

  const editarAlumnoExistente = (alumnoActualizado) => {
    setAlumnos(
      alumnos.map((a) =>
        a.id === alumnoActualizado.id ? alumnoActualizado : a
      )
    );
    navigate("/alumnos");
  };

  const obtenerAlumnoPorId = (id) => {
    console.log("Función de obtener por ID placeholder:", id);
    return alumnos.find((a) => a.id === id) || null;
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/alumnos"
            element={
              <ListaAlumnos alumnos={alumnos} eliminarAlumno={eliminarAlumno} />
            }
          />
          <Route
            path="/alumnos/nuevo"
            element={<AgregarAlumno agregarAlumno={agregarNuevoAlumno} />}
          />
          <Route
            path="/alumnos/:id/editar"
            element={
              <EditarAlumno
                alumnos={alumnos}
                editarAlumno={editarAlumnoExistente}
                obtenerAlumno={obtenerAlumnoPorId}
              />
            }
          />
          <Route
            path="/alumnos/:id"
            element={<DetalleAlumno obtenerAlumno={obtenerAlumnoPorId} />}
          />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
