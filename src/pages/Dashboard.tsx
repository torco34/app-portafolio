import React from "react";
import { PerfilHeader } from "../components/header/PerfilHedder";
import img4 from "../assets/img/mi.jpg";
import { Sidebar } from "../components/header/Sidebar";
export const Dashboard: React.FC = () => {
  return (
    <>
      <div className="fixed left-0 bg-zinc-100 shadow-lg h-screen flex-col w-1/6 flex items-center justify-center ">
        <PerfilHeader
          imageSrc={img4}
          name="Torcoroma Arias"
          profession="Desarrolladora web"
        />
        <Sidebar />
      </div>
      <div className="bg-primary"></div>
    </>
  );
};
