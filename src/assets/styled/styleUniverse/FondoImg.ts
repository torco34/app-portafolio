import styled from "styled-components";

export const theme = {
  dark: "#0A1D56",
  purple: "#492E87",
  aqua: "#37B5B6",
  yellow: "#F2F597"
};

export const ContainerImgFondo = styled.div`
  position: relative;
  color: #333;
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, ${theme.dark}, ${theme.purple}, ${theme.aqua}, ${theme.yellow});
  background-size: 600% 600%; 
  animation: gradientAnimation 30s ease infinite; 
  background-position: center;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* Capa de opacidad para suavizar los colores */
  }
`;
