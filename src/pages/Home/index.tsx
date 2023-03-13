import { IllustrationDeveloper } from "../../assets/export";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <section>
        <h1>Hello Word!</h1>
        <h2>Seja Bem-vindo ao meu <br/>portfólio.</h2>
      </section>
      <article>
        <IllustrationDeveloper />
      </article>
    </Container>
  )
}