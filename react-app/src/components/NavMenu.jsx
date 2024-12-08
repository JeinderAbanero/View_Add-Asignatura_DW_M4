import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

const NavMenu = ({ menuOpen }) => (
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
);

export default NavMenu;
