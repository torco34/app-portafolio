import { IPropsImg } from "../../Interface"

export const CarouselText = ({ title, text, }: IPropsImg) => {
    return (
        <>
            <h5>{title}</h5>
            <p> {text}</p>
        </>
    )
}
