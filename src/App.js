import React from "react";
import Button from "./components/button";
import Separator from "./components/separator";
import Input from "./components/input";
import Modal from "./components/modal";

function App() {
  const [name, setName] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button
        onClick={(e) => {
          alert("clicado");
        }}
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
      <Separator size="xs" />
      <Button
        onClick={() => {
          setVisible(true);
        }}
        size="md"
      >
        Open Modal
      </Button>
      <Separator size="md" />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo ex.
        Nulla bibendum neque ut tincidunt volutpat. Donec pellentesque orci
        bibendum metus congue suscipit.
        <Separator size="sm" />
        Duis sed tellus euismod, maximus diam sit amet, iaculis nisl. Vestibulum
        vitae rutrum turpis. Nulla eu magna feugiat, viverra justo auctor,
        finibus ante. Fusce nec hendrerit magna.
      </Modal>
      <Button
        onClick={() => {}}
        intent="secondary"
      >
        intent
      </Button>
    </>
  );
}

export default App;
