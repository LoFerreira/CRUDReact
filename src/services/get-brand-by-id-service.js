import Api from "./api";

function GetBrandByIdService({ id }) {
  return Api({ url: `/brands/${id}` });
}

export default GetBrandByIdService;
