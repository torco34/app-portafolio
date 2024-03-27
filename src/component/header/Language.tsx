import { useState } from "react";
import { BsGlobe2, BsFillCaretDownFill } from "react-icons/bs";
import { Hooks } from "../../hook/Hooks";
import { TextLanguage } from "./TextLanguage";
import { useThemeContext } from "../../usecontext/ ContextProvider";
export const Language = ({ showText, handleLanguageToggle }: any) => {
  const { selectedText } = useThemeContext() ?? {
    query: "",
  };
  return (
    <div className="flex pl-4 justify-center items-center  text-stone-300 space-x-3 ">
      <BsGlobe2 className=" w-6 h-6 text-stone-300" />
      <div className="p-3">
        <p className="mt-2">{selectedText}</p>
      </div >
      <BsFillCaretDownFill
        className="w-6 h-6 text-stone-300"
        onClick={handleLanguageToggle}
      />

      {showText && <TextLanguage />}
    </div>
  );
};
