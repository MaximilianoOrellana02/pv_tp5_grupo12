import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ListaAlumnos.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import StudentCard from "../StudentCard/StudentCard";

function ListaAlumnos({ alumnos, eliminarAlumno, agregarAlumno }) {
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
        (alumno.email &&
          alumno.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredAlumnos(results);
  }, [searchTerm, alumnos]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  //Funcion para agregar alumno de forma aleatoria
  const agregarAlumnoAleatorio = () => {
    const nombres = ["Juan", "Ana", "Pedro", "Maria", "Luis"];
    const apellidos = ["Perez", "Gomez", "Lopez", "Martinez", "Fernandez"];
    const lu = Math.floor(Math.random() * 1000000).toString();
    const email = "@example.com";
    const curso = "Curso " + Math.floor(Math.random() * 5 + 1);
    const domicilio = "Calle " + Math.floor(Math.random() * 100) + " Ciudad";
    const telefono = Math.floor(Math.random() * 1000000000).toString();

    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio =
      apellidos[Math.floor(Math.random() * apellidos.length)];
    const luAleatorio = lu;
    const cursoAleatorio = curso;
    const domicilioAleatorio = domicilio;
    const telefonoAleatorio = telefono;
    const emailAleatorio = `${nombreAleatorio.toLowerCase()}.${apellidoAleatorio.toLowerCase()}${email}`;

    const nuevoAlumno = {
      id: Math.random().toString(36).substring(2, 15),
      nombre: nombreAleatorio,
      apellido: apellidoAleatorio,
      Lu: luAleatorio,
      curso: cursoAleatorio,
      domicilio: domicilioAleatorio,
      telefono: telefonoAleatorio,
      email: emailAleatorio,
    };
    agregarAlumno(nuevoAlumno);
    console.log("Alumno agregado:", nuevoAlumno);
  };

  return (
    <div className="lista-alumnos-container">
      <h2>Lista de Alumnos</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="botones-agregar">
        <Link to="/alumnos/nuevo">
          <button className="btn-agregar">
            <i className="fa-solid fa-plus"></i> Agregar
          </button>
        </Link>
        <button className="btn-agregar-al" onClick={agregarAlumnoAleatorio}>
          <i className="fa-solid fa-user-plus"></i> Agregar Alumno Aleatorio
        </button>
      </div>

      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados. ¡Agrega uno nuevo!</p>
      ) : (
        <div className="tarjetas-alumnos">
          {filteredAlumnos.map((alumno) => (
            <StudentCard
              key={alumno.id}
              alumno={alumno}
              eliminarAlumno={eliminarAlumno}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaAlumnos;
