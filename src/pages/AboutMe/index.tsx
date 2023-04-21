import { DownloadIcon, Profile } from "../../assets/export";
import { ComponentBox } from "../../components/Box";
import { Button } from "../../components/Button";
import { Container } from "./styles";

export function AboutMe() {
  return (
    <Container>
      <ComponentBox>
        <header>
          <Profile />
          <section>
            <h1>Luiz Gustavo</h1>
            <h2>Dev. FRONT-END</h2>
          </section>
        </header>
        <section>
          <article>
            <Button
              title="GitHub"
              fontSize={1.3}
              fontWeight="700"
              fontColor="title"
              backgroundColor="subDetails"
            />
            <Button
              title="LinkedIn"
              fontSize={1.3}
              fontWeight="700"
              fontColor="title"
              backgroundColor="subDetails"
            />
          </article>
          <Button
            title="LinkedIn"
            fontSize={1.3}
            fontWeight="700"
            fontColor="title"
            backgroundColor="subDetails"
            icon={<DownloadIcon />}
          />
        </section>
      </ComponentBox>
    </Container>
  );
}
