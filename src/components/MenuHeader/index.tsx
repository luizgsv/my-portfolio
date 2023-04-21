import { useState } from "react";
import { LogoSvg, MenuIcon } from "../../assets/export";
import { Button } from "../Button";
import { Container } from "./styles";

export function MenuHeader() {
  const [menu, setMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <Container menu={menu}>
      {/* Navegação desktop */}
      <nav>
        <section>
          <LogoSvg />
        </section>

        <ul>
          <li>Inicio</li>
          <li>Quem sou</li>
          <li>Experiências</li>
          <li>Conhecimentos</li>
          <li>Projetos</li>
        </ul>
        <button className="button-menu" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
      </nav>

      {/* Menu Hambúrguer */}
      <aside>
        <header>
          <h4>Menu de navegação</h4>
        </header>

        <section>
          <a href="">Inicio</a>
          <a href="">Quem sou</a>
          <a href="">Experiências</a>
          <a href="">Conhecimentos</a>
          <a href="">Projetos</a>
        </section>

        <footer>
          <Button
            title="Fechar"
            backgroundColor="subDetails"
            fontColor="title"
            onClick={handleCloseMenu}
          />
        </footer>
      </aside>
    </Container>
  );
}
