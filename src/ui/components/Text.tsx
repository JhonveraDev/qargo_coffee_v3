interface Props {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Text = ({ text, size, className }: Props) => {
  return <p className={`text text--${size} ${className ?? ""}`}>{text}</p>;
};