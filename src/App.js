import React from "react";
import Button from "./components/button";
import Separator from "./components/separator";
import Input from "./components/input";
import Modal from "./components/modal";
import Select from "./components/select";
import Table from "./components/table";
import Toast from "./components/toast";
import ReactNotifications from "react-notifications-component";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [selectedBrand, setSelectedBrand] = React.useState(2);

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
      <Toast children="Sim"/>

      <Separator size="xl" />
      <Input
        id="name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Enter your first name"
        type="text"
      />
      <Separator size="lg" />
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Separator size="lg" />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo ex.
        Nulla bibendum neque ut tincidunt volutpat. Donec pellentesque orci
        bibendum metus congue suscipit.
        <Separator size="sm" />
        Duis sed tellus euismod, maximus diam sit amet, iaculis nisl. Vestibulum
        vitae rutrum turpis. Nulla eu magna feugiat, viverra justo auctor,
        finibus ante. Fusce nec hendrerit magna.
        <Separator />
        <Button onClick={() => {}} size="xl">
          Não
        </Button>{" "}
        <Button onClick={() => {}} size="xl">
          Sim
        </Button>
      </Modal>
      <Separator />
      <Button onClick={() => {}} intent="secondary">
        intent
      </Button>
      <Separator />
      <Input
        id="email"
        value={email}
        onChange={(email) => setEmail(email)}
        placeholder="Enter your email"
        type="email"
      />
      <Separator />
      <Input
        id="password"
        value={password}
        onChange={(password) => setPassword(password)}
        placeholder="Enter your password"
        type="password"
      />
      <Separator />
      <Select
        value={selectedBrand}
        options={optionsBrand}
        onChange={setSelectedBrand}
      />
      <Separator />
      <Table cars={cars} />
    </>
  );
}

export default App;
