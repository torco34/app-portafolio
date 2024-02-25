import { AnimateBox } from "../component/common/AnimateBox";
import { TitleH1, ContainerDiv } from "../assets/styled/home/HomePages";
import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg";
import { DecoraCompone } from "../component/home/DecoraCompone";

export const HomePages = () => {
  return (
    <>
      <ContainerImgFondo>
        {/* <ContainerDiv>
          <TitleH1>TORCOROMA ARIAS ASCANIO</TitleH1>
          <AnimateBox />
        </ContainerDiv> */}
        <DecoraCompone />
      </ContainerImgFondo>
    </>
  );
};
