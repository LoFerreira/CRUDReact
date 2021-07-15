import Api from "./api";

function DeleteBrandService({ id }) {
  return (
      Api({ url: `/brands/${id}`, method: "DELETE" })
      )
}

export default DeleteBrandService;