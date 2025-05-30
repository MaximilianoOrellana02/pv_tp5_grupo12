import React from "react";

import "./AcercaDe.css";

function AcercaDe() {
  return (
    <div
      style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}
    >
      <h2>
        <i class="fa-solid fa-triangle-exclamation"></i> Acerca de
      </h2>
      <p style={{fontFamily:"monospace",listStyle: "none", padding: 0, fontSize: "1.5rem"}}>
        Esta aplicación fue desarrollada por el <strong>Grupo 12</strong> para
        el Trabajo Práctico N° 5 de Programación Visual.
      </p>
      <h3>
        <i class="fa-solid fa-person"></i>
        <i class="fa-solid fa-person"></i> Integrantes del grupo:
      </h3>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem",fontFamily:"monospace" }}>
        <li>• Caucota Gonzalo</li>
        <li>• Orellana Cristian Maximiliano</li>
        <li>• Alvarez Mateo</li>
        <li>• Guari Cristian</li>
      </ul>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
        alt="Equipo"
        style={{ width: "90px", marginTop: "20px" }}
      />
    </div>
  );
}

export default AcercaDe;
