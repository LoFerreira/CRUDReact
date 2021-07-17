import Api from "./api";

function DeleteCarsServices({ id }) {
  return (
      Api({ url: `/cars/${id}`, method: "DELETE" })
      )
}

export default DeleteCarsServices;