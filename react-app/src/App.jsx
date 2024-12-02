import React, { useState } from "react";
import "./App.css";

// Íconos para las opciones del menú
import { FaTachometerAlt, FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(true); // Estado para abrir/cerrar menú
  const [formData, setFormData] = useState({
    nombre: "",
    creditos: "",
    profesor: "",
    descripcion: "",
    horario: "",
    aula: "",
    prerrequisitos: "",
    cupoMaximo: "",
  });

  const profesores = [
    "Anya Volkova",
    "Kai Chen",
    "Zara Elara",
    "Rowan Ashcroft",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className={`container ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
      <aside className="sidebar">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {menuOpen && (
          <div className="profile">
            <img
              className="profile-img"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Perfil"
            />
            <p className="profile-name">Juan Pérez</p>
          </div>
        )}
        <nav>
          <ul>
            <li>
              <FaTachometerAlt />
              {menuOpen && <span>Dashboard</span>}
            </li>
            <li>
              <FaUser />
              {menuOpen && <span>Estudiante</span>}
            </li>
            <li>
              <FaChalkboardTeacher />
              {menuOpen && <span>Profesor</span>}
            </li>
            <li>
              <FaBook />
              {menuOpen && <span>Asignaturas</span>}
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Agregar nueva asignatura</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Matemáticas II"
              required
            />
          </label>
          <label>
            Unidades de crédito
            <input
              type="number"
              name="creditos"
              value={formData.creditos}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Profesor
            <select
              name="profesor"
              value={formData.profesor}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un profesor</option>
              {profesores.map((profesor, index) => (
                <option key={index} value={profesor}>
                  {profesor}
                </option>
              ))}
            </select>
          </label>
          <label>
            Descripción
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Descripción de la asignatura"
            ></textarea>
          </label>
          <label>
            Horario
            <input
              type="text"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              placeholder="Ej: Lunes y Miércoles 10:00 - 12:00"
              required
            />
          </label>
          <label>
            Aula
            <input
              type="text"
              name="aula"
              value={formData.aula}
              onChange={handleChange}
              placeholder="Ej: 15"
              required
            />
          </label>
          <label>
            Prerrequisitos
            <input
              type="text"
              name="prerrequisitos"
              value={formData.prerrequisitos}
              onChange={handleChange}
              placeholder="Ej: Matemáticas I, Cálculo I"
            />
          </label>
          <label>
            Cupo Máximo
            <input
              type="number"
              name="cupoMaximo"
              value={formData.cupoMaximo}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Agregar Asignatura</button>
        </form>
      </main>
    </div>
  );
}

export default App;
