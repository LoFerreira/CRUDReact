import Api from "./api";

function deleteCarsServices({ id }) {
  return (
      Api({ url: `/cars/${id}`, method: "DELETE" })
      )
}

export default deleteCarsServices;