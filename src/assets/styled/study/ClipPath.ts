import styled from "styled-components";

export const ClipPathRight = styled.h2`
  width: 100%;
  height: 400px;
  clip-path: polygon(0% 0%, 30% 0%, 0% 80%);
  border: solid 20px;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(#37b5b6, #f2f597, #492e87);
  color: white;
  border-image-slice: 25;
`;
export const ContenedorDiv = styled.div`
  border-radius: 10px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  /* background-color: #000; */
  justify-content: space-between;
  align-items: center;
`;
export const ClipPathLeft = styled.h2`
  width: 100%;
  height: 700px;
  clip-path: polygon(100% 60%, 80% 100%, 100% 100%);
  border: solid 20px;

  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(#f2f597, #492e87, #fde767);
  color: white;
  border-image-slice: 3;
`;
export const TextContainer = styled.p`
  border-left: 2px solid #fff;
  padding-left: 8px;
  color: #fff;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(#f2f597, #37b5b6, #492e87);
  color: white;
  z-index: 1;
  border-image-slice: 3;
  padding-left: 20px;
`;
