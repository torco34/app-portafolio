import {
  ClipPathRight,
  ContenedorDiv,
  ClipPathLeft,
  TextBienvenida,
} from "../../assets/styled/study/ClipPath";
import { Texto } from "../common/Texto";


export const ClipPath = () => {
  return (


    <div className="mx-auto max-w-6xl">
      <ContenedorDiv>
        <ClipPathRight></ClipPathRight>
        <TextBienvenida >BIENVENIDOS .</TextBienvenida>
        <Texto
          titles="A conocer mis Habilidades"
          title="Html5, css3, Bootstrap, Javascript, Typescript y React "
          text="Git, GitHub, Linux, VS Code" />
        <ClipPathLeft> </ClipPathLeft>
      </ContenedorDiv>
    </div>
  );
};
