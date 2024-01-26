import styled from "styled-components";

export const ContainerImgFondo = styled.div`
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
