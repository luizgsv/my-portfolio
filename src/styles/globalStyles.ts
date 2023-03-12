import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#root {
  --title: '#FFFFF1'
  --subTitle: '#E1E1E6'
  
  --purple: '#7957FF';
  
  --details: '#202024';
  --sub-details: '#29292E';
  
  --white: '#FFFFFF';
  --gray: '#585858';

  --background: '#121214';
}

h1, h2, h3, h4, h5, h6, button, input, select, span, nav, li, ul, a {
  font-family: "Archivo", sans-serif;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0.5rem;
  cursor: pointer;
}

::-webkit-scrollbar-track {
  background: #525252;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #aaaaaa;
}


`;
