import styled from "styled-components";

export const theme = {
  dark: "#0A1D56",
  purple: "#492E87",
  aqua: "#37B5B6",
  yellow: "#F2F597",
};

export const TextContainer = styled.div`
  border-left: 5px solid ${theme.dark}; /* Color del borde */
  color: ${theme.dark}; /* Color del texto */
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    ${theme.yellow},
    ${theme.aqua},
    ${theme.purple}
  ); /* Utilizamos los colores de la paleta */
  z-index: 1;
  margin-top: 3rem;
  border-image-slice: 3;
  margin-left: 0rem;
  font-family: sans-serif;
 
  
 

`;

export const Htres = styled.h3`
  color: "#F2F597";
  font-size: calc(0.8em + 0.7vw);
 
`;
