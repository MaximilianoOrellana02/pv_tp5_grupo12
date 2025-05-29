import React from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID del alumno de la URL.

function EditarAlumno() {
  const { id } = useParams(); // Obtiene el parámetro de la URL.

  // Aquí deberás cargar los datos del alumno con el ID recibido para precargar el formulario.
  return (
    <div>
      <h2>Editar Alumno (ID: {id})</h2>
      <form>
        {/* Campos del formulario precargados con los datos del alumno. */}
        {/* Implementar manejo de eventos con onChange y onSubmit. */}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;