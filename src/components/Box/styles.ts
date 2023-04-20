import styled from "styled-components";

interface IComponentBox {
  height?: number;
  width?: number;
}

export const Container = styled.main<IComponentBox>`
  display: flex;
  flex-direction: column;

  border-radius: 0.3rem;
  border: 1px solid ${({ theme }) => theme.gray};

  background-color: ${({ theme }) => theme.details};

  padding: 1.5rem;

  gap: 1.5rem;
`;
