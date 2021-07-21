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

function CarFormScreen() {
  const [plate, setPlate] = React.useState("");
  const [color, setColor] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState("1");
  const [showModal, setShowModal] = React.useState(false);
  const { goBack } = useHistory();
  const { id: idFromRoute } = useParams();

  function showToast({ message }) {
    store.addNotification({
      message,
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  function saveCar() {
    saveCarService({
      id: idFromRoute,
      plate,
      color,
      brandId: selectedBrand.id,
    }).then(() => {
      showToast({
        message: `Carro ${idFromRoute ? "editado" : "adicionado"} com sucesso`,
      });
    });
    setPlate("");
    setColor("");
    setSelectedBrand("");
  }

  React.useEffect(() => {
    if (idFromRoute) {
      getCarByIdService({ id: idFromRoute }).then((data) => {
        console.log(data);
        setPlate(data.plate);
        setColor(data.color);
        setSelectedBrand(data.brandId);
      });
    }
  }, [idFromRoute]);

  console.log(selectedBrand);

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
          <Input
            id="plate"
            value={plate}
            onChange={(value) => setPlate(value)}
            type="text"
            placeholder="xxx-0000"
            required
          />
          <Separator size="lg" />
          <Label htmlFor="brand">Marca:</Label>
          <Separator size="xs" />
          <SelectBrand
            value={selectedBrand}
            onChange={(brandId) => {
              setSelectedBrand(brandId);
            }}
          />
          <Separator size="lg" />
          <Label htmlFor="color">Cor:</Label>
          <Separator size="xs" />
          <Input
            id="color"
            value={color}
            onChange={(value) => setColor(value)}
            type="text"
            required
          />
          <Separator />
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => {
                if (plate && color !== "") {
                  setShowModal(true);
                }
              }}
            >
              Salvar
            </Button>
            <Separator />
            <Link to="/carros">
            <Button>
              Voltar
            </Button>
            </Link>
          </div>
        </form>
      </div>
      <Modal
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
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
          {idFromRoute? <Link to="/carros/novo">
            <Button onClick={() => {setShowModal(false)}}>Adicionar nova marca</Button>
          </Link> : <Button onClick={() => {setShowModal(false)}}>Adicionar nova marca</Button>}
         
        </div>
      </Modal>
    </>
  );
}

export default CarFormScreen;
