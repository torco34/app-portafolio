import styled from "styled-components";
export const theme = {
  dark: "#0A1D56",
  purple: "#492E87",
  aqua: "#37B5B6",
  yellow: "#F2F597",
};
import { keyframes } from "styled-components";
export const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`;
export const TitleH1 = styled.h1`
  font-weight: bold;
  font-family: system-ui;
  line-height: 72px;
  color: transparent;
  font-size: calc(2em + 2vw);
  background: linear-gradient(#37b5b6, #f2f597, #492e87);
  -webkit-background-clip: text;
`;

export const ClipPathRight = styled.h2`
  width: 100%;
  height: 100px; /* Ajusta la altura según necesites */
  clip-path: polygon(0% 0%, 10% 0%, 0% 80%); /* Forma de clip-path */
  border: solid 5px;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(
    ${theme.purple},
 
  ); /* Gradiente para el borde */
  color: #0a1d56;
  border-image-slice: 25;
`;

export const ClipPathLeft = styled.h2`
  width: 100%;
  height: 100px; /* Ajusta la altura según necesites */
  clip-path: polygon(
    100% 10%,
    80% 50%,
    100% 140%
  ); /* Mantenemos la misma forma clip-path */
  border: solid 5px;
  font-weight: bold;
  display: flex;
  position: relative;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(
    ${theme.purple},
  
  ); /* Gradiente para el borde */
  color: #0a1d56;
  border-image-slice: 25;
`;
export const colorChange = keyframes`
  0% {
    color: #f00;
  }
  50% {
    color: #0f0;
  }
  100% {
    color: #00f;
  }
`;

export const AnimatedText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    animation: ${colorChange} 3s infinite;
  }
`;
