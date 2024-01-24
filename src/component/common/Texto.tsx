import { IPropsImg } from "../../Interface"

export const Texto = ({ title, text, titles }: IPropsImg) => {
    return (
        <>
        <h2>{titles}</h2>
            <h5>{title}</h5>
            <p> {text}</p>
        </>
    )
}
