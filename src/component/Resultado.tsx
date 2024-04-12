
import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg";
import { Texto } from "./common/Texto";
export const Resultado = () => {

  return (
    <ContainerImgFondo>
      <div className="flex justify-center items-center h-96 mx-auto max-w-6xl relative top-10">
        <Texto
          title=""
          subtitles="LO SIENTO PERO SE DEBE BUSCAR POR NOMBRE"
          text1=""
          text="EJEMPLO: STUDY, PROYECTS, ABOUT, CONTACTO"
          text2=""
          additionalText="GRACIAS!"
          text3=""
        />
      </div>
    </ContainerImgFondo>
  );
};
