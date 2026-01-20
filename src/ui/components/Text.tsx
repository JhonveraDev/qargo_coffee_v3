interface Props {
  text: string;
  className?: string;
}

export const Text = ({ text, className }: Props) => {
  return <p className={className}>{text}</p>;
};