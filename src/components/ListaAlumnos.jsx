import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import "./ListaAlumnos.css";
import SearchBar from "./SearchBar";

function ListaAlumnos({ alumnos, eliminarAlumno }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAlumnos, setFilteredAlumnos] = useState([]);

  useEffect(() => {
    console.log("Filtrando alumnos...");
    const results = alumnos.filter(
      (alumno) =>
        alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (alumno.apellido &&
          alumno.apellido.toLowerCase().includes(searchTerm.toLowerCase())) ||
          alumno.Lu.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (alumno.email && alumno.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredAlumnos(results);
  }, [searchTerm, alumnos]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="lista-alumnos-container">
      <h2>Lista de Alumnos</h2>
      <SearchBar onSearch={handleSearch} />
      <div>
        <Link to="/alumnos/nuevo">
          <button className="btn-agregar">
            <i className="fa-solid fa-plus"></i> Agregar
          </button>
        </Link>
      </div>

      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados. ¡Agrega uno nuevo!</p>
      ) : (
        <div className="tarjetas-alumnos">
          {filteredAlumnos.map((alumno) => (
            <div className="tarjeta-alumno" key={alumno.id}>
              <h4>
                <strong>{alumno.nombre}</strong>
              </h4>
              <p>
                <strong>LU:</strong> {alumno.Lu}
              </p>
              <p>
                <strong>Email:</strong> {alumno.email}
              </p>
              <div className="acciones-alumno">
                <div className="acciones">
                  <Link to={`/alumnos/${alumno.id}`}>
                    <i class="fa-solid fa-circle-info"></i>
                  </Link>
                  <Link to={`/alumnos/${alumno.id}/editar`}>
                    <i
                      class="fa-solid fa-pen-to-square"
                      style={{ backgroundColor: "#44a309" }}
                    ></i>
                  </Link>
                </div>
                <div className="eliminar">
                  <button onClick={() => eliminarAlumno(alumno.id)}>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaAlumnos;
