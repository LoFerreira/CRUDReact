import Api from "./api";

function getBrandsService() {
  return Api({ url: "/brands" });
}

export default getBrandsService;
