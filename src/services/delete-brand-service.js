import Api from "./api";

function deleteBrandService({ id }) {
  return (
      Api({ url: `/brands/${id}`, method: "DELETE" })
      )
}

export default deleteBrandService;