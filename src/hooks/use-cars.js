import React from "react";
import getCarsServices from "../services/get-cars-service";

function useCars() {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    getCarsServices().then((data) => {
      setCars(data);
    });
  },[]);

  return { cars };
}

export default useCars;
