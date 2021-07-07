import React, { Children } from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";

function Modal({ children, visible, onRequestClose }) {
  const modalDiv = document.getElementById("modalDiv");

  return visible
    ? createPortal(
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onRequestClose}
        >
          <div
            style={{
              width: 600,
              backgroundColor: "white",
              borderRadius: 6,
              padding: 16,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {Children}
          </div>
        </div>,
        modalDiv
      )
    : null;
}

export default Modal;
