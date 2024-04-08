import styled from "styled-components";

export const theme = {
  dark: "#0A1D56",
  purple: "#492E87",
  aqua: "#37B5B6",
  yellow: "#F2F597",
};

export const SubTitle = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: calc(0.7em + 0.7vw);
  position: relative;
  top: 0px;
   padding-left: 20px;
  color: #492e87; /* Color del texto */
`;

export const TextBienvenida = styled.h2`
  position: relative;
  padding-left: 20px;
  top: -50px;
  z-index: 1;
  font-weight: bold;
  color: transparent;
  font-size: calc(1.4em + 1vw);
  background: linear-gradient(
    to right,
    ${theme.purple},
    ${theme.aqua},
    ${theme.purple}
  ); /* Utilizamos los colores de la paleta */
  -webkit-background-clip: text;
`;
export const Text = styled.span`
  display: flex;
  z-index: 1;
  font-weight: bold;
  color: #51829b;
  position: absolute;
 padding-left: 20px;
  font-size: calc(0.7em + 0.6vw);
`;
