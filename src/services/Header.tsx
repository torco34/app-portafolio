import { Link } from "../types/Header";
import { PerfilHeaderProps } from "../types/Header";
export const links: Link[] = [
  { path: "/home", label: "Inicio" },
  { path: "/proyecto", label: "Proyectos" },

  { path: "/study", label: "Estudios" },
  { path: "/about", label: "Sobre mi" },
];

export const PerfilHeaderProp: PerfilHeaderProps[] = [
  { imageSrc: "url_1", name: "Name 1", profession: "Profession 1" },
];
