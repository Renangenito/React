function QualNome({setNome}) {
  return (
    <>
      <h4>Qual é o Nome:</h4>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite o seu nome"
        onChange={(e)=> setNome(e.target.value)}
        
      />
    </>
  );
}

export default QualNome;
