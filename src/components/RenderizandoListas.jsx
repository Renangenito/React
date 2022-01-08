function RenderizandoListas({ lista }) {
  return (
    <>
      <h4>Marcas de tenis:</h4>

      {lista.length > 0 ? (lista.map((item, index) => (
        <p key={index}>{item}</p>
      ))) : (<p>Não há itens para mostrar!</p>)}
    </>
  );
}
export default RenderizandoListas;
