import { ThemeProvider } from "styled-components";
import { MenuHeader } from "./components/MenuHeader";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <MenuHeader />
        <Home />
        <AboutMe />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
