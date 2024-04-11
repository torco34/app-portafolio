import Modal from "react-bootstrap/Modal";
import { Buttons } from "../common/Buttons";
import { Hooks } from "../../hook/Hooks";
import { useThemeContext } from "../../usecontext/ ContextProvider";
import { Img } from "../common/Img";
import img1 from "../../assets/img/img1.jpg";
import { IPropsModal } from "../../Interface";

export const Project = () => {
  const { buttonTexts, projectNames, setProjectNames } = useThemeContext() ?? {
    buttonTexts: [],
  };

  const { show, setShow } = Hooks();
  const handleClose = () => setShow(false);
  const handleShow = (text: any) => {
    setShow(true);
    setProjectNames(text);
  };

  return (
    <div className="mx-auto max-w-6xl ">
      <>
        {buttonTexts.map((buttonText, index) => (
          <Buttons
            key={index}
            text={buttonText.text}
            onClick={() => handleShow(buttonText.text)}
          />
        ))}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{projectNames}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className=" ">
              <Img src={img1} text="foto" title="" />
              <h4 className="pt-8">
                lorem*24 Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Debitis repellendus beatae similique accusantium modi
                possimus animi exercitationem et illo assumenda, dolor
                distinctio a deserunt cum
              </h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Buttons text="Cerrar" onClick={handleClose} />
            <Buttons text="Ver proyecto" onClick={handleClose} />
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
