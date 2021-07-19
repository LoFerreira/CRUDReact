import Api from "./api";

const saveCarService = async ({ id, plate, color, brandId }) =>
  Api({
    url: `/brands${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { plate, color, brandId },
  });

export default saveCarService;
