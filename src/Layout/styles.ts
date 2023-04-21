import styled from "styled-components";

export const LayoutStyle = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  grid-template-areas: 
  "HD HD HD"
  "CT CT CT"
  "CT2 CT2 CT2"
  ;
  `;