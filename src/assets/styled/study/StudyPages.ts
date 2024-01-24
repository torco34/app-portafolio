import styled from "styled-components";

export const ContainerPageStudy = styled.div`
  position: relative;
  color: #333;
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 100%;
  background-image: url("/src/assets/img/imgFondo.jpg");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;
export const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  z-index: 5;
`;
export const TitleH1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  font-family: system-ui;
  color: transparent;
  background: linear-gradient(#37b5b6, #f2f597, #492e87);
  -webkit-background-clip: text;
`;