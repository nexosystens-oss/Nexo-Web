import { Routes, Route } from "react-router-dom";
import Login from './Paginas/Login/Login.jsx';
import BaixaFicha from './Paginas/BaixaFicha/BaixaFicha.jsx';


function App(){
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/baixa-ficha" element={<BaixaFicha />} />
    </Routes>
  )
}

export default App