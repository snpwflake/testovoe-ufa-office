import type { HTMLAttributes } from "react";
import "./styled.css";
export const Section: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <section className="section-styled" {...props} />;
};
