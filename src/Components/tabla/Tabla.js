import React from "react";
import { Table } from "react-bootstrap";

import VentanaModal from '../VentanaModal/';

const Tabla = ({
  columnas = [],
  registros = [],
  botones = true,
  busEliminar,
  busActualizar,
  campos = [],
}) => {
  // const click_eliminar = (e) => {
  //   busEliminar(e.target.id);
  // };

  // const click_actualizar = (e) => {
  //   busActualizar(e.target.id);
  // };

  return (
    <>
      {/* {console.log("desde tabla  ")} */}
      {/* {console.log(registros.data)} */}
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
            // { console.log("desde tabla map ") }
            // { console.log(index) }
            // { console.log(registro) }
            return (
              <tr key={index}>
                {campos.map((campo, k) => {
                  return <td key={k}>{registro[campo]}</td>;
                })}
                {botones ? (
                  <td>
                    {/* <button>Actualizar</button> */}
                    {/* <button id={registro._id} onClick={click_eliminar}>
                    Eliminar
                  </button> */}
                    <VentanaModal id={registro._id} variant="danger" textoBoton="Eliminar" textoBotonModal="Cancelar Apuesta" titulo="Cancelar Apuesta" />
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;
