
interface ButtonProps {
  text: string;
  onClick?: () => void; // Definir onClick como una función opcional

}
export const Buttons = ({ text, onClick  }: ButtonProps) => {
  return (
    <div className="z-1">
      <button
        className="text-gray-600 font-bold  relative transform hover:scale-105 transition-transform   duration-300  p-2"
        onClick={onClick}
      >
        {text}
        <span className="absolute inset-x-0  hover:scale-105 transition-transform bottom-0 h-1 bg-gradient-to-r from-sky-500 via-blue-900 to-purple-900   "></span>
      </button>
    </div>
  );
}
