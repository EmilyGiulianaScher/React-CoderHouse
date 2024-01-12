import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Icono from './Icono/Icono';

function NavBar(){
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/"> <Icono/> </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Congeladas">Empanadas Congeladas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Horneadas">Empanadas Horneadas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Otros">Otros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">   <CartWidget/>  </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
