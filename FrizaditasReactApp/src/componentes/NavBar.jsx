import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#"> FRIZADITAS </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"> Empanadas Congeladas </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Empanadas Horneadas </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
