import "./styled.css";
type BadgeProps = {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "default";
};
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
}) => {
  return <div className={`badge badge-${variant}`}>{children}</div>;
};
