import { BASE_URL } from "./constantes.jsx";
import { SESSAO } from "./constantes.jsx";

export async function FazerLogin(usuario, senha, cnpj) {
  const response = await fetch(BASE_URL + "/usuario/logar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      LOGIN: usuario,
      SENHA: senha,
      CPFCNPJ: cnpj
    })
  });

  // se der erro HTTP
  if (!response.ok) {
    const erro = await response.text();
    throw new Error(erro || "Erro ao realizar login");
  }  
  
  // sucesso
  const data = await response.json();

  SESSAO.TOKEN_ACESS = data.TOKEN_JWT;
  SESSAO.LOGIN = data.LOGIN;
  SESSAO.CONTACAIXA = data.CONTACAIXA_NOME;
  SESSAO.CPFCNPJ = data.CPFCNPJEMPRESA;

  return data;
}