
interface ButtonProps {
  text: string;
  onClick?: () => void; // Definir onClick como una función opcional

}
export const Buttons = ({ text, onClick  }: ButtonProps) => {
  return (

    <div className="z-1">
      <button className='text-white relative transform hover:scale-105 transition-transform shadow  duration-300  p-2' onClick={onClick}>{text}
        <span className="absolute inset-x-0 hover:scale-105 transition-transform bottom-0 h-1 bg-gradient-to-r from-purple-500 via-blue-300 to-yellow-300   "></span>
      </button>
    </div>
  )
}
