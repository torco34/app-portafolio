import {
  ClipPathRight,
  ClipPathLeft,
} from "../../assets/styled/home/HomePages";
import { Animation } from "../common/Animation";
import { Texto } from "../common/Texto";

export const DecoraCompone = () => {
  return (
    <div className="mx-auto h-screen md:justify-center  max-w-6xl relative p-0">
      <div className=" p-8 borde mb-10">
        <ClipPathRight></ClipPathRight>
        <Animation
          title="¡TORCOROMA ARIAS ASCANIO!"
          subtitle=" DESARROLLADORA WEB FRONT-END."
          text="HABILIDADES:"
        />
        <Texto
          title=""
          subtitles="DISEÑO:"
          text1=" HTML5, CSS3, Bootstrap, tailwindCss, styled-components "
          text="PROGRAMACIÓN:"
          text2="JavaScript, TypeScript y React"
          additionalText="HERRAMIENTAS:"
          text3="Git, GitHub, Linux y VS Code"
        />
        <ClipPathLeft> </ClipPathLeft>
      </div>
    </div>
  );
};
