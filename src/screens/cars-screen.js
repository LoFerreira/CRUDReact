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

function CarsScreen() {
  const [plate, setPlate] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState(2);
  const [people, setPeople] = React.useState([
    { id: 1, name: "Leonardo", age: 20 },
    { id: 2, name: "Felicio", age: 21 },
    { id: 3, name: "Felicio", age: 44 },
    { id: 4, name: "Queli", age: 43 },
    { id: 5, name: "xinino", age: 10 },
  ]);
  const [deletingPerson, setDeletingPerson] = React.useState();

  // Request get for db.jason with the brands
  const brands = [
    { id: 1, name: "Citroen" },
    { id: 2, name: "Volkswagen" },
  ];

  const optionsBrand = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  function success() {
    store.addNotification({
      message: "carro adicionado com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  };

  function delet() {
    store.addNotification({
      message: "carro excluido com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  };

    return (
      <>
      <ReactNotifications />
        <Menu />
        <Separator />
        <Button onClick={delet}>Excluir</Button>
        <Button onClick={success}>Adicionar</Button>
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
        <Separator size="lg" />
        <Modal
          visible={Boolean(deletingPerson)}
          onRequestClose={() => setDeletingPerson(null)}
        >
          Tem certeza que deseja excluir: {deletingPerson?.name}??
          <div>
            <Button
              onClick={() => {
                setPeople((currentState) =>
                  currentState.filter(
                    (person) => person.id !== deletingPerson.id
                  )
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

        <Container>
          <Table
            columns={[
              { path: "name", label: "Nome" },
              { path: "age", label: "Idade" },
              {
                path: "actions",
                label: "Ações",
                render: ({ rowData, index }) => {
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
            data={people}
          />
        </Container>
      </>
    );
}

export default CarsScreen;
  