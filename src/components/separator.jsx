import React from "react";
import PropTypes from "prop-types";

const widthMap = {
  xs: {
    width: "4px",
  },
  sm: {
    width: "8px",
  },
  md: {
    width: "16px",
  },
  lg: {
    width: "32px",
  },
  xl: {
    width: "64px",
  },
};

const heightMap = {
  xs: {
    height: "4px",
  },
  sm: {
    height: "8px",
  },
  md: {
    height: "16px",
  },
  lg: {
    height: "32px",
  },
  xl: {
    height: "64px",
  },
}

function Separator({ width, height }) {
  return (
    <div
      style={{
        ...widthMap[width],
        ...heightMap[height],
      }}
    />
  );
}

export default Separator;

// Types of props expected
Separator.propTypes = {
  width: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  height: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

// default of props for the parameters
Separator.defaultProps = {
  width: "md",
  height: "md",
};
