import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg";
import { Animation } from "../component/common/Animation";

import { ClipPathLeft, ClipPathRight } from "../assets/styled/home/HomePages";
import { Project } from "../component/project/Project";

export const PageProject = () => {
  return (
    <ContainerImgFondo>
      <div className="mx-auto w-screen  h-screen max-w-6xl relative  p-4">
        <ClipPathRight></ClipPathRight>
        <Animation title="¡BIENVENIDOS!" subtitle="A MIS PROYECTOS." text="" />
        <div className="mx-auto grid  sm:grid-cols-1 sm:gap-2 sm:p-5  md:grid-cols-2   borde space-y-5  max-w-6xl   gap-4">
          <div className="max-w-99 flex items-center   justify-center">
            <h3 className=" p-8 bg-slate-200 rounded md:font-serif  font-bold shadow">
              Aquí hay algunas proyectos que he hecho con el trascurso del
              tiempo en ellos muestro mis conocimientos
            </h3>
          </div>

          <div className="grid justify-center  ">
            <Project />
          </div>
        </div>

        <ClipPathLeft> </ClipPathLeft>
      </div>
    </ContainerImgFondo>
  );
};
