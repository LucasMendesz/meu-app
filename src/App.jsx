import Cabecalho from "./Components/layout/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Rodape from "./Components/layout/Rodape";
const App = () => {
  return (
    <>
      <Cabecalho />

      <Home />

      <Produtos />

      <Servicos />

      <Rodape />
    </>
  );
};
export default App;
