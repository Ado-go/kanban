type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export default function Button({ text, handleClick }: ButtonProps) {
  return (
    <button
      className="p-2 border rounded cursor-pointer bg-gray-600 hover:invert transition"
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}
