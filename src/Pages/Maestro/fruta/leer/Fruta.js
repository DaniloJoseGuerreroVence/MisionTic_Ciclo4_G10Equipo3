import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Tabla from "../../../../components/tabla/";

const Fruta = () => {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    obtener_frutas()
  });

  const obtener_frutas = () => {
    fetch("http://localhost:8080/api/get_frutas")
    .then((response) => response.json())
    .then((data) => {
      setFrutas(data);
    });
  }

  const columnas = ["Id", "Nombre", "Precio", "Acciones"];

  const campos_fruta = ['_id', 'nombre', 'precio']

  const eliminar_fruta = (id_fruta) => {
    fetch(`http://localhost:8080/api/eliminar_fruta/${id_fruta}`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        obtener_frutas()
      });
  };

  return (
    <div>
      <h3>Bienvenido al maestro de Fruta</h3>
      <Link to="/crear_fruta">Crear Fruta</Link>
      <Tabla
        columnas={columnas}
        registros={frutas}
        botones={true}
        bus={eliminar_fruta}
        campos={campos_fruta}
      />
    </div>
  );
};

export default Fruta;
