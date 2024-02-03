import { IPropsTexto } from "../../Interface"
import { TextContainer } from "../../assets/styled/common/Texto"
import { Buttons } from "./Buttons"
export const Texto = ({ title, text, text1, text2, text3, subtitles, additionalText }: IPropsTexto) => {
    return (
        <TextContainer>
            <h2 className="px-5 text-4xl pb-5 font-bold text-slate-100 ">{title}</h2>
            <h3 className="px-5  font-bol text-amber-100 ">{subtitles} <span className="text-slate-300 px-3">{text1}</span> </h3>
            <h3 className="px-5  font-bol  text-teal-300  ">{text} <span className="text-slate-300 px-3">{text2}</span> </h3>
            <h3 className="px-5  font-bol  text-violet-300 ">
                {additionalText}
                <span className="text-slate-300 px-3">{text3}</span>
            </h3>

            
        </TextContainer>


    )
}
