import React from "react";
function Pessoa({nome, idade, foto, cpf}) {
  return (
    <div>
      <h4>Nome: {nome}</h4>
      <h4>Idade: {idade}</h4>
      <h4>Cpf: {cpf}</h4>
      <img src={foto} alt="" />
    </div>
  );
}

export default Pessoa;
