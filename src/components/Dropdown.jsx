import React from "react";
import './drpdown.css'
const Dropdown = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="#">Home</a>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">
            Patient Education
          </a>
          <div className="dropdown-content">
            <a href="#">Shoulder</a>
            <a href="#">Elbow</a>
            <a href="#">Wrist & Hand</a>
            <div className="submenu">
              <a href="#" className="submenu-toggle">
                Knee
              </a>
              <div className="submenu-content">
                <a href="#">Arthritis</a>
                <a href="#">Injuries</a>
              </div>
            </div>
            <a href="#">Spine</a>
            <a href="#">General</a>
          </div>
        </div>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Dropdown;
