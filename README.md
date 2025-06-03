# 📚 Sistema de Gestión de Alumnos

---

## 🚀 Descripción del Proyecto

Este proyecto es un sistema web interactivo para la gestión de alumnos, desarrollado con **React.js**. Permite a los usuarios llevar un registro de estudiantes, incluyendo sus datos personales, número de legajo (LU) y correo electrónico. La aplicación facilita la visualización, adición, edición y eliminación de alumnos, además de contar con funcionalidades de búsqueda y una interfaz de usuario intuitiva.

---

## ✨ Características Principales

* **Listado de Alumnos**: Visualiza todos los alumnos registrados en una lista interactiva.
* **Búsqueda Rápida**: Filtra alumnos por nombre, apellido, LU o email.
* **Agregar Alumno**: Formulario para incorporar nuevos estudiantes al sistema.
* **Agregar Alumno Aleatorio**: Botón para añadir rápidamente datos de alumnos generados al azar (útil para pruebas).
* **Editar Alumno**: Modifica la información de alumnos existentes.
* **Eliminar Alumno**: Opción para remover alumnos del registro.
* **Detalle de Alumno**: Vista específica para ver la información completa de un alumno.
* **Navegación Intuitiva**: Barra de navegación superior para un acceso rápido a las diferentes secciones de la aplicación.
* **Diseño Responsivo**: Interfaz adaptada a diferentes tamaños de pantalla (escritorio, tablet y móvil).

---

## 🛠️ Tecnologías Utilizadas

* **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
* **React Router DOM**: Para gestionar la navegación y las rutas de la aplicación.
* **CSS3**: Para los estilos y el diseño responsivo de la interfaz.
* **Font Awesome**: Para los iconos utilizados en la interfaz.

---

## ⚙️ Instalación y Uso

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/es/) (que incluye npm o yarn).

### Pasos

1.  **Clonar el repositorio** (si está en un control de versiones como Git):
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd nombre-del-proyecto
    ```
2.  **Instalar las dependencias**:
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```
3.  **Iniciar la aplicación**:
    ```bash
    npm start
    # o si usas yarn
    yarn start
    ```
    Esto iniciará la aplicación en modo desarrollo. Abre tu navegador y navega a `http://localhost:3000`.

---

¡Claro! Un buen README.md es esencial para cualquier proyecto, ya que sirve como la tarjeta de presentación de tu aplicación. Debe ser claro, conciso y proporcionar toda la información necesaria para que otros entiendan, usen y contribuyan al proyecto.

Aquí te dejo una estructura y contenido sugerido para el README.md de tu proyecto de gestión de alumnos:

📝 README.md Sugerido para tu Proyecto
Markdown

# 📚 Sistema de Gestión de Alumnos

---

## 🚀 Descripción del Proyecto

Este proyecto es un sistema web interactivo para la gestión de alumnos, desarrollado con **React.js**. Permite a los usuarios llevar un registro de estudiantes, incluyendo sus datos personales, número de legajo (LU) y correo electrónico. La aplicación facilita la visualización, adición, edición y eliminación de alumnos, además de contar con funcionalidades de búsqueda y una interfaz de usuario intuitiva.

---

## ✨ Características Principales

* **Listado de Alumnos**: Visualiza todos los alumnos registrados en una lista interactiva.
* **Búsqueda Rápida**: Filtra alumnos por nombre, apellido, LU o email.
* **Agregar Alumno**: Formulario para incorporar nuevos estudiantes al sistema.
* **Agregar Alumno Aleatorio**: Botón para añadir rápidamente datos de alumnos generados al azar (útil para pruebas).
* **Editar Alumno**: Modifica la información de alumnos existentes.
* **Eliminar Alumno**: Opción para remover alumnos del registro.
* **Detalle de Alumno**: Vista específica para ver la información completa de un alumno.
* **Navegación Intuitiva**: Barra de navegación superior para un acceso rápido a las diferentes secciones de la aplicación.
* **Diseño Responsivo**: Interfaz adaptada a diferentes tamaños de pantalla (escritorio, tablet y móvil).

---

## 🛠️ Tecnologías Utilizadas

* **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
* **React Router DOM**: Para gestionar la navegación y las rutas de la aplicación.
* **CSS3**: Para los estilos y el diseño responsivo de la interfaz.
* **Font Awesome**: Para los iconos utilizados en la interfaz.

---

## ⚙️ Instalación y Uso

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/es/) (que incluye npm o yarn).

### Pasos

1.  **Clonar el repositorio** (si está en un control de versiones como Git):
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd nombre-del-proyecto
    ```
2.  **Instalar las dependencias**:
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```
3.  **Iniciar la aplicación**:
    ```bash
    npm start
    # o si usas yarn
    yarn start
    ```
    Esto iniciará la aplicación en modo desarrollo. Abre tu navegador y navega a `http://localhost:3000`.

---

## 📂 Estructura del Proyecto

.
├── public/                 # Archivos públicos (index.html, logo.png, etc.)
├── src/
│   ├── components/         # Componentes reutilizables (NavBar, SearchBar, StudentCard)
│   │   ├── NavBar/
│   │   ├── SearchBar/
│   │   └── StudentCard/
│   ├── services/           # Lógica de negocio (AgregarAlumno, EditarAlumno)
│   │   ├── AgregarAlumno/
│   │   └── EditarAlumno/
│   ├── views/              # Vistas/Páginas principales de la aplicación
│   │   ├── HomePage/
│   │   ├── ListaAlumnosPage/
│   │   ├── DetalleAlumnoPage/
│   │   └── AcercaDePage/
│   ├── App.css             # Estilos globales de la aplicación
│   ├── App.js              # Componente principal de React y enrutamiento
│   └── index.js            # Punto de entrada de la aplicación
├── .gitignore              # Archivos y carpetas a ignorar por Git
├── package.json            # Metadatos del proyecto y dependencias
└── README.md               # Este archivo


---

## 🤝 Integrantes
* Orellana Cristian Maximiliano
* Caucota Gonzalo
* Alvarez Mateo
* Guari Cristian
