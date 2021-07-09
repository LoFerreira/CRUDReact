import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function Toast() {
  const notification = function () {
    store.addNotification({
      message: "carro excluído com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  };

  return <button onClick={notification}>Default</button>;
}

export default Toast;
