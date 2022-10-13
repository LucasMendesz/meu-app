import Artigo from "../Artigo";
const Conteudo = () => {
  const cursos = ["HTML", "CSS3", "JavaScript", "ReactJS", "NodeJS", "PHP"];

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

        <Artigo titulo="Artigo 1" cursos={cursos[0]}>
          Este é o texto do primeiro artigo....
        </Artigo>

        <Artigo titulo="Artigo 2" cursos={cursos[1]}>
          Este é o texto do segundo artigo....
        </Artigo>

        <Artigo titulo="Artigo 3" cursos={cursos[2]}>
          Este é o texto do terceiro artigo....
        </Artigo>

        <Artigo subtitulo="Artigo 4" cursos={cursos[3]}>
          Este é o texto do quarto artigo....
        </Artigo>
        <Artigo subtitulo="Artigo 5" cursos={cursos[4]}>
          Este é o texto do quinto artigo....
        </Artigo>

        <Artigo subtitulo="Artigo 6" cursos={cursos[5]}>
          Este é o texto do sexto artigo....
        </Artigo>
      </section>
    </main>
  );
};
export default Conteudo;
