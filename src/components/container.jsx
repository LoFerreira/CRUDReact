import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 50,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
