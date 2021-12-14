import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import Tabla from "../../../../components/tabla";

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtener_usuarios();
  });

  const obtener_usuarios = () => {
    fetch("http://localhost:8080/api/get_usuarios")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      });
  };

  const columnas = [
    "Id",
    "Nombre",
    "Correo",
    "Celular",
    "Rol",
    "Password",
    "Acciones",
  ];

  const campos_usuario = [
    "_id",
    "nombre",
    "correo",
    "celular",
    "rol",
    "password",
  ];

  return (
    <div>
      <h3>Bienvenido al maestro de Usuario</h3>
      <Link to="/crear_usuario">Crear Usuario</Link>
      <Tabla columnas={columnas} registros={usuarios} campos={campos_usuario} />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Lista de Usuarios
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {usuarios.map((usuario) => {
            return (
              <Dropdown.Item href={`usuario/${usuario._id}`}>
                {usuario.nombre}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Usuario;
