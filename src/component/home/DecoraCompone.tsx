import React from "react";
import {
  ClipPathRight,
  ClipPathLeft,
  AnimatedText,
} from "../../assets/styled/home/HomePages";
import { Animation } from "../common/Animation";
import { Texto } from "../common/Texto";

export const DecoraCompone = () => {
  return (
    <div className="mx-auto max-w-6xl relative top-10">
      <ClipPathRight></ClipPathRight>
      <div className=" pb-7 borde z-1">
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
      </div>
      <ClipPathLeft> </ClipPathLeft>
    </div>
  );
};
