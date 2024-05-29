import { InformationHome } from "../components/home/InformationHome";
import "./css/home.css";
export const HomePages = () => {
  return (
    <>
      <div className=" lex items-cente justify-cente h-scree  h-screen">
        <div className="mx-auto informacionPersonal grid max-w-6xl grid-cols-1 ">
          <InformationHome />
        </div>
      </div>
    </>
  );
};
