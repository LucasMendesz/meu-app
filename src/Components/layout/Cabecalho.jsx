import styled from "styled-components";
import Menu from "../Menu";

const periodo = "Diurno";

/* Tagged de Template para uso com styled components */
const StyledCabecalho = styled.header`
  background-color: ${periodo === "Diurno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: #262626;
  }

  p {
    font-weight: bold;
    color: purple;
    font-size: 2rem;

    &:hover {
      background-color: violet;
      color: #f7f7f7;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Interface React</h1>
      <Menu />
      <p>Teste</p>
    </StyledCabecalho>
  );
};
export default Cabecalho;
