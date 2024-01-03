import React from "react";

const Empanada = ({ image, title, description, id, price }) => {
  return (
    <div className="col. lg-4">
      <div className="text-center card box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto"></div>

          <img src={image} width="150px" className="rounded-cicle img-thumbnail" alt={title}/>

          <div>
            <h3>{title}</h3>
            <p> {price}</p>
            <p className="text-muted"> {description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Empanada;
