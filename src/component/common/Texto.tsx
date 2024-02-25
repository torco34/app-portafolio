import { IPropsTexto } from "../../Interface";
import { TextContainer } from "../../assets/styled/common/Texto";

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
      <h2 className="px-5 text-xl pb- font-bold" style={{ color: "#F2F597" }}>
        {title}
      </h2>
      <h3
        className="text-xl md:font-serif px-5 font-bold transform hover:scale-105 transition-transform"
        style={{ color: "#F2F597" }}
      >
        {subtitles} <span className="text-gray-600 px-3">{text1}</span>{" "}
      </h3>
      <h3 className="px-5 text-xl md:font-serif text-cyan-700 font-bold transform hover:scale-105 transition-transform">
        {text} <span className="text-gray-600 px-3">{text2}</span>{" "}
      </h3>
      <h3 className="px-5 text-xl md:font-serif text-violet-900 font-bold transform hover:scale-105 transition-transform">
        {additionalText} <span className="text-gray-600 px-3">{text3}</span>
      </h3>
    </TextContainer>
  );
};
