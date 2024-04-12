import React from "react";
import Modal from "react-bootstrap/Modal";
import { Buttons } from "./Buttons";
import { Img } from "../common/Img";
import { useThemeContext } from "../../usecontext/ ContextProvider";
import { CustomButton } from "./CustomButton";
import { BsGlobe2 } from "react-icons/bs";
interface ModalBoxProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  text: string;
  imageURL: string;
  onCloseText?: string;
  onViewProjectText?: string;
  onViewProjectClick?: () => void;
}

export const ModalBox: React.FC<ModalBoxProps> = ({
  show,
  onClose,
  title,
  text,
  imageURL,
  onCloseText = "Cerrar",
  onViewProjectText = "Ver proyecto",
  onViewProjectClick,
}) => {
  const { language, setSelectedLanguage, showComponent } =
    useThemeContext() ?? {
      language: [],
    };
  const handleLanguages = (text: any) => {
    if (setSelectedLanguage) {
      setSelectedLanguage(text);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton className="bg-violet-300 flex item-align">
        <Modal.Title className="">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showComponent ? (
          <>
            {language.map((items: any, index) => (
              <>
                <CustomButton
                  key={index}
                  text={items.text}
                  className=" flex bg-blue-200 text-stone-500 w-100 mt-3 h-30 rounded"
                  icon={<BsGlobe2 className=" w-6 h-6 text-stone-500" />}
                  onClick={() => handleLanguages(items.text)}
                  onMouseOut={() => console.log("Mouse fuera del botón")}
                />
              </>
            ))}
          </>
        ) : (
          <div className=" ">
            <Img src={imageURL} text="toto" title="mi foto" />
            <h4 className="pt-8">{text}</h4>
            <Buttons text={onCloseText} onClick={onClose} />
            {onViewProjectClick && (
              <Buttons text={onViewProjectText} onClick={onViewProjectClick} />
            )}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
