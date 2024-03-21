import { useState } from "react";
import { BsGlobe2, BsFillCaretDownFill } from "react-icons/bs";
import { Hooks } from "../../hook/Hooks";
export const Language = () => {
  const {  showText, setShowText, buttonText, setButtonText } =
    Hooks();

  const handlenLangua = () => {
    alert("hols");
  };
  return (
    <div className="flex justify-center items-center text-stone-300 space-x-3 ">
      <BsGlobe2 className=" w-6 h-6 text-stone-300" />
      <div>
        <p className="mt-2">{buttonText}</p>
      </div>
      <BsFillCaretDownFill
        className="w-6 h-6 text-stone-300"
        onClick={() => setShowText(!showText)}
      />
    </div>
  );
};
