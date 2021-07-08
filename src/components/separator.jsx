import React from "react";
import PropTypes from "prop-types";

function getSize(size) {
  return {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  }[size];
}

function Separator({ size }) {
  return (
    <div
      style={{
        width: getSize(size),
        height: getSize(size),
      }}
    />
  );
}

export default Separator;

// Types of props expected
Separator.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

// default of props for the parameters
Separator.defaultProps = {
  size: "md",
};
