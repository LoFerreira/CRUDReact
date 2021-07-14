import React from "react";
import Menu from "../components/menu";
import Separator from "../components/separator";
import Table from "../components/table";
import Button from "../components/button";
import Container from "../components/container";
import { Link } from "react-router-dom";

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
      <div style={{ display: "flex", justifyContent: "space-between", padding: "50px" }}>
        <div>
          <h1>Marcas</h1>
        </div>
        <div>
          <Link to="novaMarca">
            <Button>Nova Marca</Button>
          </Link>
        </div>
      </div>

      <Separator />
      <Container>
      <Table data={brands} columns={[
          {path: "id", label: "#", width: "10%"},
          {path: "name", label: "label", width: "85%"},
          {
              path: "",
              label: "Ações",
              render: () => (
                  <div style={{display: "flex"}}>
                      <Button >Editar</Button>
                      <Separator size="sm" />
                      <Button >Excluir</Button>
                  </div>
              ),
          },
      ]}
      />
      </Container>
    </>
  );
}

export default BrandsScreen;
