import Menu from "../Menu";
const Cabecalho = () => {
  return (
    /* CSS IN JS */

    /* CSS inline (usa propriedade style e sintaxe de objeto) */
    <header style={{ backgroundColor: "purple", textAlign: "center" }}>
      <h1>Interface React</h1>
      <Menu />
    </header>
  );
};
export default Cabecalho;
