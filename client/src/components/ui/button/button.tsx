import buttonStyle from "./style";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning";
  size?: "small" | "medium" | "large" | "xlarge";
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle.button} ${buttonStyle[variant]} ${buttonStyle[size]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
