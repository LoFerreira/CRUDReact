import React from "react";
import PropTypes from "prop-types";

function getSize(size) {
  return {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 34,
  }[size];
};

function getIntent(intent) {
  return{
    primary: "white",
    secondary: "rgba(0, 0, 0, 0.2)",
  }[intent]
}

function Button({ children, onClick, disabled, pending, size, intent }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || pending}
      style={{
        width: getSize(size),
        height: getSize(size),
        backgroundColor: getIntent(intent),
      }}
    >
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
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: PropTypes.oneOf(["primary", "secondary"]),
};

// default of props for the parameters
Button.defaultProps = {
  disabled: false,
  pending: false,
};
