import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  min-height: 90vh;
  width: 100%;

  background-color: ${({ theme }) => theme.background};
  position: relative;

  padding: 0px 4rem;

  section {
    display: flex;
    flex-direction: column;
    /* flex: 5; */

    h1 {
      font-weight: 700;
      font-size: 2rem;
      color: ${({ theme }) => theme.purple};
    }
    
    h2 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.title};
    }
  }

  article {
    display: flex;
    /* flex: 5; */

    svg {
      height: 22rem;
    }
  }
`;
