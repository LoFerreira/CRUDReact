import React from "react";
import Button from "./components/button";
import Separator from "./components/separator";
import Input from "./components/input";
import Modal from "./components/modal";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button
        onClick={(e) => {
          alert("clicado");
        }}
        variant="ghost"
      >
        Clique
      </Button>
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
        <Button size="xl">Não</Button> <Button size="xl">Sim</Button>
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
    </>
  );
}

export default App;
