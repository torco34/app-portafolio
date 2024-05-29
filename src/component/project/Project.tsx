import { useThemeContext } from "../../usecontext/ ContextProvider";
import img1 from "../../assets/img/img1.jpg";
import { BsCodeSlash } from "react-icons/bs";
import { ModalBox } from "../common/ModalBox";
import { useState } from "react";
import { CustomButton } from "../../components/common/CustomButton";
import { NameProjects } from "../common/NameProjects";

export const Project = () => {
  const { buttonTexts, projectNames, setProjectNames, setShowComponent } =
    useThemeContext() ?? {
      buttonTexts: [],
    };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (text: string) => {
    if (setProjectNames) {
      setProjectNames(text);
      setShowModal(true);
    }
    if (setShowComponent) {
      setShowModal(true);
      setShowComponent(false);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewProjectClick = () => {
    // Lógica para manejar el clic en "Ver proyecto"
    window.location.href = "https://torco34.github.io/peaku-templete-first/";
  };

  return (
    <div className="mx-auto max-w-6xl ">
      <>
        <NameProjects />
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
          text={`Este proyecto esta hecho con react ${projectNames}`}
          imageURL={img1}
          onViewProjectText="Ver proyecto"
          onViewProjectClick={handleViewProjectClick}
        />
      </>
    </div>
  );
};
