import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import
import Home from "./views/HomePage/Home";
import ListaAlumnos from "./views/ListaAlumnosPage/ListaAlumnos";
import AgregarAlumno from "./services/AgregarAlumno/AgregarAlumno";
import EditarAlumno from "./services/EditarAlumno/EditarAlumno";
import DetalleAlumno from "./views/DetalleAlumnoPage/DetalleAlumno";
import AcercaDe from "./views/AcercaDePage/AcercaDe";
import NavBar from "./components/NavBar/NavBar";

//CSSglobales
import "./App.css";

function App() {
  const [alumnos, setAlumnos] = useState([]);

  const navigate = useNavigate();

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
              <ListaAlumnos
                alumnos={alumnos}
                eliminarAlumno={eliminarAlumno}
                agregarAlumno={agregarNuevoAlumno}
              />
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
