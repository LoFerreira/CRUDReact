import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Brands from "./Pages/brands"
import EditCar from "./Pages/edit-car"
import NewCar from "./Pages/new-car"
import reportWebVitals from "./reportWebVitals";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/" component={Brands}/>
        <Route exact path="/" component={EditCar}/>
        <Route exact path="/" component={NewCar}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
