import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  grid-area: CT2;

  height: 100vh;

  background-color: ${({ theme }) => theme.subBackground};

  padding: 10rem 4rem;

  header {
    display: flex;
    flex-direction: row;

    width: 20rem;
    height: 6rem;

    gap: 1rem;

    svg {
      height: 6rem;
      width: auto;
    }

    section {
      display: flex;
      flex-direction: column;

      justify-content: center;

      h1 {
        font-weight: 700;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.title};
      }

      h2 {
        font-weight: 600;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.title};
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    article {
      display: flex;
      flex-direction: row;

      gap: 1rem;
    }
  }
`;
