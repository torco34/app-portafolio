import { BsGlobe2, BsFillCaretDownFill } from "react-icons/bs";
export const Language = () => {
  return (
    <div className="flex justify-center items-center text-stone-300 space-x-3 ">
      <BsGlobe2 className=" w-6 h-6 text-stone-300" />
      <p className="mt-2">language</p>
      <BsFillCaretDownFill className="w-6 h-6 text-stone-300" />
    </div>
  );
};
