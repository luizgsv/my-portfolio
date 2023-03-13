import { ThemeProvider } from "styled-components";
import { MenuHeader } from "./components/MenuHeader";
import { Home } from "./pages/Home";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
        <MenuHeader />
        <Home />
        <Home />
    </ThemeProvider>
  );
}

export default App;
