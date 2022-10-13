/* Acesso às props usando destructuring de objeto */
const Artigo = ({ children, titulo, subtitulo, cursos }) => {
  return (
    <article>
      <hr />
      <h5>Curso: {cursos} </h5>
      <h4> {subtitulo} </h4>
      <h3> {titulo} </h3>
      <p> {children} </p>
    </article>
  );
};
export default Artigo;
