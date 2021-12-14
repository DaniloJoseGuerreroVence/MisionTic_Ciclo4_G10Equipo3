import React from "react";

import FormularioUsuario from "../../../../components/formularioUsuario/";

const CrearUsuario = () => {
  const datos_usuario = (usuario) => {
    fetch("http://localhost:8080/api/crear_usuario", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        window.location.href = "/usuario";
      });
  };

  return (
    <div>
      <h3>Bienvenido al formulario para crear Usuario</h3>
      <FormularioUsuario bus={datos_usuario} />
    </div>
  );
};

export default CrearUsuario;
