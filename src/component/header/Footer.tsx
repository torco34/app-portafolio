import { BsChatSquareTextFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="bg-dark h-40 flex items-center justify-center fixed bottom-0 w-full bg-gray-800 text-white text-center py-4  ">
      <p>Este portafolio esta echo por Torcoroma Arias Ascanio</p>
      <div className="flex justify-end px- absolute top-0 right-0 p-9  ">
        <div className=" w-24 h-24 flex justify-center items-center rounded-full bg-slate-200 transition duration-300 text-slate-700 hover:text-sky-500 cursor-pointer ">
          <BsChatSquareTextFill className="text-5xl relative rotate-0 transition duration-500 transform-gpu hover:rotate-90" />
        </div>
      </div>
    </div>
  );
};
