import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
 function Menu() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Carros">Carros</Link>
              </li>
              <li>
                <Link to="/Marcas">Marcas</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/Marcas">
              <Marcas />
            </Route>
            <Route path="/Carros">
              <Carros />
            </Route>
          </Switch>
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
