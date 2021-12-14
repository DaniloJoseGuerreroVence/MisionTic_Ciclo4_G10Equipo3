import React from "react";

import FormularioFruta from "../../../../components/formularioFruta/";

const CrearFruta = () => {

    const datos_fruta = (fruta) => {
        fetch('http://localhost:8080/api/crear_fruta', {
            method: 'POST',
            body: JSON.stringify(fruta),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            window.location.href = "/fruta";
          });
    }

  return (
    <div>
        <h3>Bienvenido al formulario para crear fruta</h3>
        <FormularioFruta bus={datos_fruta} />
    </div>
  );
};

export default CrearFruta;
