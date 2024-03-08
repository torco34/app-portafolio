import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg";
import { Animation } from "../component/common/Animation";

import { useThemeContext } from "../usecontext/ ContextProvider";
import { Hooks } from "../hook/Hooks";
import { ClipPathLeft, ClipPathRight } from "../assets/styled/home/HomePages";
import { Project } from "../component/project/Project";
import { Texto } from "../component/common/Texto";
export const PageProject = () => {
  const { buttonTexts } = useThemeContext() ?? { buttonTexts: [] };
  const { selectedText, setSelectedText } = Hooks();

  const handleClick = (text: any) => {
    setSelectedText(text);
    console.log(selectedText);
    console.log(`Mostrar componentes para: ${text}`);
  };

  return (
    <ContainerImgFondo>
      <div className="mx-auto max-w-6xl relative top-10">
        <ClipPathRight></ClipPathRight>
        <Animation title="¡BIENVENIDOS!" subtitle="A MIS PROYECTOS." text="" />
        <div className="mx-auto relative borde space-y-5 pb-7 max-w-6xl grid grid-cols-2  gap-4">
          <h3 className="max-w-99  p-4 bg-slate-200 rounded md:font-serif  font-bold shadow">
            Aquí hay algunas proyectos que he hecho con el trascurso del tiempo
            en ellos muestro mis conocimientos
          </h3>

          <div className="borde grid justify-center">
            <Project />
          </div>
        </div>
        {/* <Project /> */}
        <ClipPathLeft> </ClipPathLeft>
      </div>
    </ContainerImgFondo>
  );
};
