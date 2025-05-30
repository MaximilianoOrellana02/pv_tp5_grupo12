// src/components/ListaAlumnos.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para los botones de navegación

function ListaAlumnos({ alumnos, eliminarAlumno }) { // Recibe 'alumnos' y 'eliminarAlumno' como props
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? ( // Mostrará este mensaje si no hay alumnos (porque empezamos con [] en App.jsx)
        <p>No hay alumnos registrados. ¡Agrega uno nuevo!</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>LU</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Nombre</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Apellido</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map(alumno => ( // Itera sobre el array 'alumnos' para renderizar cada fila
              <tr key={alumno.id}> {/* IMPORTANTE: Cada elemento mapeado debe tener una 'key' única para React */}
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{alumno.Lu}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{alumno.nombre}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{alumno.apellido}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  {/* Botones de acción con navegación o eventos */}
                  <Link to={`/alumnos/${alumno.id}`} style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>Ver Detalles</Link>
                  <Link to={`/alumnos/${alumno.id}/editar`} style={{ marginRight: '10px', textDecoration: 'none', color: 'orange' }}>Editar</Link>
                  <button onClick={() => eliminarAlumno(alumno.id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaAlumnos;