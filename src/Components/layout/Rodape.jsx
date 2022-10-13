import { useState } from "react";

const Rodape = () => {
  const [estilos, setEstilos] = useState({
    textAlign: "center",
    textTransform: "uppercase",
    border: "solid 2px red",
  });

  const esconder = () => setEstilos({ display: "none" });
  const exibir = () => setEstilos({ display: "block" });

  return (
    <>
      <button>
        <span onMouseOver={esconder}>Esconder</span>
      </button>

      <button>
        <span onMouseOver={exibir}>Exibir</span>
      </button>

      <footer style={estilos}>
        <h2>Rodapé!</h2>
      </footer>
    </>
  );
};
export default Rodape;
