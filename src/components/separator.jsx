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

function Separator({ size }) {
  return (
    <div
      style={{
        ...sizeMap[size],
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
