import styled from "styled-components";

interface IMenu {
  menu: boolean;
}

export const Container = styled.header<IMenu>`
  display: flex;
  flex-direction: row;

  grid-area: HD;

  height: 14vh;
  width: 100vw;

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
    justify-content: space-between;

    width: 100%;
    height: auto;

    section {
      display: flex;

      svg {
        height: 1.75rem;
        width: auto;
      }
    }

    ul {
      display: flex;
      flex-direction: row;

      justify-content: center;

      gap: 4.5rem;

      list-style-type: none;

      li {
        font-size: 1rem;
        color: ${({ theme }) => theme.title};
        font-family: "Archivo", sans-serif;
        
        white-space: nowrap;

        cursor: pointer;
      }
    }

    button.button-menu {
      display: none;

      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 0.3rem;

      padding: 0.3rem;

      background-color: ${({ theme }) => theme.details};

      svg {
        fill: ${({ theme }) => theme.white};
      }
    }
  }

  aside {
    display: ${({ menu }) => (menu === true ? "flex" : "none")};
    flex-direction: column;

    gap: 4rem;

    padding: 1.5rem;

    background: ${({ theme }) => theme.details};

    position: absolute;
    right: 0;

    height: 100vh;
    width: 16rem;

    header {
      display: flex;

      align-items: center;
      justify-content: center;

      padding: 0.5rem;

      border-bottom: 1px solid ${({ theme }) => theme.gray};

      h4 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.title};
      }
    }

    section {
      display: flex;
      flex-direction: column;

      gap: 1rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.subTitle};

        cursor: pointer;

      }
    }

    footer {
      display: flex;

      align-items: center;
      justify-content: center;
    }
  }

  /* Mobile */
  @media screen and (max-width: 480px) {

    padding: 0px 1.5rem;

    section {
      svg {
        height: 1rem;
      }
    }
    
    nav {
      ul {
        display: none;
      }
      button.button-menu {
        display: flex;
      }
    }

  }
  /* Largura mobile e tablet pequeno */
  @media screen and (min-width: 481px) and (max-width: 768px) {

    padding: 0px 2rem;

    section {
      svg {
        height: 1rem;
      }
    }

    nav {
      ul {
        display: none;
      }
      button.button-menu {
        display: flex;
      }
    }
  }
  /* Tablets */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    section {
      svg {
        height: 1rem;
      }
    }

    nav {
      ul {
        li {
          font-size: 0.75rem;
        }
        gap: 2rem;
      }
    }
  }
  /* Desktop e Laptops */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    section {
      svg {
        height: 1rem;
      }
    }

    nav {
      ul {
        li {
          font-size: 1rem;
        }
        gap: 2rem;
      }
    }
  }
  /* Largura desktop */
  @media screen and (min-width: 1281px) {
  }
`;
