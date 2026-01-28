interface Props {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Title = ({ title = 'md', as = "h2", size = "md", className }: Props) => {
  const Heading = as;
  return <Heading className={`title title--${size} ${className ?? ""}`}>{title}</Heading>;
};