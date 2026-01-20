interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = ({
  text,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${className ?? ""}`}
    >
      {text}
    </button>
  );
};