import React from "react";
import PropTypes from "prop-types";

function Table({ cars }) {
  return (
    <table>
      <tr>
        <th>Placa</th>
        <th>Cor</th>
        <th>Marca</th>
        <th>Ações</th>
      </tr>
      {cars.map((car) => (
        <tr>
          <th
            plate={car.plate}
            color={car.color}
            brand={car.brand}
            action={car.action}
          ></th>
        </tr>
      ))}
    </table>
  );
}

export default Table;

// Types of props expected
Table.propTypes = {
  cars: PropTypes.node.isRequired,
};
