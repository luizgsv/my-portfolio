import { ButtonHTMLAttributes, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,IButtonComponent {
  title: string;
  icon?: ReactNode
}

export interface IButtonComponent {
  fontSize?: number;
  fontColor?: keyof DefaultTheme;
  fontWeight?: string;

  backgroundColor?: keyof DefaultTheme;

  border?: boolean;
  borderColor?: keyof DefaultTheme;
  borderRadius?: number;
}
