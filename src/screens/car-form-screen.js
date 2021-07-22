import React from "react";
import Button from "../components/button";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Label from "../components/label";
import Input from "../components/input";
import { useHistory } from "react-router";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import SelectBrand from "../components/select-brand";
import { useParams } from "react-router-dom";
import saveCarService from "../services/save-car-service";
import getCarByIdService from "../services/get-car-by-id";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import useForm from "../hooks/use-form";

function CarFormScreen() {
  const { goBack } = useHistory();
  const { id: idFromRoute } = useParams();
  const { getValue, setValue } = useForm({
    initialValues: {
      showModal: false,
    },
  });

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

  const message = idFromRoute
    ? `Marca editada com sucesso!`
    : `Marca adicionada com sucesso!`;


  function saveCar() {
    saveCarService({
      id: idFromRoute,
      plate: getValue("plate"),
      color: getValue("color"),
      brandId: getValue("selectedBrand.id"),
    }).then(() => {
      showToast(message);
    });
    setValue("Plate", "");
    setValue("Color", "");
    setValue("SelectedBrand", "");
  }

  React.useEffect(() => {
    if (idFromRoute) {
      getCarByIdService({ id: idFromRoute }).then((data) => {
        setValue("plate", data.plate)
        setValue("selectedBrand", data.brandId);
        setValue("color", data.color);
      });
    }
  }, [idFromRoute]);

  return (
    <>
      <ReactNotifications />
      <Menu />
      <Separator />
      <div style={{ padding: "50px" }}>
        <h1>{idFromRoute ? "Editar Carro" : "Novo Carro"}</h1>
        <Separator />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveCar();
          }}
        >
          <Label htmlFor="plate">Placa:</Label>
          <Separator size="xs" />
          {
            <Input
              id="plate"
              value={getValue("plate")}
              onChange={(value) => setValue("plate", value)}
              type="text"
              placeholder="xxx-0000"
              required
            />
          }
          <Separator size="lg" />
          <Label htmlFor="brand">Marca:</Label>
          <Separator size="xs" />
          <SelectBrand
            value={getValue("selectedBrand?.id")}
            onChange={(brandId) => {
              setValue("selectedBrand", brandId);
            }}
          />
          <Separator size="lg" />
          <Label htmlFor="color">Cor:</Label>
          <Separator size="xs" />
          <Input
            id="color"
            value={getValue("color")}
            onChange={(value) => setValue("color", value)}
            type="text"
            required
          />
          <Separator />
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => {
                if (
                  getValue("plate") &&
                  getValue("color") &&
                  getValue("selectedBrand") !== ""
                ) {
                  setValue("showModal", true);
                }
              }}
            >
              Salvar
            </Button>
            <Separator />
            <Link to="/carros">
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
        <Label>
          Deseja voltar para a tabela de marcas ou adicionar uma nova marca?
        </Label>
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
          {idFromRoute ? (
            <Link to="/carros/novo">
              <Button
                onClick={() => {
                  setValue("showModal", false);
                }}
              >
                Adicionar nova marca
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => {
                setValue("showModal", false);
              }}
            >
              Adicionar nova marca
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
}

export default CarFormScreen;
