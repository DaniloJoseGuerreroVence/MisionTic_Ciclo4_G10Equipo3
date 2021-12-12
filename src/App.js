import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Principal from './Pages/Principal/';
import Login from './Pages/Login/';

import BarraNavegaccion from './Components/BarraNavegaccion/';

let ObjSesionlogin = {m:"ss"};

const log = (ObjSesion) =>{

  ObjSesionlogin=ObjSesion
  // alert(ObjSesionlogin);

}

function App() {
  return (    
      <Router>
        <Routes>         
          <Route path="/login" element={<Login bus={log}/>} />
          <Route path="/Registro" element={<div><BarraNavegaccion/> <h3>Registro </h3></div>} />
          <Route path="/contacto" element={<div><BarraNavegaccion/> <h3>Contacto</h3></div>} />     
          <Route path="/users" element={<div> <BarraNavegaccion/> <h3>users</h3></div>} />       
          <Route path="/" element={<Principal />} />          
        </Routes>
      </Router >    
  );
}

export default App;