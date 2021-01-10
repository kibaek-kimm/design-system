import React, { useEffect } from "react"
import { IButtonProps } from "./types"

export const Button: React.FC<IButtonProps> = ({
  buttonType = "default",
  onClick,
}) => {
  const cn = buttonType;
  return <button className={cn} onClick={onClick}>Button</button>
}