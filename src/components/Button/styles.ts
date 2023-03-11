import styled from 'styled-components';

import { IButtonComponent } from '../../models/interface/ButtonsProps';


export const ComponentButton = styled.button<IButtonComponent>`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme[backgroundColor] : theme.purple};

  color: ${({ theme, fontColor }) =>
    fontColor ? theme[fontColor] : theme.white};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "500")};

  border: ${({ border, borderColor }) => (border || borderColor ? "2px" : "0")};
  border-style: solid;
  border-color: ${({ borderColor, theme }) =>
    borderColor ? theme[borderColor] : theme.details};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}rem` : "0.3rem"};

  padding: 0.75rem 2.5rem;
`;
