import {
  ClipPathRight,
  ClipPathLeft,
} from "../../assets/styled/study/ClipPath";

import { Texto } from "../common/Texto";
import { Animation } from "../common/Animation";

export const ClipPath = () => {
  return (
    <div className="mx-auto  gap-4  md:justify-center max-w-6xl relative p-10">
      <ClipPathRight></ClipPathRight>
      <div className="">
        <Animation
          title="¡BIENVENIDOS !"
          subtitle="A MI EDUCACIÓN."
          text="FORMAS DE ESTUDIO:"
        />
      {/* </div>
      <div> */}
        <Texto
          title=""
          subtitles="PRESENCIAL   Front-End:"
          text1="Durante mi proceso en TalentLogy, 
                 tuve la oportunidad de participar 
                 en prácticas donde trabajé en proyectos
                 reales de desarrollo web Front-End.
                 Inicio: 27/02/2023 - Finalización: 10/12/2023"
          text="BOOTCAMP desarrollo fullstack:"
          text2="Peaku Platzi, YouTube, Udemy"
          additionalText="IDIOMA:"
          text3="INGLES B1"
        />
      </div>
      <ClipPathLeft></ClipPathLeft>
    </div>
  );
};
