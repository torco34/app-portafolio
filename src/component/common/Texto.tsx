import { IPropsTexto } from "../../Interface"
import { TextContainer } from "../../assets/styled/common/Texto"
export const Texto = ({ title, text, titles }: IPropsTexto) => {
    return (
        <TextContainer>
            <h2 className="px-5  font-semibold  text-gray-500">{titles}</h2>
            <h3 className="px-5  text-gray-400 ">{title}</h3>
            <h3 className="px-5 leading-8  text-gray-400 "> {text}</h3>
        </TextContainer>


    )
}
