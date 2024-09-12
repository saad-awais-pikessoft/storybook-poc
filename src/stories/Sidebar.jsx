import React from "react";
import PropTypes from "prop-types";
import "./sidebar.css";

const Sidebar = ({ menus, onMenuClick }) => {
  return (
    <div className="sidebar">
      <ul>
        {menus.map((menu, index) => (
          <li key={index} onClick={() => onMenuClick(menu)}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMenuClick: PropTypes.func,
};

export default Sidebar;
