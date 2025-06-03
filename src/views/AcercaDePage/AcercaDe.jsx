import React from "react";

import "./AcercaDe.css";

function AcercaDe() {
  return (
    <div className="acerca-de-container">
      <div className="acerca-de-header">
        <h1>¿Quiénes somos?</h1>
      </div>
      <div className="acerca-de-content">
        <p>
          Somos un equipo de estudiantes apasionados, dedicados al desarrollo de
          software como parte de un proyecto para nuestra facultad.
        </p>
        <p>
          Este sistema de gestión de alumnos es el resultado de nuestro esfuerzo
          por aplicar los conocimientos adquiridos, buscando crear una
          herramienta práctica e intuitiva que simplifique la administración
          académica.
        </p>
        <p>
          A través de este proyecto, nos comprometemos a ofrecer una solución
          funcional y bien diseñada, aprendiendo y creciendo en el proceso de
          desarrollo.
        </p>
      </div>
    </div>
  );
}

export default AcercaDe;
