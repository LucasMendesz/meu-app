import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./Components/layout/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Rodape from "./Components/layout/Rodape";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/produtos">
            <Produtos />
          </Route>

          <Route path="/servicos">
            <Servicos />
          </Route>

          <Route>
            <Rodape />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
