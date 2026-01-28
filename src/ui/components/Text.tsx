interface Props {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Text = ({ text = 'md', size= 'md', className }: Props) => {
  return <p className={`text text--${size} ${className ?? ""}`}>{text}</p>;
};