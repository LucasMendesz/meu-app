import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <ul className={estilos.ul}>
        <li className={estilos.li}>
          <a href="" className={`${estilos.li} ${estilos["li a:hover"]}`}>
            Home
          </a>
        </li>

        <li className={estilos.li}>
          <a href="" className={`${estilos.li}  ${estilos["li a:hover"]}`}>
            Produtos
          </a>
        </li>

        <li className={estilos.li}>
          <a href="" className={`${estilos.li} ${estilos["li a:hover"]}`}>
            Serviços
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
