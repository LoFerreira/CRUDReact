import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick, disabled, pending}) {
  return (
    <button onClick={onClick} disabled={disabled || pending}>
      {pending ? "Loading..." : children}
    </button>
  );
}

export default Button;
