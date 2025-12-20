type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export default function Button({ text, handleClick }: ButtonProps) {
  return <button onClick={() => handleClick()}>{text}</button>;
}
