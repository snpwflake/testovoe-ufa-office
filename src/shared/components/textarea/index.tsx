import type { InputHTMLAttributes } from "react";
import "./styled.css";
export const Textarea: React.FC<
  InputHTMLAttributes<HTMLTextAreaElement> & { label?: string }
> = (props) => {
  return (
    <div className="textarea-styled">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <textarea {...props} />
    </div>
  );
};
