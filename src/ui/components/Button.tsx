interface ButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = ({
  text,
  size = "md",
  className,
}: ButtonProps) => {
  return (
    <button
      className={`button button--${size} ${className ?? ""}`}
    >
      {text}
    </button>
  );
};