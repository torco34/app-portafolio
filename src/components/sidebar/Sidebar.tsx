import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../services/Header";
import classNames from "classnames";
export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="h-screen  w-10/12 ">
      <div className="flex flex-col mx-9 my-4 ">
        {links.map((link: any, index: any) => (
          <NavLink key={index} to={link.path}>
            <p
              className={classNames(
                "text-[#E78895] font-bold font-arial inline-block transition-transform duration-300 ease-in-out hover:text-[#E78895]",
                {
                  "text-[#E78895]  font-bold": location.pathname === link.path,
                  "text-zinc-800": location.pathname !== link.path,
                }
              )}
            >
              {link.label}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
