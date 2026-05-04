import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        <span>Livraria da Subida</span>
      </h1>
    </Link>
  );
}

export default Logo;
