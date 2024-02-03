import {
  ClipPathRight,
  ContenedorDiv,
  ClipPathLeft,
  TextBienvenida,
} from "../../assets/styled/study/ClipPath";

import { Texto } from "../common/Texto";


export const ClipPath = () => {
  return (


    <div className="mx-auto max-w-6xl ">
      <ContenedorDiv>
        <ClipPathRight></ClipPathRight>
        <div className="borde grid-cols-2 z-1">
          <TextBienvenida>¡BIENVENIDOS!</TextBienvenida>
          <Texto
            title="Descubriendo mis habilidades técnicas"
            subtitles="Diseño: "
            text1=" HTML5, CSS3, Bootstrap, tailwindCss, styled-components "
            text=" Programación:"
            text2="JavaScript, TypeScript y React"
            additionalText="Herramientas: "
            text3="Git, GitHub, Linux y VS Code" />
        </div>

        <ClipPathLeft> </ClipPathLeft>
      </ContenedorDiv>
    </div>
  );
};
