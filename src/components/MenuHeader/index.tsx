import { LogoSvg } from "../../assets/export";
import { Container } from "./styles";

export function MenuHeader() {
  return (
    <Container>
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
      </nav>
    </Container>
  );
}
