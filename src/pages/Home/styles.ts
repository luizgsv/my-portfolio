import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  grid-area: CT;

  align-items: center;
  justify-content: space-between;

  height: 100vh;

  background-color: ${({ theme }) => theme.background};
  position: relative;

  padding: 10rem 4rem;

  section {
    display: flex;
    flex-direction: column;

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
  }

  /* Mobile */
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 5rem;

    section {
      h1 {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
    article {
      svg {
        height: 14rem;
        width: auto;
      }
    }
  }
  /* Largura mobile e tablet pequeno */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 5rem;

    section {
      h1 {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
    article {
      svg {
        height: 14rem;
        width: auto;
      }
    }
  }
  /* Tablets */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    section {
      h1 {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
    article {
      svg {
        height: 18rem;
        width: auto;
      }
    }
  }
  /* Desktop e Laptops */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    section {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 2rem;
      }
    }
    article {
      svg {
        height: 20rem;
        width: auto;
      }
    }
  }
  /* Largura desktop */
  @media screen and (min-width: 1281px) {
    section {
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 2.5rem;
      }
    }
    article {
      svg {
        height: 22rem;
        width: auto;
      }
    }
  }

  /* Mobile */
  @media screen and (max-width: 480px) {
 
  }
  /* Largura mobile e tablet pequeno */
  @media screen and (min-width: 481px) and (max-width: 768px) {
 
  }
  /* Tablets */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  
  }
  /* Desktop e Laptops */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
   
  }
  /* Largura desktop */
  @media screen and (min-width: 1281px) {
    
  }
`;
