import styled from "styled-components";

export const theme = {
  dark: "#0A1D56",
  purple: "#492E87",
  aqua: "#37B5B6",
  yellow: "#F2F597"
};

export const ResponsiveText = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 72px;
  margin: 0 3rem;
  font-weight: bold;
  font-size: calc(1em + 1vw);
  color: white; /* Color del texto */
`;

export const TextBienvenida = styled.h2`
  position: relative;
  width: 100%;
  text-align: center;
  z-index: 1;
  font-weight: bold;
   /* font-family: 'Roboto', sans-serif; */
  color: transparent;
  font-size: calc(2em + 2vw);
  background: linear-gradient(to right, ${theme.purple}, ${theme.aqua}, ${theme.purple}); /* Utilizamos los colores de la paleta */
  -webkit-background-clip: text;
`;



