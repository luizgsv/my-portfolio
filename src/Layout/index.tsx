import { ReactNode } from "react";
import { LayoutStyle } from "./styles";

interface ILayout {
  children: ReactNode,

}

export function Layout({ children }: ILayout) {
  return (
    <LayoutStyle>
      {children}
    </LayoutStyle>
  )
}