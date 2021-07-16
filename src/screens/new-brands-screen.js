import React from "react";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Button from "../components/button";
import Label from "../components/label";
import Input from "../components/input";
import { Link } from "react-router-dom";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useParams } from "react-router-dom";
import GetBrandByIdService from "../services/get-brand-by-id-service";
import SaveBrandService from "../services/save-brand-service";

function NewBrand() {
  const [addBrand, setAddBrand] = React.useState("");
  const [addBrandId, setAddBrandId] = React.useState("");
  const { id } = useParams();

  function successCreate() {
    store.addNotification({
      message: "Nova marca adicionada com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  function successEdit() {
    store.addNotification({
      message: "Marca editada com sucesso",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  function saveBrand() {
    const messageToast = () => {
      id ? successEdit() : successCreate();
    };

    SaveBrandService({ id, name: addBrand }).then(() => {
      
      messageToast();
      setAddBrand("");
      setAddBrandId("");
    });
  }

  React.useEffect(() => {
    if (id) {
      GetBrandByIdService({ id }).then((data) => {
        setAddBrandId(data.id);
        setAddBrand(data.name);
      });
    }
  }, [id]);

  return (
    <>
      <ReactNotifications />
      <Menu />
      <Separator />
      <div style={{ padding: "50px" }}>
        <h1>{addBrandId ? "Editar Marca" : "Nova Marca"}</h1>
        <Separator size="xl" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveBrand();
          }}
        >
          <Label htmlFor="id" children="Id:"></Label>
          <Separator size="xs" />
          <Input id="id" value={addBrandId} type="text" disabled="disabled" />
          <Separator size="lg" />
          <Label htmlFor="newBrand" children="Marca:"></Label>
          <Separator size="xs" />
          <Input
            id="newBrand"
            value={addBrand}
            onChange={(value) => setAddBrand(value)}
            type="text"
            required
          />
          <Separator size="lg" />
          <div style={{ display: "flex" }}>
            <Button>Salvar</Button>
            <Separator />
            <Link to="/marcas">
              <Button>Voltar</Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewBrand;
