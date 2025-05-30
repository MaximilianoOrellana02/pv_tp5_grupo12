import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Para obtener el ID del alumno de la URL.

function DetalleAlumno({ obtenerAlumno }) {
  const { id } = useParams(); // Obtiene el parámetro de la URL.

  const navigate = useNavigate();

  const alumno = obtenerAlumno(id);

  if (!alumno) {
    return <div>Alumno no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalle del Alumno</h2>
      <ul>
        <li>
          <strong>LU:</strong> {alumno.Lu}
        </li>
        <li>
          <strong>Nombre:</strong> {alumno.nombre}
        </li>
        <li>
          <strong>Apellido:</strong> {alumno.apellido}
        </li>
        <li>
          <strong>Curso:</strong> {alumno.curso}
        </li>
        <li>
          <strong>Email:</strong> {alumno.email}
        </li>
        <li>
          <strong>Domicilio:</strong> {alumno.domicilio}
        </li>
        <li>
          <strong>Teléfono:</strong> {alumno.telefono}
        </li>
      </ul>
      <button onClick={() => navigate("/alumnos")}>Volver a la lista</button>
    </div>
  );
}

export default DetalleAlumno;
