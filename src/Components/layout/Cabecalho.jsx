import Menu from "../Menu";

const estilos = {
  color: "white",
  backgroundColor: "Black",
};

const Cabecalho = () => {
  return (
    /* CSS IN JS */

    /* CSS inline (usa propriedade style e sintaxe de objeto) */
    <header style={{ backgroundColor: "purple", textAlign: "center" }}>
      <h1 style={estilos}>Interface React</h1>
      <Menu />
    </header>
  );
};
export default Cabecalho;
