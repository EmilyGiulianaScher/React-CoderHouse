import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">FRIZADITAS</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Congeladas">Empanadas Congeladas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Horneadas">Empanadas Horneadas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Otros">Otros</Link>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
