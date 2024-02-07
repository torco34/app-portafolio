import { IPropsTexto } from "../../Interface"
import { TextContainer } from "../../assets/styled/common/Texto"

export const Texto = ({ title, text, text1, text2, text3, subtitles, additionalText }: IPropsTexto) => {
    return (
        <TextContainer>
            <h2 className="px-5 text-4xl pb- font-bold text-slate-300 ">{title}</h2>
            <h3 className=" text-xl px-5  font-bol transform hover:scale-105 transition-transform text-amber-100 ">{subtitles} <span className="text-slate-300 px-3">{text1}</span> </h3>
            <h3 className="px-5 text-xl font-bol transform hover:scale-105 transition-transform text-teal-300  ">{text} <span className="text-slate-300 px-3">{text2}</span> </h3>
            <h3 className="px-5 text-xl font-bol transform hover:scale-105  transition-transform text-violet-300 ">
                {additionalText}
                <span className="text-slate-300 px-3">{text3}</span>
            </h3>


        </TextContainer>


    )
}
