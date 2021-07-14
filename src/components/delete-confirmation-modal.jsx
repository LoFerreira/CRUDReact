import React from "react";
import Separator from "./separator";
import Button from "./button";

function DeleteConfirmationModal({ brand, onCancel, onSuccess }) {
  function deleteBrand() {
    fetch(`http://localhost:8080/brands/${brand.id}`, {
      method: "DELETE",
    }).then(() => {
      onSuccess();
    });
  }

  return (
    <>
      <h3>{brand.name}</h3>
      <p>Tem certeza que deseja excluir {brand.name}?</p>
      <Separator />
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            onCancel();
          }}
        >
          Cancelar
        </Button>
        <Separator />
        <Button
          intent="secondary"
          onClick={() => {
            deleteBrand();
          }}
        >
          Excluir
        </Button>
      </div>
    </>
  );
}

export default DeleteConfirmationModal;
