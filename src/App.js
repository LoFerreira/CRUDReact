import React from "react";
import Button from "./components/button";
import Separator from "./components/separator";
import Input from "./components/input";
import Modal from "./components/modal";
import Select from "./components/select";
import Table from "./components/table";
import Label from "./components/label";
import Container from "./components/container";
import Toast from "./components/toast";
import ReactNotifications from "react-notifications-component";

function App() {
  const [plate, setPlate] = React.useState("");
  const [visible, setVisible] = React.useState(false);
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

  // Request get for db.jason with the cars
  const cars = [
    {
      plate: "QJX-2932",
      color: "Blue",
      brand: "Volkswagen",
      action: "Botao",
    },
    {
      plate: "QJX-2932",
      color: "Blue",
      brand: "Volkswagen",
      action: "Botao",
    },
  ];

  return (
    <>
      <ReactNotifications />

      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Excluir
      </Button>
      <Modal 
        visible={Boolean(deletingPerson)} 
        onRequestClose={() => setDeletingPerson(null)}
      >
        Tem certeza que deseja excluir o jovem {deletingPerson?.name}??
        <div>
          <Button onClick={() => {
            setPeople((currentState) => currentState.filter((person) => person.id !== deletingPerson.id)
            );
            setDeletingPerson(null);
          }}
          >
            COM CERTEZA
          </Button>
          <Button onClick={() => setDeletingPerson(null)}>Não, Obrigado</Button>
        </div>
      </Modal>
      <div>
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
      <Separator />
      <div>
        <Label htmlFor="brand" children="Filtrar por marca:" />
        <Separator size="xs" />
        <Select
          value={selectedBrand}
          options={optionsBrand}
          onChange={setSelectedBrand}
        />
      </div>
      <Separator />
      <Table cars={cars} />
      <Separator />
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
                  <div>
                    <Button>Editar</Button>
                    <Button onCLick={() => setDeletingPerson(rowData)}>
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

export default App;
