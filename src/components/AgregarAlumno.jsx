
import React, { useState } from "react"; 
import "./AgregarAlumno.css";

function AgregarAlumno({ agregarAlumno }) {
  
  const [alumnoForm, setAlumnoForm] = useState({
    Lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "", 
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumnoForm({ ...alumnoForm, [name]: value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 

    agregarAlumno(alumnoForm); 

    
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
    <div className="agregar-alumno">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Agregar Estudiante</h2>
          <i className="fa-solid fa-user-plus"></i>
        </div>

        <div className="input-group">
          <label>LU:</label>
          <input
            type="text"
            name="Lu"
            value={alumnoForm.Lu}
            onChange={handleChange}
            placeholder="Libreta Universitaria"
            required
          />

          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={alumnoForm.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />

          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={alumnoForm.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />

          <label>Curso:</label>

          <input
            type="text"
            name="curso"
            value={alumnoForm.curso}
            onChange={handleChange}
            placeholder="Curso"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={alumnoForm.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
<label>Domicilio:</label>
          <input
            type="text"
            name="domicilio"
            value={alumnoForm.domicilio}
            onChange={handleChange}
            placeholder="Domicilio"
            required
          />

          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={alumnoForm.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            required
          />

          <button type="submit">Agregar Alumno</button>
        </div>
      </form>
    </div>
  );
 
}

export default AgregarAlumno;
