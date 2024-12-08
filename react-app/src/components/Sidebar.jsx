// src/components/Sidebar.jsx
import React from "react";

import {
  FaTachometerAlt,
  FaUser,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

const Sidebar = ({ menuOpen, toggleMenu }) => {
  return (
    <aside className={`sidebar ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
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
  );
};

export default Sidebar;
