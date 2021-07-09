import React from "react";
import PropTypes from "prop-types";

const sizeMap = {
  xs: {
    width: "4px",
    height: "4px",
  },
  sm: {
    width: "8px",
    height: "8px",
  },
  md: {
    width: "16px",
    height: "16px",
  },
  lg: {
    width: "32px",
    height: "32px",
  },
  xl: {
    width: "64px",
    height: "64px",
  },
};

const variantMap = {
  solid: {
    primary: {},
    secondary: {
      backgroundColor: "red",
    }
  },
  outline: {
    primary: {
      background: "none",
      border: "1px solid black",
      color: "black",
    },
    secondary: {
      background: "none",
      border: "1px solid red",
      color: "red",
    },
  },
  ghost: {
    primary: {
      background: "none",
      border: "none",
    }
  },
};

function Button({
  children,
  onClick,
  disabled,
  pending,
  size,
  variant,
  intent,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || pending}
      style={{
        ...sizeMap[size],
        ...variantMap[variant][intent],
        boxShadow: "2px 2px black",
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
  onCLick: PropTypes.func,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: PropTypes.oneOf(["primary", "secondary"]),
};

// default of props for the parameters
Button.defaultProps = {
  disabled: false,
  pending: false,
  variant: "solid",
  intent: "primary",
};
