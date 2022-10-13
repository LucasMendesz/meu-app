import { useState } from "react";
import Artigo from "../Artigo";
const Conteudo = () => {
  const [corFundo, setCorFundo] = useState();
  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => setCorFundo("#FFFF00");
  const fundoAzul = () => setCorFundo("#000080");
  const fundoVermelho = () => setCorFundo("#FF0000");

  const atualizaContagem = () => setContador(contador + 1);

  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>
      <button onMouseOver={fundoVermelho}>Vermelho</button>
      <button onMouseOver={fundoAzul}>Azul</button>
      <section>
        <hr />
        <button onClick={atualizaContagem}>Contador: {contador}</button>

        <h2>Não temos título</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia
          facilis omnis non, eaque repudiandae deleniti aspernatur corporis
          aperiam earum voluptate quibusdam sapiente dignissimos qui repellendus
          sequi magnam ut consequuntur fugiat nulla doloribus laborum ullam sed.
          Iste asperiores temporibus sapiente voluptatibus eum nisi odio
          eligendi adipisci voluptatem necessitatibus quae earum, veniam quia
          consequuntur enim quasi voluptate, saepe, eius laudantium dolorum
          soluta. Perferendis sit neque perspiciatis, fuga est ab voluptas
          soluta at, necessitatibus, ducimus sapiente voluptatibus doloribus.
          Laboriosam maxime minima laborum facilis, debitis, doloremque,
          reiciendis repellendus possimus eius perferendis laudantium
          accusantium assumenda et atque corrupti facere veniam nam sunt eos
          dolore.
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};
export default Conteudo;
