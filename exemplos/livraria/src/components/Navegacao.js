import React from "react";
import { NavLink } from "react-router-dom";

function Navegacao() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/historia">Historia</NavLink>
      </li>
      <li>
        <NavLink to="/ciencia">Ciência</NavLink>
      </li>
      <li>
        <NavLink to="/literatura">Literatura</NavLink>
      </li>
      <li>
        <NavLink to="/catalogo">Catálogo</NavLink>
      </li>
    </ul>
  );
}

export default Navegacao;
