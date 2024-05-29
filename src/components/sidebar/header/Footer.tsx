import { useState } from "react";
import { CustomButton } from "../../common/CustomButton";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div className="h-20 flex items-center justify-center fixed bottom-0 w-full bg-zinc-600  text-white text-center py-4">
          <p>Este portafolio esta hecho por Torcoroma Arias Ascanio</p>
        </div>
      )}

      <div className="fixed bottom-20 right-4 p-2  text-white r">
        <CustomButton
          text={isVisible ? "Quitar pie de página" : "Mostrar pie de página"}
          onClick={() => setIsVisible(!isVisible)}
          className={isVisible ? "text-slate-100" : " text-white"}
        />
      </div>
    </>
  );
};
