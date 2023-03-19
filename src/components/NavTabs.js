import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="react-portfolio/projectGallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/project"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          {/* Header
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        > */}
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/contact/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          

        </NavLink>
      </li>
    </ul>
  );
}



export default NavTabs;
