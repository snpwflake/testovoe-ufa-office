import React from "react";
import "./styled.css";
interface SelectFieldProps {
  label?: string;
  name: string;
  options: { id: string; label: string }[];
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <div className="select-styled">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
