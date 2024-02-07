import styled from "styled-components";

export const ClipPathRight = styled.h2`
  width: 100%;
  height: 1000px;
  clip-path: polygon(0% 0%, 18% 0%, 0% 80%);
  border: solid 20px;
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
  clip-path: polygon(100% 20%, 80% 70%, 100% 200%);
  border: solid 20px;
  font-weight: bold;
  display: flex;
  position: relative;
  -webkit-background-clip: text;
  background-clip: text;
  border-image: linear-gradient(#37b5b6, #492e87, #fde767, #37b5b6);
  color: white;
  border-image-slice: 3;
  /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
  /* border: 2px solid rgba(255, 255, 255, 0.2); */
`;

