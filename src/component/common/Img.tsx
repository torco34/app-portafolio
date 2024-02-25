import { IPropsImg } from "../../Interface"

export const Img = ({ src, text}: IPropsImg) => {
    return (
      <img
        className="object-cover w-full h-full"
        src={src}
        alt={text}
      
      />
    );
   

}
