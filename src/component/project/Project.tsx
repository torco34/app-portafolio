
import { ClipPathLeft, ClipPathRight, ContenedorDiv } from "../../assets/styled/study/ClipPath"
import { Animation } from "../common/Animation"
import { Buttons } from "../common/Buttons"
import { Texto } from "../common/Texto"


export const Project = () => {
  return (
      <div className="mx-auto max-w-6xl ">
          <ContenedorDiv>
              <ClipPathRight></ClipPathRight>
              <Animation title="¡BIENVENIDOS!" subtitle="Descubre mis habilidades técnicas" text="." />
              <div className=" space-y-5 pb-7  max-w-6xl grid grid-cols-2 gap-4">
                  <Texto
                      title=""
                      subtitles="Diseño:"
                      text1=" HTML5, CSS3, Bootstrap, tailwindCss, styled-components "
                      text="Programación:"
                      text2="JavaScript, TypeScript y React"
                      additionalText="Herramientas:"
                      text3="Git, GitHub, Linux y VS Code" />
                  <Buttons text="Perfil de estudiante"/>
              </div>

              <ClipPathLeft> </ClipPathLeft>
          </ContenedorDiv>
      </div>
  )
}
