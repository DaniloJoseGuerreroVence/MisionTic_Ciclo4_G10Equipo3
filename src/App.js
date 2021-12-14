import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Principal from './Pages/Principal/Principal';
import Login from './Pages/Login/';
import Logout from './Pages/Logout/';
import Registro from './Pages/Registro/';

import BarraNavegaccion from './Components/BarraNavegaccion/';

// let ObjSesionlogin = {es:"vacio"};




function App() {

  const [ObjSesionlogin, SetObjSesionlogin] = useState();

  const log_in = (ObjSesion, navigate) => {

    // console.log("Desde Padre " + ObjSesion)

    // return ObjSesionlogin
    SetObjSesionlogin(ObjSesion)
    navigate("/")

  }

  const log_out = (ObjSesion, navigate) => {

    // console.log("Desde Padre " + ObjSesion)

    
    SetObjSesionlogin(ObjSesion)
    navigate("/")

  }

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login bus={log}/>} /> */}
        <Route path="/login" element={<Login bus={log_in} />} />
        <Route path="/logout" element={<Logout bus={log_out} />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/contacto" element={<div><BarraNavegaccion /> <h3>Contacto</h3></div>} />
        <Route path="/users" element={<div> <BarraNavegaccion /> <h3>users</h3></div>} />
        <Route path="/" element={<Principal login={ObjSesionlogin} />} />
      </Routes>
    </Router >
  );
}

export default App;