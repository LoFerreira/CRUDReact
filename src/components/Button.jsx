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

// Types of props expected
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onCLick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
};

// default of props for the parameters
Button.defaultProps = {
  disabled: false,
  pending: false,
}