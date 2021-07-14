import React from "react";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Container from "../components/container";
import Label from "../components/label";
import Input from "../components/input";

function NewBrand() {
  const [newBrand, setNewBrand] = React.useState("");

  return (
    <>
      <Menu />
      <Separator />
      <div style={{padding: "50px"}}>
        <h1>Nova Marca</h1>
        <Separator size="xl"/>
        <Label htmlFor="" children="Id:"></Label>
        <Separator size="xs"/>
        <Input
          type="text"
          disabled="disabled"
        />
        <Separator size="xl"/>
        <Label htmlFor="newBrand" children="Marca:"></Label>
        <Separator size="xs"/>
        <Input
          id="plate"
          value={newBrand}
          onChange={(value) => setNewBrand(value)}
          placeholder=""
          type="text"
        />
        </div>
    </>
  );
}

export default NewBrand;
