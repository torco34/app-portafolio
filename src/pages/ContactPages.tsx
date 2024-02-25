import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg";
import { Animation } from "../component/common/Animation";
import ContactForm from "../component/form/ContactForm";
import LoginForm from "../component/form/LoginForm";

export const ContactPages = () => {
  return (
    <ContainerImgFondo>
      <div className="mx-auto relative borde space-y-5 pb-7 max-w-6xl grid grid-cols-2  gap-4">
        <Animation title="CONTACTOS" subtitle="CONTÁCTEME POR ESTE MEDIO" text="" />
        <ContactForm/>
      </div>
    </ContainerImgFondo>
  );
};
