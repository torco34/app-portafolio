import { IPropsTexto } from "../../Interface";
import { TextContainer, Htres } from "../../assets/styled/common/Texto";

export const Texto = ({
  title,
  text,
  text1,
  text2,
  text3,
  subtitles,
  additionalText,
}: IPropsTexto) => {
  return (
    <TextContainer>
      <Htres>{title}</Htres>
      <Htres
        className=" md:font-serif px-5 font-bold transform hover:scale-105 transition-transform"
        style={{ color: "#F2F597" }}
      >
        {subtitles} <span className="t px-3 text-gray-700">{text1}</span>{" "}
      </Htres>
      <Htres className="px-5 text-xl md:font-serif text-cyan-700 font-bold transform hover:scale-105 transition-transform">
        {text} <span className="text-gray-700 px-3">{text2}</span>{" "}
      </Htres>
      <Htres className="px-5 text-xl md:font-serif text-violet-900 font-bold transform hover:scale-105 transition-transform">
        {additionalText} <span className="text-gray-700 px-3">{text3}</span>
      </Htres>
    </TextContainer>
  );
};
