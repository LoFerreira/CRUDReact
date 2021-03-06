import React from "react";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Button from "../components/button";
import Label from "../components/label";
import Input from "../components/input";
import { Link } from "react-router-dom";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useParams } from "react-router-dom";
import getBrandByIdService from "../services/get-brand-by-id-service";
import saveBrandService from "../services/save-brand-service";
import Modal from "../components/modal";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/use-form";

function BrandFormScreen() {
  const { id: idFromRoute } = useParams();
  const { goBack } = useHistory();
  const [nameError, setNameError] = React.useState("");

  function showToast(message) {
    store.addNotification({
      message,
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  const { getValue, setValue, submit } = useForm({
    initialValues: {
      showModal: false,
    },
    onSubmit: ({ brand }) => {
      const { id, name } = brand;

      if (!name) {
        setNameError("Campo nome é obrigatório!");
        return;
      }

      const message = idFromRoute
        ? `Marca ${name} editada com sucesso!`
        : `Marca ${name} adicionada com sucesso!`;

      saveBrandService({ id, name }).then(() => {
        showToast(message);
        setValue("brand", "");
        setValue("showModal", true);
      });
    },
  });

  React.useEffect(() => {
    if (idFromRoute) {
      getBrandByIdService({ id: idFromRoute }).then((data) => {
        setValue("brand", data);
      });
    }
  }, [idFromRoute]);

  console.log(getValue("brand.name"));

  return (
    <>
      <ReactNotifications />
      <Menu />
      <Separator />
      <div style={{ padding: "50px" }}>
        <h1>{idFromRoute ? "Editar Marca" : "Nova Marca"}</h1>
        <Separator size="xl" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <Label htmlFor="id" children="Id:"></Label>
          <Separator size="xs" />
          <Input
            id="id"
            value={getValue("brand.id")}
            type="text"
            disabled="disabled"
          />
          <Separator size="lg" />
          <Label htmlFor="newBrand" children="Marca:"></Label>
          <Separator size="xs" />
          <Input
            id="newBrand"
            value={getValue("brand.name")}
            onChange={(value) => setValue("brand.name", value)}
            type="text"
          />
          <Separator size="xs" />
          <label
            style={{
              color: "white",
              backgroundColor: "red",
            }}
          >
            {nameError}
          </label>
          <Separator size="lg" />
          <div style={{ display: "flex" }}>
            <Button>Salvar</Button>
            <Separator />
            <Link to="/marcas">
              <Button>Voltar</Button>
            </Link>
          </div>
        </form>
      </div>
      <Modal
        visible={getValue("showModal")}
        onRequestClose={() => {
          setValue("showModal", false);
        }}
      >
        <Label children="Deseja voltar para a tabela de marcas ou adicionar uma nova marca?"></Label>
        <Separator />
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => {
              goBack();
            }}
          >
            Voltar
          </Button>
          <Separator />
          <Button
            onClick={() => {
              setValue("showModal", false);
            }}
          >
            Adicionar nova marca
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default BrandFormScreen;
