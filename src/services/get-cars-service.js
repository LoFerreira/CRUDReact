import Api from "./api";

function GetCarsServices() {
  return Api({ url: "/cars?_expand=brand" });
}

export default GetCarsServices;
