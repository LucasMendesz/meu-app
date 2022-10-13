const Artigo = (props) => {
  return (
    <article>
      <hr />
      <h5>Curso: {props.cursos}</h5>
      <h4> {props.subtitulo}</h4>
      <h3> {props.titulo}</h3>
      <p>{props.children}</p>
    </article>
  );
};
export default Artigo;
