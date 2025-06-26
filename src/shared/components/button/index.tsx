import type { ButtonHTMLAttributes } from "react";
import "./styled.css";
export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <button className="button-styled" {...props} />;
};
