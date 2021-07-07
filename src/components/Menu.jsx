import React from "react";
import Button from "./Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              listStyleType: "none",
              borderBottom: "solid black",
            }}
          >
            <li>
              <Link
                to="/Carros"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Carros
              </Link>
            </li>
            <li>
              <Link
                to="/Marcas"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {" "}
                Marcas
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Switch>
          <Route path="/Marcas">
            <Marcas />
          </Route>
          <Route path="/Carros">
            <Carros />
          </Route>
        </Switch>

        <Button name="Novo Carro" />
      </div>
    </Router>
  );
}

function Carros() {
  return <h2>Carros</h2>;
}

function Marcas() {
  return <h2>Marcas</h2>;
}

export default Menu;
