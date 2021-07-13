import React from "react";
import { Link } from "react-router-dom";
import Separator from "./separator";

function Menu() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        padding: "10px 25px ",
        borderBottom: "3px solid black"
      }}
    >
      <Link
        to="/carros"
        style={{
          color: "black",
          fontSize: "20px",
        }}
      >
        Cars
      </Link>
      <Separator />
      <Link
        to="/marcas"
        style={{
          color: "black",
          fontSize: "20px",
        }}
      >
        Brands
      </Link>
    </div>
    
  );
}

export default Menu;
