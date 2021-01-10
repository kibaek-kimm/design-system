import { MouseEvent } from "react"

export type ButtonType = "primary" | "secondary" | "error" | "default";

export interface IButtonProps {
  buttonType: ButtonType;
  onClick?: (event: MouseEvent) => void;
}
