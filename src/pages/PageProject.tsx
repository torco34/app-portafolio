import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg"
import { Animation } from "../component/common/Animation"
import { Buttons } from "../component/common/Buttons"
import { Texto } from "../component/common/Texto"
import { useThemeContext } from "../usecontext/ ContextProvider"
import { Hooks } from "../hook/Hooks"
export const PageProject = () => {
    const { buttonTexts } = useThemeContext() ?? { buttonTexts: [] };
    const { selectedText, setSelectedText } = Hooks()

    const handleClick = (text: any) => {
        setSelectedText(text)
        console.log(selectedText)
        console.log(`Mostrar componentes para: ${text}`);

    };

    return (
        <ContainerImgFondo>

            <Animation title="¡BIENVENIDOS!" subtitle="A MIS PROYECTOS." text="" />
            <div className="mx-auto relative borde space-y-5 pb-7 max-w-6xl grid grid-cols-2  gap-4">
                {selectedText === selectedText &&
                    <div className="max-w-90">
                        <Texto
                            title=""
                            subtitles="Nombre"
                            text1={`${selectedText}`}
                            text="Herramientas"
                            text2="react, react hook form, react router, fieldArray"
                            additionalText="Herramientas: "
                            text3="Git, GitHub, Linux y VS Code" />
                        <a className="flex justify-center max-w-120 borde relative top-10" href="https://www.ejemplo.com">
                            <Buttons text={`Ir a ${selectedText}.com`} />
                        </a>

                    </div>
                }

                <div className="borde grid justify-center">
                    {buttonTexts.map((buttonText, index) => (
                        <Buttons key={index} text={buttonText.text} onClick={() => handleClick(buttonText.text)} />
                    ))}


                </div>
            </div>

        </ContainerImgFondo>
    )
}
