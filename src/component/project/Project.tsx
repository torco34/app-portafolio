import Modal from "react-bootstrap/Modal";
import { Buttons } from "../common/Buttons";
import { Hooks } from "../../hook/Hooks";
import { useThemeContext } from "../../usecontext/ ContextProvider";
import { Img } from "../common/Img";
import img1 from "../../assets/img/img1.jpg";

import { BsCodeSlash } from "react-icons/bs";
import { ModalBox } from "../common/ModalBox";
import { useState } from "react";
import { CustomButton } from "../common/CustomButton";

export const Project = () => {
  const { buttonTexts, projectNames, setProjectNames } = useThemeContext() ?? {
    buttonTexts: [],
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (text: string) => {
    if (setProjectNames) {
      setProjectNames(text);
    }
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewProjectClick = () => {
    // Lógica para manejar el clic en "Ver proyecto"
  };

  return (
    <div className="mx-auto max-w-6xl ">
      <>
        {buttonTexts.map((buttonText, index) => (
          <CustomButton
            key={index}
            text={buttonText.text}
            className=" flex text-purple-950 w-120 h-19 rounded"
            icon={
              <BsCodeSlash className=" w-9 h-9  rounded text-blue-700 text-4xl" />
            }
            onClick={() => handleShowModal(buttonText.text)}
            onMouseOut={() => console.log("Mouse fuera del botón")}
          />
        ))}
        <ModalBox
          show={showModal}
          onClose={handleCloseModal}
          title={projectNames}
          text={"estilos"}
          imageURL={img1}
          onViewProjectText="Ver proyecto"
          onViewProjectClick={handleViewProjectClick}
        />
      </>
    </div>
  );
};
