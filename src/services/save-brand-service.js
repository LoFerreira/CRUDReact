import Api from "./api";

const saveBrandService = async ({ id, name }) =>
  Api({
    url: `/brands${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name },
  });

export default saveBrandService;
