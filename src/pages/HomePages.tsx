import { ServiceCard } from "../components/home/ServiceCard";
import "./css/home.css";
export const HomePages = () => {
  return (
    <>
      <div className="bg-[#fff]  fondo-pagina  h-screen">
        <div>
          <ServiceCard
            name="Torcoroma Arias Desarrolladora web Front-End "
            profession="Desarrolladora web Front-End"
            description="Apasionada por la tecnología y el desarrollo web, con experiencia en React y Tailwind CSS."
          />
        </div>
      </div>
    </>
  );
};
