import styled from "styled-components";

export const ClipPathRight = styled.h2`
  width: 100%;
  height: 600px;
  clip-path: polygon(0% 0%, 24% 0%, 0% 100%);
  border: solid 3px;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(#37b5b6, #f2f597, #492e87);
  color: white;
  border-image-slice: 25;
 
`;
export const ContenedorDiv = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;


`;

export const ClipPathLeft = styled.h2`
  width: 100%;
  height: 1000px;
  clip-path: polygon(100% 30%, 80% 100%, 100% 200%);
  border: solid 14px;
  font-weight: bold;
  display: flex;
  position: relative;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(#37b5b6, #492e87, #fde767, #37b5b6);
  color: white;
  border-image-slice: 3;
`;
export const TextBienvenida = styled.h2`
  width: 76%;
  text-align: center;
  z-index: 1;
  font-weight: bold;
  font-family: system-ui;
  color: transparent;
  font-size: calc(2em + 2vw);
  background: linear-gradient(#492e87, #37b5b6);
  -webkit-background-clip: text;
`;
