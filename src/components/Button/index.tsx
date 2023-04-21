import { IButtonProps } from "../../models/interface/ButtonsProps";
import { ComponentButton } from "./styles";

export function Button({ title, icon, ...rest }: IButtonProps) {
  return <ComponentButton {...rest}>{icon}{title}</ComponentButton>;
}
