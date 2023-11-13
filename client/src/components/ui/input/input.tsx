import { useState } from "react";
import { BsEye, BsEyeSlash } from "../../../assets/icons";
import inputStyle from "./style";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder?: string;
  label?: string;
  error?: string;
  type?: string;
  name?: string;
  inputMode?:
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  pattern?: string;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  step?: number;
}

const Input = ({
  label,
  error,
  value,
  placeholder,
  onChange,
  type = "text",
  name,
  id,
  inputMode = "text",
  pattern,
  autoComplete = "off",
  autoFocus = false,
  disabled = false,
  readOnly = false,
  required = false,
  min,
  max,
  minLength,
  maxLength,
  step,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={inputStyle.container}>
      {label && (
        <label className={inputStyle.label} htmlFor={id}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input
        className={inputStyle.input}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        inputMode={inputMode}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        step={step}
        placeholder={placeholder}
      />
      {type === "password" && (
        <span
          className={inputStyle.password}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <BsEyeSlash /> : <BsEye />}
        </span>
      )}
      {error && <span className={inputStyle.error}>{error}</span>}
    </div>
  );
};

export default Input;
