import React from "react";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Table from "../components/table";
import Button from "../components/button";
import Container from "../components/container";

function BrandsScreen() {
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
      fetch("http://localhost:8080/brands").then((result) => {
          result.json().then((data) => {
              setBrands(data);
          });
      });
  }, []);

  return (
    <>
      <Menu />
      <Separator />
      <h1>Marcas</h1>
      <Separator />
      <Container>
      <Table data={brands} columns={[
          {path: "id", label: "#", width: "5%"},
          {path: "name", label: "label", width: "90%"},
          {
              path: "",
              label: "Ações",
              render: () => {
                  <div style={{display: "flex"}}>
                      <Button >Editar</Button>
                      <Separator size="sm" />
                      <Button >Excluir</Button>
                  </div>
              },
          },
      ]}
      />
      </Container>
    </>
  );
}

export default BrandsScreen;
