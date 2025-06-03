import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetalleAlumno.css";

function DetalleAlumno({ obtenerAlumno }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const alumno = obtenerAlumno(id);

  if (!alumno) {
    return (
      <div className="detalle-alumno-no-encontrado">
        <h2>Alumno no encontrado.</h2>
        <button className="btn-volver" onClick={() => navigate("/alumnos")}>
          <i className="fa-solid fa-arrow-left"></i> Volver a la lista
        </button>
      </div>
    );
  }

  return (
    <div className="detalle-alumno-container">
      <div className="detalle-alumno-header">
        <button className="btn-volver" onClick={() => navigate("/alumnos")}>
          <i className="fa-solid fa-arrow-left"></i> Volver
        </button>
      </div>
      <div className="alumno-detalle-card">
        <div className="alumno-detalle-header">
          <i className="fa-solid fa-user-graduate alumno-icon"></i>
          <h1>
            {alumno.nombre} {alumno.apellido}
          </h1>
        </div>
        <div className="alumno-detalle-body">
          <p>
            <strong>LU:</strong> {alumno.Lu}
          </p>
          <p>
            <strong>Curso:</strong> {alumno.curso}
          </p>
          <p>
            <strong>Email:</strong> {alumno.email}
          </p>
          <p>
            <strong>Domicilio:</strong> {alumno.domicilio}
          </p>
          <p>
            <strong>Teléfono:</strong> {alumno.telefono}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetalleAlumno;
