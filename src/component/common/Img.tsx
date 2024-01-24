import { IPropsImg } from "../../Interface"

export const Img = ({ src, text}: IPropsImg) => {
    return <img src={src} alt={text} width="100%" height="850vh" />;
   

}
