import React from "react";
import Menu from "../components/menu";
import Button from "../components/button";
import Separator from "../components/separator";
import Input from "../components/input";
import Modal from "../components/modal";
import Select from "../components/select";
import Table from "../components/table";
import Label from "../components/label";
import Container from "../components/container";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Link } from "react-router-dom";

function CarsScreen() {
  const [plate, setPlate] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState(2);
  const [cars, setCars] = React.useState([]);
  const [deletingPerson, setDeletingPerson] = React.useState();

  // Request get for db.jason with the brands
  const brands = [
    { id: 1, name: "Citroen" },
    { id: 2, name: "Volkswagen" },
  ];

  function getCars() {
    fetch("http://localhost:8080/cars?_expand=brand").then((result) => {
      result.json().then((data) => {
        setCars(data);
        console.log(data);
      });
    });
  }

  React.useEffect(() => {
    getCars();
    console.log(cars[0]);
  }, []);

  const optionsBrand = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  /* function success() {
    store.addNotification({
      message: "carro adicionado com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }
 */
  function delet() {
    store.addNotification({
      message: "carro excluido com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  return (
    <>
      <ReactNotifications />
      <Menu />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
        }}
      >
        <div>
          <h1>Carros</h1>
        </div>
        <div>
          <Link to="carros/novo">
            <Button>Novo Carro</Button>
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginLeft: 50 }}>
        <div style={{ border: "1px solid black", padding: 10 }}>
          <Label htmlFor="plate" children="Filtrar por placa:" />
          <Separator size="xs" />
          <Input
            id="plate"
            value={plate}
            onChange={(value) => setPlate(value)}
            placeholder="XXX-0000"
            type="text"
          />
        </div>
        <Separator size="lg" />
        <div style={{ border: "1px solid black", padding: 10 }}>
          <Label htmlFor="brand" children="Filtrar por marca:" />
          <Separator size="xs" />
          <Select
            value={selectedBrand}
            options={optionsBrand}
            onChange={setSelectedBrand}
          />
        </div>
      </div>

      <Container>
        <Table
          data={cars}
          columns={[
            { path: "plate", label: "Placa", width: "30%" },
            { path: "color", label: "Cor", width: "30%" },
            { path: "brandId", label: "Marca", width: "30%" },
            {
              path: "actions",
              label: "Ações",
              render: ({ rowData }) => {
                return (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button>Editar</Button>
                    <Separator size="md" />
                    <Button
                      intent="secondary"
                      onClick={() => setDeletingPerson(rowData)}
                    >
                      Excluir
                    </Button>
                  </div>
                );
              },
            },
          ]}
        />
      </Container>
      <Modal
        visible={Boolean(deletingPerson)}
        onRequestClose={() => setDeletingPerson(null)}
      >
        Tem certeza que deseja excluir: {deletingPerson?.name}??
        <div>
          <Button
            onClick={() => {
              setCars((currentState) =>
                currentState.filter((person) => person.id !== deletingPerson.id)
              );
              setDeletingPerson(null);
              delet();
            }}
          >
            Sim
          </Button>
          <Button onClick={() => setDeletingPerson(null)}>Não</Button>
        </div>
      </Modal>
    </>
  );
}

export default CarsScreen;
