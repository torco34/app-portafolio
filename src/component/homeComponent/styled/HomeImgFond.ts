
import styled from "styled-components";

export const StyledDiv = styled.div`
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
    background-color: rgba(0, 0, 0, 0.8); 

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
    background: linear-gradient(#3652AD, #FE7A36, #3652AD);
    -webkit-background-clip: text;
`;
