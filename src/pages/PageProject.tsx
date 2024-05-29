import { ServiceCard } from "../components/proyectos/ServiceCard";
import { ProyectosWeb } from "../services/Projectosweb";
import "./css/proyectos.css";
export const PageProject = () => {
  return (
    <div className=" flex  items-center justify-center h-screen">
      <div className="mx-auto proyectos grid max-w-6xl md:grid-cols-3 gap-2">
        {ProyectosWeb.map((proyecto, index) => (
          <ServiceCard
            key={index}
            name={proyecto.nombre}
            profession={proyecto.descripcion}
            imageUrl={proyecto.imagen}
            description={proyecto.descripcion}
            date={proyecto.tecnologias.join(", ")}
            buttonText="Ver más"
            icons={proyecto.icons || []}
          />
        ))}
      </div>
    </div>
  );
};
