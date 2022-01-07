import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [user, setUser] = useState("");
  function enviar(e) {
      e.preventDefault()
   setUser(["Email: " ,email," - ", "Nome: ",nome, " - ", "CPF: ",cpf]);
   setNome("");
   setEmail("");
   setCpf("");
   
   }
   function apagarEmail(){
       setUser("")
      
   }

  return (
    <div>
      <form>
        <h1>Condicional</h1>
        <input type="email" placeholder="Digite o seu email"value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder="Digite o seu Nome"value={nome} onChange={(e)=> setNome(e.target.value)}/>
        <input type="text" placeholder="Digite o seu CPF" value={cpf} onChange={(e)=> setCpf(e.target.value)}/>
        <button type="submit" onClick={enviar}>
          Enviar dados
        </button>
        {user &&(
            <div>
                <p>Seus dados: {user}</p>
                <button onClick={apagarEmail}>Apagar dados</button>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
