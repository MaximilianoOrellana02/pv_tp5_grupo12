import React from "react";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img
        src="../../public/5526504.png"
        alt="Gestión de alumnos"
        width="320"
      />
      <h2>
        <span role="img" aria-label="libro">
          📚
        </span>{" "}
        Bienvenido al sistema de gestión de alumnos
      </h2>
      <p style={{ fontSize: "1.1rem", margin: "20px auto", maxWidth: "500px",fontFamily:"monospace" }}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Esta aplicación permite gestionar los datos de los alumnos de manera
        sencilla y eficiente.
        <br />
        <span role="img" aria-label="add">
          ➕
        </span>{" "}
        Puedes agregar, editar, eliminar y consultar información detallada de
        cada estudiante.
        <br />
        <span role="img" aria-label="menu">
          🧭
        </span>{" "}
        Utiliza el menú de navegación para acceder a las diferentes secciones
        del sistema.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
        alt="Estudiantes"
        style={{ width: "80px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
