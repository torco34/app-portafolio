
interface ButtonProps {
  text: string;
}
export const Buttons = ({ text }: ButtonProps) => {
  return (

    <div className="z-1">
      <button className='text-white relative p-2'>{text}
        <span className="absolute inset-x-0  bottom-0 h-1 bg-gradient-to-r from-purple-500 to-blue-300  "></span>
      </button>
    </div>
  )
}
