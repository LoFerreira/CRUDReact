import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BrandsScreen from "./screens/brands-screen";
import CarsScreen from "./screens/cars-screen";
import BrandFormScreen  from "./screens/brand-form-screen";
import CarFormScreen from "./screens/car-form-screen"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/carros" />
        </Route>
        <Route exact path="/marcas">
          <BrandsScreen />
        </Route>
        <Route exact path="/carros">
          <CarsScreen />
        </Route>
        <Route exact path="/carros/novo">
          <CarFormScreen />
        </Route>
        <Route exact path="/carros/:id">
          <CarFormScreen />
        </Route>
        <Route exact path="/marcas/nova">
          <BrandFormScreen  />
        </Route>
        <Route exact path="/marcas/:id">
          <BrandFormScreen  />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
