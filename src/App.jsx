import Cabecalho from "./Components/layout/Cabecalho";
import Conteudo from "./Components/layout/Conteudo";
import Rodape from "./Components/layout/Rodape";
import Alert from "react-bootstrap/Alert";

function AdditionalContentExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

const App = () => {
  return (
    <>
      <Cabecalho />

      <Conteudo />

      <Rodape />
    </>
  );
};
export default App;
