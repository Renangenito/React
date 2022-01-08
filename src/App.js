import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import QualNome from "./components/QualNome";


function App() {

const [nome, setNome] = useState("")
const [nomeAdiciona, setNomeAdiciona] = useState("")
function adicionaNome(){
  setNomeAdiciona(nome)

}
  return (
  
    <div className="App">
      <QualNome setNome={setNome}/>
      <Button event={adicionaNome} text="Adicionar nome"/>
      <p>{nomeAdiciona}</p>
      
    </div>
  );
}

export default App;
