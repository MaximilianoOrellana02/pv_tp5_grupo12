import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarAlumno({ obtenerAlumno, editarAlumno }) {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const alumnoExistente = obtenerAlumno(id);


  const [alumno, setAlumno] = useState(
    alumnoExistente || {
      Lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    }
  );

  useEffect(() => {
    if (alumnoExistente) {
      setAlumno(alumnoExistente);
    }
  }, [alumnoExistente]);

  if (!alumnoExistente) {
    return <div>Alumno no encontrado.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarAlumno(alumno); 
    
  };

  return (
    <div className="agregar-alumno">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Editar Alumno</h2>
          <i className="fa-solid fa-user-pen"></i>
        </div>

        <div className="input-group">
          <label>LU:</label>
          <input
            type="text"
            name="Lu"
            value={alumno.Lu}
            onChange={handleChange}
            required
          />

          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={alumno.nombre}
            onChange={handleChange}
            required
          />

          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={alumno.apellido}
            onChange={handleChange}
            required
          />

          <label>Curso:</label>
          <input
            type="text"
            name="curso"
            value={alumno.curso}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={alumno.email}
            onChange={handleChange}
            required
          />

          <label>Domicilio:</label>
          <input
            type="text"
            name="domicilio"
            value={alumno.domicilio}
            onChange={handleChange}
            required
          />

          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={alumno.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={() => navigate("/alumnos")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarAlumno;
