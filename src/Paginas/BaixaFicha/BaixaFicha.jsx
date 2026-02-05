import { useState } from "react";
import "./BaixaFicha.css";

export default function BaixarFicha() {
  const [codigounico, setCodigounico] = useState("");
  const [usuario, setUsuario] = useState("");


  return (
    <div className="baixar-wrapper">
      <div className="container">
        <h1>Baixar Ficha</h1>

        <div className="input-box clean">
          <input
            placeholder="Código Único"
            type="text"
            inputMode="numeric"
          />
        </div>

        <div className="dados-ficha">
          LIMPEZA DE PELE
          <div className="valor-item">
            R$0,00
          </div>
        </div>

        <div className="input-box">
          <input
            placeholder="Usuario"
            type="text"
            name="Usuario"
            id="Usuario"
            inputMode="numeric"
            autoComplete="username"
          />

          <i className="bx bx-user"></i>
        </div>

        <button type="submit" className="login">
          Baixar Ficha
        </button>
      </div>
    </div>
  );
}