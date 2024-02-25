import React, { ReactNode } from "react";
import ContactForm from "../form/ContactForm"; // Asegúrate de importar tu formulario de contacto
import { Animation } from "../common/Animation"; // Asegúrate de importar tu componente de animación

interface ContainerImgFondoProps {
  children?: ReactNode;
}

const ContainerImgFondo: React.FC<ContainerImgFondoProps> = ({ children }) => {
  return (
    <>
      <Animation
        title="CONTACTOS"
        subtitle="CONTÁCTEME POR ESTE MEDIO"
        text=""
      />
      <ContactForm />
    </>
    // <div className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 px-4 py-12">
    //   <div className="mx-auto relative border border-gray-600 space-y-5 pb-7 max-w-6xl grid grid-cols-2 gap-4 rounded-lg">

    //   </div>
    // </div>
  );
};

export default ContainerImgFondo;
