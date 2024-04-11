import {
  ClipPathRight,
  ClipPathLeft,
} from "../../assets/styled/study/ClipPath";

import { Texto } from "../common/Texto";
import { Animation } from "../common/Animation";

export const ClipPath = () => {
  return (
    <div className="mx-auto h-screen   md:justify-center max-w-6xl relative ">
      <div className="p-8 mb-10">
        <ClipPathRight></ClipPathRight>
        <Animation title="¡BIENVENIDOS!" subtitle="A MI FORMACIÓN:" text="" />
        <Texto
          title=""
          subtitles="BOOTCAMP Front-End:"
          text1="Prácticas con proyectos reales de desarrollo web Front-End.Inicio: 27/02/2023 - Finalización: 10/12/2023"
          text="BOOTCAMP fullstack:"
          text2="Peaku Inicio: 1/04/2023 - actualmente "
          additionalText="IDIOMA:"
          text3="INGLES B1"
        />
        <ClipPathLeft></ClipPathLeft>
      </div>
    </div>
  );
};
