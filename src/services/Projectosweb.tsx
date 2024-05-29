import { ProyectoWebProps } from "../types/ProyectoWeb";
import img from "../assets/img/img1.jpg";
import proyec1 from "../assets/img/proyec1.png";
export const ProyectosWeb: ProyectoWebProps[] = [
  {
    nombre: "Tienda Online de Ropa",
    descripcion:
      "Desarrollo de una tienda virtual para venta de ropa y accesorios.",
    imagen: img,
    tecnologias: ["React", "Node.js", "MongoDB"],
    enlace: "https://example.com/tienda-online",
    icons: ["icono1.jpg", "icono2.jpg"], // Ejemplo de incluir icons en un objeto específico
  },
  {
    nombre: "Blog Personal",
    descripcion:
      "Creación de un blog personal para compartir experiencias y conocimientos.",
    imagen: proyec1,
    tecnologias: ["WordPress", "PHP", "MySQL"],
    enlace: "https://example.com/blog-personal",
  },

  {
    nombre: "Blog Personal",
    descripcion:
      "Creación de un blog personal para compartir experiencias y conocimientos.",
    imagen: "https://example.com/proyecto2.jpg",
    tecnologias: ["WordPress", "PHP", "MySQL"],
    enlace: "https://example.com/blog-personal",
  },
  {
    nombre: "Blog Personal",
    descripcion:
      "Creación de un blog personal para compartir experiencias y conocimientos.",
    imagen: "https://example.com/proyecto2.jpg",
    tecnologias: ["WordPress", "PHP", "MySQL"],
    enlace: "https://example.com/blog-personal",
  },
];
