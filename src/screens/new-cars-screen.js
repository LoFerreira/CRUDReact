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

function NewCar() {
  const [addPlate, setAddPlate] = React.useState("");
  const [addBrand, setAddBrand] = React.useState("");
  const [addColor, setAddColor] = React.useState("");
  const { goBack } = useHistory();

   /* function success() {
    store.addNotification({
      message: "carro adicionado com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  } */


  return (
    <>
    <ReactNotifications />
      <Menu />
      <Separator />
      <div style={{ padding: "50px" }}>
        <h1>Novo Carro</h1>
        <Separator />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Label htmlFor="plate" children="Placa:" />
          <Separator size="xs" />
          <Input
            id="plate"
            value={addPlate}
            onChange={(value) => setAddPlate(value)}
            type="text"
            placeholder="xxx-0000"
            required
          />
          <Separator />
          <Label htmlFor="brand" children="Marca:" />
          <Separator size="xs" />
          <Input
            id="brand"
            value={addBrand}
            onChange={(value) => setAddBrand(value)}
            type="text"
            required
          />
          <Separator />
          <Label htmlFor="color" children="Cor:" />
          <Separator size="xs" />
          <Input
            id="color"
            value={addColor}
            onChange={(value) => setAddColor(value)}
            type="text"
            required
          />
          <Separator />
          <div style={{ display: "flex" }}>
            <Button onClick={() => {}}>Salvar</Button>
            <Separator />
            <Button onClick={() => {goBack()}}>Voltar</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCar;
