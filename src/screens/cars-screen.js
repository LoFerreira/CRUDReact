import React from "react";
import Menu from "../components/menu";
import Button from "../components/button";
import Separator from "../components/separator";
import Input from "../components/input";
import Modal from "../components/modal";
import Table from "../components/table";
import Label from "../components/label";
import Container from "../components/container";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Link } from "react-router-dom";
import deleteCarsServices from "../services/delete-car-service";
import useCars from "../hooks/use-cars";
import SelectBrand from "../components/select-brand";

function CarsScreen() {
  const [plate, setPlate] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState(null);
  const [deletingCar, setDeletingCar] = React.useState();
  const { cars, loadCars } = useCars();
  
  function showToastDelete() {
    store.addNotification({
      message: "carro excluído com sucesso!",
      type: "success",
      container: "top-center",
      dismiss: {
        duration: 3000,
      },
    });
  }

  const carsData = cars.map((cars) => ({
    id: cars.id,
    plate: cars.plate,
    color: cars.color,
    label: cars.brand.name,
  }));

  return (
    <>
      <ReactNotifications />
      <Menu />
      <Separator />
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
            <Button fontSize="xl">Novo Carro</Button>
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
          <SelectBrand
            value={selectedBrand?.id}
            onChange={(marca) => setSelectedBrand(marca)}
          />
        </div>
      </div>

      <Container>
        <Table
          data={carsData}
          columns={[
            { path: "plate", label: "Placa", width: "30%" },
            { path: "color", label: "Cor", width: "30%" },
            { path: "label", label: "Marca", width: "30%" },
            {
              path: "actions",
              label: "Ações",
              render: ({ rowData }) => {
                return (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                   <Link to={`/carros/${rowData.id}`}>
                    <Button>Editar</Button>
                  </Link>
                    <Separator size="md" />
                    <Button
                      intent="secondary"
                      onClick={() => {
                        setDeletingCar(rowData);
                      }}
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
        visible={Boolean(deletingCar)}
        onRequestClose={() => setDeletingCar(null)}
      >
        Tem certeza que deseja excluir o carro de placa:<Separator size="xs"/> {deletingCar?.plate}??
        <Separator size="lg"/>
        <div style={{display: "flex"}}>
          <Button onClick={() => setDeletingCar(null)}>Cancelar</Button>
          <Separator />
          <Button
            intent="secondary"
            onClick={() => {
              deleteCarsServices(deletingCar).then(() => {
                showToastDelete();
                loadCars();
                setDeletingCar(null);
              });
            }}
          >
            Excluir
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default CarsScreen;
