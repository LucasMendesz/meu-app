import Artigo from "../Artigo";
const Conteudo = () => {
  const artigos = [
    {
      titulo: "Artigo 1",
      subtitulo: "Esse é o subtitulo do artigo... 1",
      texto: "Esse é o conteúdo blablabla do artigo 1....",
      curso: "HTML",
    },

    {
      titulo: "Artigo 2",
      subtitulo: "Esse é o subtitulo do artigo... 2",
      texto: "Esse é o conteúdo blablabla do artigo 2....",
      curso: "CSS3",
    },

    {
      titulo: "Artigo 3",
      subtitulo: "Esse é o subtitulo do artigo... 3",
      texto: "Esse é o conteúdo blablabla do artigo 3....",
      curso: "JavaScript",
    },
  ];

  return (
    <main>
      <section>
        <h2>Conteúdo do site...</h2>
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

        {artigos.map((artigo) => {
          return (
            <Artigo
              titulo={artigo.titulo}
              subtitulo={artigo.subtitulo}
              cursos={artigo.curso}
            >
              {artigo.texto}
            </Artigo>
          );
        })}
      </section>
    </main>
  );
};
export default Conteudo;
