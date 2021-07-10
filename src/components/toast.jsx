import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import PropTypes from "prop-types";

function Toast({ notify, children }) {
  const addNotification = function () {
    store.addNotification({
      message: "carro adicionado com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  };
  const delNotification = function () {
    store.addNotification({
      message: "carro excluido com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  };

  var notification = "add";

  if(notify === notification) {
    return <button onClick={addNotification}>{children}</button>
  } else {
    return <button onClick={delNotification}>{children}</button>
  }
}

export default Toast;

Toast.propTypes = {
  id: PropTypes.string.isRequired,
}
