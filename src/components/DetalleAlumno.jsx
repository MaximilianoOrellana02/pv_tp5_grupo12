import React from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID del alumno de la URL.

function DetalleAlumno() {
  const { id } = useParams(); // Obtiene el parámetro de la URL.

  // Aquí deberás cargar los datos del alumno con el ID recibido para mostrar su detalle.
  return (
    <div>
      <h2>Detalle del Alumno (ID: {id})</h2>
      <p>Aquí se mostrarán todos los datos del alumno.</p>
      {/* Mostrar todos los datos del alumno. */}
    </div>
  );
}

export default DetalleAlumno;