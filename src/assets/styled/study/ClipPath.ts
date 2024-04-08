import styled from "styled-components";

export const theme = {
  dark: "#0A1D56",
  purple: "#492E87",
  aqua: "#37B5B6",
  yellow: "#F2F597",
};

export const ClipPathLeft = styled.h2`
  width: 100%;
  height: 90px; /* Ajusta la altura según necesites */
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
  border-image: linear-gradient(${theme.purple}); /* Gradiente para el borde */
  color: #0a1d56;

  border-image-slice: 25;
`;

export const ClipPathRight = styled.h2`
  width: 100%;
  height: 80px; /* Ajusta la altura según necesites */
  clip-path: polygon(0% 0%, 10% 0%, 0% 80%); /* Forma de clip-path */
  border: solid 5px;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(
    /* ${theme.purple},
    ${theme.purple},
    ${theme.purple} */
  ); /* Gradiente para el borde */
  color: #0a1d56;
  border-image-slice: 25;
`;
