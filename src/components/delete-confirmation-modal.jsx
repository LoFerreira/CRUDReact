import React from "react";
import Separator from "./separator";
import Button from "./button";
import deleteBrandService from "../services/delete-brand-service";

function DeleteConfirmationModal({ brand, onCancel, onSuccess }) {
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
            deleteBrandService({ id: brand.id }).then(() => {
              onSuccess();
            });
          }}
        >
          Excluir
        </Button>
      </div>
    </>
  );
}

export default DeleteConfirmationModal;
