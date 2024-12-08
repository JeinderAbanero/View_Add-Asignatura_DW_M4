import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`container ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MainContent
        formData={formData}
        profesores={profesores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
