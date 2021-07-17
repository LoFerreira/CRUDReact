import React from "react";
import getBrandsService from "../services/get-brands-service";

function useBrands() {
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    getBrandsService().then((data) => {
      setBrands(data);
    });
  },[]);

  return { brands };
}

export default useBrands;
