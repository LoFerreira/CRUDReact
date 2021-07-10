import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import PropTypes from "prop-types";
import Button from "./button"

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
    return <Button onClick={addNotification}>{children}</Button>
  } else {
    return <Button onClick={delNotification}>{children}</Button>
  }
}

export default Toast;

Toast.propTypes = {
  id: PropTypes.string.isRequired,
}
