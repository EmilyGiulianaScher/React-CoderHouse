import React, { useEffect } from "react";
import "../PublicidadIg/PublicidadIg.css";

const PublicidadIg = () => {
  const onResize = () => { };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, {});

  return (
    <div className="instagram-ad">

      <a href="https://www.instagram.com/frizaditas.ctes/" target="blanck">
        <i class="bx bxl-instagram bx-md"></i>
        <p> click aqui </p>
      </a>
    </div>
  );
};

export default PublicidadIg;
