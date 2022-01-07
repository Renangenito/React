import { useState } from "react";

function Eventos() {
  function obterNome(e) {
    return setNome(e.target.value);
  }
  function obterCpf(e) {
    return setCpf(e.target.value);
  }
  function ativar(e) {
    e.preventDefault();
    alert(`Nome ${nome} e o CPF ${cpf}`);
    console.log(`Nome ${nome} e o CPF ${cpf}`);
  }

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <>
      <form onSubmit={ativar}>
        <h4>Cadastrar</h4>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o seu nome"
          value={nome}
          onChange={(e) => obterNome(e)}
        />
        <label htmlFor="cpf">CPF: </label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          placeholder="Digite seu Cpf"
          value={cpf}
          onChange={(e) => obterCpf(e)}
        />
        <button>Ativar</button>
      </form>
    </>
  );
}

export default Eventos;
