import { ReactNode } from "react";
import { Container } from "./styles";

interface IComponentBox {
  height?: number,
  width?: number,
  children: ReactNode,
}

export function ComponentBox({ height, width, children }: IComponentBox) {
  return (
    <Container
      height={height}
      width={width}
    >
      {children}
    </Container>
  )
}