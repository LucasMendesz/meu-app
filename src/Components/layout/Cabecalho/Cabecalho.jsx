import Menu from "../Menu/Menu";
const estilos = {
  color: "#262626",
  backgroundColor: "#f7f7f7",
  textTransform: "uppercase",
};

const Cabecalho = () => {
  return (
    /* CSS IN JS */

    /* CSS inline (usa propriedade style e sintaxe de objeto) */
    <header
      style={{
        backgroundColor: "#f7f7f7",
        textAlign: "center",
      }}
    >
      <h1 style={estilos}>Interface React</h1>
      <Menu />
    </header>
  );
};
export default Cabecalho;
