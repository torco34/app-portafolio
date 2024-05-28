import { useState } from "react";
import { BsChatSquareTextFill } from "react-icons/bs";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div className="h-20 flex items-center justify-center fixed bottom-0 w-full bg-gray-600 text-white text-center py-4">
          <p>Este portafolio esta hecho por Torcoroma Arias Ascanio</p>
          <div className="flex justify-end absolute top-0 right-0 p-9">
            {/* <div className="w-24 h-24 flex justify-center items-center rounded-full bg-slate-200 transition duration-300 text-slate-700 hover:text-sky-500 cursor-pointer">
              <BsChatSquareTextFill className="text-5xl relative rotate-0 transition duration-500 transform-gpu hover:rotate-90" />
            </div> */}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-20 right-4 p-2 bg-teal-500 text-white rounded-full"
      >
        {isVisible ? "Quitar pied pagina" : "Show Footer"}
      </button>
    </>
  );
};
