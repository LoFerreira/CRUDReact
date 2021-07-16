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

function BrandFormScreen() {
  const [brandName, setBrandName] = React.useState("");
  const [brandId, setBrandId] = React.useState("");
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

  function saveBrand() {
    SaveBrandService({ id: idFromRoute, name: brandName }).then(() => {
      showToast({
        message: `Marca ${idFromRoute ? "editada" : "adicionada"} com sucesso!`,
      });
      setBrandName("");
      setBrandId("");
    });
  }

  React.useEffect(() => {
    if (idFromRoute) {
      GetBrandByIdService({ id: idFromRoute }).then((data) => {
        setBrandId(data.id);
        setBrandName(data.name);
      });
    }
  }, [idFromRoute]);

  return (
    <>
      <ReactNotifications />
      <Menu />
      <Separator />
      <div style={{ padding: "50px" }}>
        <h1>{brandId ? "Editar Marca" : "Nova Marca"}</h1>
        <Separator size="xl" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveBrand();
          }}
        >
          <Label htmlFor="id" children="Id:"></Label>
          <Separator size="xs" />
          <Input id="id" value={brandId} type="text" disabled="disabled" />
          <Separator size="lg" />
          <Label htmlFor="newBrand" children="Marca:"></Label>
          <Separator size="xs" />
          <Input
            id="newBrand"
            value={brandName}
            onChange={(value) => setBrandName(value)}
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

export default BrandFormScreen;
