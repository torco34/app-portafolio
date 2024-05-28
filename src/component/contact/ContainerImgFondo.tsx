import React, { ReactNode } from "react";
import ContactForm from "../form/ContactForm"; // Asegúrate de importar tu formulario de contacto
import { Animation } from "../common/Animation"; // Asegúrate de importar tu componente de animación

interface ContainerImgFondoProps {
  children?: ReactNode;
}

const ContainerImgFondo: React.FC<ContainerImgFondoProps> = () => {
  return (
    <>
      <Animation
        title="CONTACTOS"
        subtitle="CONTÁCTEME POR ESTE MEDIO"
        text=""
      />
      <ContactForm />
    </>
  );
};

export default ContainerImgFondo;
