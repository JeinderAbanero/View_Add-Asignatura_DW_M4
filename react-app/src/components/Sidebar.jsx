import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import Profile from "./Profile";
import NavMenu from "./NavMenu";

const Sidebar = ({ menuOpen, toggleMenu }) => {
  return (
    <aside className="sidebar">
      <MenuToggle toggleMenu={toggleMenu} />
      {menuOpen && <Profile />}
      <NavMenu menuOpen={menuOpen} />
    </aside>
  );
};

export default Sidebar;
