import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../services/Header";
export const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="h-screen flex items-start">
      <div className="flex flex-col ">
        {links.map((link: any, index: any) => (
          <NavLink key={index} to={link.path}>
            <p
              className={` text-slate-700 ${location.pathname === link.path && " text-slate-500 font-bold font-arial "} font-bold font-arial text-[#0f0e0e]"}  inline-block`}
            >
              {link.label}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
