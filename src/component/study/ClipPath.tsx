import {
  ClipPathRight,
  ContenedorDiv,
  ClipPathLeft,

} from "../../assets/styled/study/ClipPath";

import { Texto } from "../common/Texto";
import { Animation } from "../common/Animation"

export const ClipPath = () => {
  return (


    <div className="mx-auto max-w-6xl relative top-10">
      <ContenedorDiv>
        <ClipPathRight></ClipPathRight>

        <div className=" pb-7 borde z-1">
          <Animation title="¡BIENVENIDOS!" subtitle=" MIS HABILIDADES TÉCNICAS." text="" />
         
          <Texto
            title=""
            subtitles="Diseño:"
            text1=" HTML5, CSS3, Bootstrap, tailwindCss, styled-components "
            text="Programación:"
            text2="JavaScript, TypeScript y React"
            additionalText="Herramientas:"
            text3="Git, GitHub, Linux y VS Code" />
        </div>

        <ClipPathLeft> </ClipPathLeft>
      </ContenedorDiv>
    </div>
  );
};
