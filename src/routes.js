import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BrandsScreen from "./screens/brands-screen";
import CarsScreen from "./screens/cars-screen";
import NewBrand from "./screens/new-brands-screen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/carros" />
        </Route>
        <Route path="/marcas">
          <BrandsScreen />
        </Route>
        <Route path="/carros">
          <CarsScreen />
        </Route>
        <Route path="/novaMarca">
          <NewBrand />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;