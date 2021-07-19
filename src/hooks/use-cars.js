import React from "react";
import getCarsServices from "../services/get-cars-service";

function useCars() {
  const [cars, setCars] = React.useState([]);

  function loadCars() {
    getCarsServices().then((data) => {
      setCars(data);
    });
  }

  React.useEffect(() => {
    loadCars()
  },[]);

  return { cars, loadCars};
}

export default useCars;
