import { IButtonProps } from "../../models/interface/ButtonsProps";
import { ComponentButton } from "./styles";

export function Button({ title, ...rest }: IButtonProps) {
  return <ComponentButton {...rest}>{title}</ComponentButton>;
}
