interface ButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, size = "md", className, onClick }: ButtonProps) => {
  return (
    <button
      className={`button button--${size} ${className ?? ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};