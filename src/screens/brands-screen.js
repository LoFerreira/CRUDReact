import React from "react";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Table from "../components/table";
import Button from "../components/button";
import Container from "../components/container";
import Modal from "../components/modal";
import DeleteConfirmationModal from "../components/delete-confirmation-modal";
import { Link } from "react-router-dom";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import useBrands from "../hooks/use-brands";
import useForm from "../hooks/use-form";

function BrandsScreen() {
  const { brands, loadBrands } = useBrands();
  const { getValue, setValue } = useForm({
    initialValues: {
      deletingBrand: undefined,
    },
  });

  function successDelete() {
    store.addNotification({
      message: "Marca excluída com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  function onRequestClose() {
    setValue("deletingBrand", false);
  }

  return (
    <>
      <ReactNotifications />
      <Menu />
      <Separator />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
        }}
      >
        <div>
          <h1>Marcas</h1>
        </div>
        <div>
          <Link to="marcas/nova">
            <Button fontSize="xl">Nova Marca</Button>
          </Link>
        </div>
      </div>
      <Container>
        <Table
          data={brands}
          columns={[
            { path: "id", label: "#", width: "10%" },
            { path: "name", label: "label", width: "85%" },
            {
              path: "",
              label: "Ações",
              render: ({ rowData }) => (
                <div style={{ display: "flex" }}>
                  <Link to={`/marcas/${rowData.id}`}>
                    <Button>Editar</Button>
                  </Link>
                  <Separator size="sm" />
                  <Button
                    intent="secondary"
                    onClick={() => {
                      setValue("deletingBrand", rowData);
                    }}
                  >
                    Excluir
                  </Button>
                </div>
              ),
            },
          ]}
        />
      </Container>
      <Modal
        visible={getValue("deletingBrand")}
        onRequestClose={() => {
          setValue("deletingBrand", false);
        }}
      >
        {getValue("deletingBrand") ? (
          <DeleteConfirmationModal
            brand={getValue("deletingBrand")}
            onCancel={() => onRequestClose()}
            onSuccess={() => {
              loadBrands();
              onRequestClose();
              successDelete();
            }}
          />
        ) : null}
      </Modal>
    </>
  );
}

export default BrandsScreen;
