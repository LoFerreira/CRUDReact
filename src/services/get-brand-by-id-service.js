import Api from "./api";

function getBrandByIdService({ id }) {
  return Api({ url: `/brands/${id}` });
}

export default getBrandByIdService;
