import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Chat } from "../common/Chat";

import { ContainerImgFondo } from "../../assets/styled/styleUniverse/FondoImg";


interface IProps {
  children?: ReactNode;
}
export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
   
      <Footer />
    </>
  );
};
