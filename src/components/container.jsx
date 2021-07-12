import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        marginLeft: 50,
        marginRight: 50,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
