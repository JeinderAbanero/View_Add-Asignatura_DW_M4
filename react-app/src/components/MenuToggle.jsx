import React from "react";

const MenuToggle = ({ toggleMenu }) => {
  return (
    <div className="menu-toggle" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default MenuToggle;
