import Api from "./api";

function getCarByIdService({ id }) {
  return Api({ url: `/cars/${id}` });
}

export default getCarByIdService;
