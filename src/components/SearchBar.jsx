// src/components/SearchBar/SearchBar.jsx
import React, { useState } from "react";

import "./SearchBar.css"; // Asegúrate de tener un archivo CSS para estilos

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Notifica al componente padre
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch(""); // Notifica al padre que la búsqueda se ha limpiado
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Buscar alumno por nombre, apellido, LU o email..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <i className="fa-solid fa-magnifying-glass search-icon-left"></i>
      {searchTerm && (
        <button className="clear-search-button" onClick={handleClear}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
