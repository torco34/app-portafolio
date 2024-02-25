import {
  ClipPathRight,
  ClipPathLeft,
} from "../../assets/styled/study/ClipPath";

import { Texto } from "../common/Texto";
import { Animation } from "../common/Animation";

export const ClipPath = () => {
  return (
    <div className="mx-auto max-w-6xl relative top-10">
      <ClipPathRight></ClipPathRight>
      <div className=" pb-7 borde z-1">
        <Animation title="¡BIENVENIDOS !" subtitle="A MI EDUCACIÓN." text="FORMAS DE ESTUDIO:" />
        <Texto
          title=""
          subtitles="PRESENCIAL:"
          text1=" Durante mi proceso en 
          TalentLogy, tuve la
          oportunidad de participar
          en prácticas donde trabajé 
          en proyectos reales.
          inicio 27/02/2023 - finalizar 10/12/2023 "
          text="PLATAFORMAS:"
          text2="Platzi, YouTube, Udemy"
          additionalText="IDIOMA:"
          text3="INGLES B1"
        />
      </div>
      <ClipPathLeft></ClipPathLeft>
    </div>
  );
};
