import React from "react";
import { Table } from "react-bootstrap";

const Tabla = ({
  columnas = [],
  registros = [],
  botones = true,
  bus,
  campos=[],
}) => {
  const click_eliminar = (e) => {
    bus(e.target.id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columnas.map((columna, index) => {
            return <th key={index}>{columna}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {registros.map((registro, index) => {
          return (
            <tr key={index}>
              {campos.map((campo, k) => {
                return <td key={k}>{registro[campo]}</td>;
              })}
              {botones ? (
                <td>
                  <button>Actualizar</button>
                  <button id={registro._id} onClick={click_eliminar}>
                    Eliminar
                  </button>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabla;
