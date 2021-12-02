import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from './Pages/Index';
import BarraNavegaccion from './Components/BarraNavegaccion/';


function App() {
  return (    
      <Router>
        <Routes>         
          <Route path="/contacto" element={<div><BarraNavegaccion/> <h3>Contacto</h3></div>} />     
          <Route path="/users" element={<div> <BarraNavegaccion/> <h3>users</h3></div>} />       
          <Route path="/" element={<Index/>} />          
        </Routes>
      </Router >    
  );
}

export default App;