// src/components/AgregarAlumno.jsx
import React, { useState } from 'react'; // Importa useState para manejar el estado local del formulario

function AgregarAlumno() { // Por ahora, este componente no recibe ninguna prop
  // Estado local para los campos del formulario.
  // Cada propiedad aquí debe coincidir con el atributo 'name' de tus inputs HTML.
  const [alumno, setAlumno] = useState({
    Lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '' // Asegúrate de que este nombre de propiedad sea consistente
  });

  // Manejador de cambios para los inputs del formulario
  // Se ejecuta cada vez que el usuario escribe en un campo de entrada.
  const handleChange = (e) => {
    const { name, value } = e.target; // Desestructura para obtener el 'name' y 'value' del input que cambió
    setAlumno({ 
      ...alumno, // Mantiene todos los campos existentes del estado 'alumno'
      [name]: value // Actualiza solo el campo cuyo 'name' coincide con el input que cambió
    });
  };

  // Manejador del envío del formulario
  // Se ejecuta cuando el usuario hace clic en el botón de submit o presiona Enter en un campo.
  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANTE: Previene el comportamiento por defecto del formulario.
                        // Sin esto, la página se recargaría al enviar el formulario.
    
    // Por ahora, solo mostraremos los datos del alumno en la consola para verificar.
    // Más tarde, esta es la parte donde llamarías a una función pasada por props para guardar el alumno.
    console.log("Datos del alumno a agregar:", alumno);

    // Opcional: Limpiar el formulario después de "enviar" los datos (aunque aquí solo los imprimimos)
    setAlumno({
      Lu: '',
      nombre: '',
      apellido: '',
      curso: '',
      email: '',
      domicilio: '',
      telefono: ''
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        
        <label>
          LU:
          <input 
            type="text" 
            name="Lu" 
            value={alumno.Lu} // El valor del input se vincula al estado local
            onChange={handleChange} // Se actualiza el estado cuando el input cambia
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <label>
          Nombre:
          <input 
            type="text" 
            name="nombre" 
            value={alumno.nombre} 
            onChange={handleChange} 
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <label>
          Apellido:
          <input 
            type="text" 
            name="apellido" 
            value={alumno.apellido} 
            onChange={handleChange} 
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <label>
          Curso:
          <input 
            type="text" 
            name="curso" 
            value={alumno.curso} 
            onChange={handleChange} 
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={alumno.email} 
            onChange={handleChange} 
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <label>
          Domicilio:
          <input 
            type="text" 
            name="domicilio" 
            value={alumno.domicilio} 
            onChange={handleChange} 
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <label>
          Teléfono:
          <input 
            type="text" 
            name="telefono" 
            value={alumno.telefono} 
            onChange={handleChange} 
            required 
            style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
          Guardar Alumno
        </button>
      </form>
    </div>
  );
}

export default AgregarAlumno;