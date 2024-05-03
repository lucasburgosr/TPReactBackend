import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './Menu';
import DondeEstamos from './DondeEstamos';
import Home from './home';
import Instrumento from './Instrument';
import Detalle from "./Detalle";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DondeEstamos' element={<DondeEstamos />} />
        <Route path='/Instrumentos' element={<Instrumento />} />
        <Route path='/Detalle/:id' element={<Detalle></Detalle>} />      </Routes>
    </Router>
  );
}

export default App;