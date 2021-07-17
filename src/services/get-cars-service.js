import Api from "./api";

function getCarsServices() {
  return Api({ url: "/cars?_expand=brand" });
}

export default getCarsServices;
