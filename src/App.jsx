import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./Components/layout/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Rodape from "./Components/layout/Rodape";
const App = () => {
  return (
    <>
      {/*BrowserRouter: Container de rotas
    (precisa envolver todos os componentes do App) */}
      <BrowserRouter>
        <Cabecalho />

        {/* Switch: mecanismo para troca/alternativa de rotas */}
        <Switch>
          {/* Route: configuração de cada rota 
          (qual caminho, qual componente) 
          
          Outra sintaxe de Route: 
          <Route path="/produtos" componente{Produto} />
          */}
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
