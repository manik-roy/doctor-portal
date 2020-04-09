import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, text, path }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link d-flex " to={path}>
        <span className="material-icons">
          {icon}
        </span> <span>
          {text}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;