import type { InputHTMLAttributes } from "react";
import "./styled.css";
export const Input: React.FC<
  InputHTMLAttributes<HTMLInputElement> & { label?: string }
> = (props) => {
  return (
    <div className="input-styled">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input {...props} type="text" />
    </div>
  );
};
