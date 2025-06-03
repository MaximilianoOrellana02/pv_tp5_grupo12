import React from "react";

import "./StudentCard.css";
import { Link } from "react-router-dom";

const StudentCard = ({ alumno, eliminarAlumno }) => {
  return (
    <div className="tarjeta-alumno" key={alumno.id}>
      <h4>
        <strong>
          {alumno.nombre} {alumno.apellido}
        </strong>
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
  );
};

export default StudentCard;
