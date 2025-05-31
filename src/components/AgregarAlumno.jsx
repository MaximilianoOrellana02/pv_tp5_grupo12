// src/components/AgregarAlumno.jsx
import React, { useState } from "react"; // Necesitamos useState para el estado local del formulario

import "./AgregarAlumno.css";

function AgregarAlumno({ agregarAlumno }) {
  // Ahora el componente recibe la prop 'agregarAlumno'
  // Estado local para los campos del formulario.
  // Cada propiedad aquí debe coincidir con el atributo 'name' de tus inputs HTML.
  const [alumnoForm, setAlumnoForm] = useState({
    Lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "", // Asegúrate de que esta propiedad sea consistente
  });

  // Manejador de cambios para los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumnoForm({ ...alumnoForm, [name]: value });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página

    agregarAlumno(alumnoForm); // Llama a la función 'agregarAlumno' pasada por props desde App.jsx
    // Esta función se encargará de añadir el alumno al array centralizado en App.jsx.

    // Opcional: Limpiar el formulario después de enviar los datos
    setAlumnoForm({
      Lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit}>
        <label>
          LU:
          <input
            type="text"
            name="Lu"
            value={alumnoForm.Lu}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={alumnoForm.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={alumnoForm.apellido}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Curso:
          <input
            type="text"
            name="curso"
            value={alumnoForm.curso}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={alumnoForm.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Domicilio:
          <input
            type="text"
            name="domicilio"
            value={alumnoForm.domicilio}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={alumnoForm.telefono}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Agregar Alumno</button>
      </form>
    </div>
  );
}

export default AgregarAlumno;
