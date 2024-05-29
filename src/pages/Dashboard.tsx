import React from "react";
import { PerfilHeader } from "../components/sidebar/PerfilHedder";
import img4 from "../assets/img/mi.jpg";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Dashboard: React.FC = () => {
  return (
    <>
      <div className="fixed  left-0 bg-[#F0F0F0] text-zinc-600 shadow-lg h-screen flex-col w-1/6 flex items-center justify-center ">
        <PerfilHeader
          imageSrc={img4}
          name="Torcoroma Arias"
          profession="Desarrolladora web  "
          profesionName="Front-End"
        />
        <Sidebar />
      </div>
    </>
  );
};
