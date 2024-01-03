import React from 'react'
import logo from "../../imagenes/logoFri.png"
import "../Icono/Icono.css"

const Icono = () => {
  return (
    <div className='Icono'>
        <img src={logo} className="logo-img" alt="logo" />
    </div>
    
  );
};

export default Icono;