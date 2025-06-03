import React from "react";
import "./Home.css";

import StudentCard from "./StudentCard.jsx"; 

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h1>Bienvenido al Sistema de Gestión de Alumnos</h1>
          <p>
            Con este sistema, simplifica y optimiza la gestión de la información
            de tus alumnos, obteniendo control total de manera eficiente y
            sencilla.
          </p>
        </div>
      </div>
      <div className="features">
        <h2>Características Principales</h2>
        <div className="card-section">
          <StudentCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUicen8YYMsUwOANYG8rR0k8eUCWiCmdhBA&s"
            title="Agregar Alumnos"
            description="Permite añadir nuevos alumnos al sistema de forma rápida y sencilla."
          />
          <StudentCard
            imageUrl="https://static.vecteezy.com/system/resources/previews/016/143/021/non_2x/to-do-list-icon-in-comic-style-document-checklist-cartoon-illustration-on-white-isolated-background-notepad-check-mark-splash-effect-business-concept-vector.jpg"
            title="Listar Alumnos"
            description="Muestra una lista de todos los alumnos registrados en el sistema."
          /><StudentCard
            imageUrl="https://static.vecteezy.com/system/resources/previews/006/086/255/non_2x/edit-interface-icon-vector.jpg"
            title="Editar Alumnos"
            description="Permite modificar la información de los alumnos ya registrados."
          />
          <StudentCard
            imageUrl="https://static.vecteezy.com/system/resources/previews/005/162/915/non_2x/delete-icon-no-sign-cancel-wrong-and-reject-free-vector.jpg"
            title="Eliminar Alumnos"
            description="Facilita la eliminación de alumnos del sistema cuando ya no son necesarios."
          />
          <StudentCard
            imageUrl="https://cdn-icons-png.flaticon.com/512/9850/9850830.png"
            title="Consultar Alumnos"
            description="Permite buscar y consultar la información de un alumno específico."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;