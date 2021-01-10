import React, { useEffect } from "react"
import { IButtonProps } from "./types"

export const Button: React.FC<IButtonProps> = ({ buttonType = "default" }) => {
  const cn = buttonType;
  return <button className={cn}>Button</button>
}