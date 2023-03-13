import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  height: 14vh;
  width: 100%;

  background-color: ${({ theme }) => theme.background};

  padding: 0px 4rem;

  position: fixed;

  border-bottom: 2px solid ${({ theme }) => theme.gray};

  top: 0;
  left: 0;

  z-index: 999;

  nav {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 14rem;

    width: 100%;
    height: auto;

    section {
      display: flex;

      svg {
        height: 1.75rem;
      }
    }

    ul {
      display: flex;
      flex-direction: row;

      justify-content: center;

      gap: 4.5rem;

      list-style-type: none;

      li {
        color: ${({ theme }) => theme.title};
        font-family: "Archivo", sans-serif;
      }
    }
  }
`;
