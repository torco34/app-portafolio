import React from "react";
import Modal from "react-bootstrap/Modal";
import { Buttons } from "./Buttons";
import { Img } from "../common/Img";

interface ModalBoxProps {
  show: boolean;
  onClose: () => void;
  title: string;
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
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" ">
          <Img src={imageURL} text="foto" title="" />
          <h4 className="pt-8">{text}</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Buttons text={onCloseText} onClick={onClose} />
        {onViewProjectClick && (
          <Buttons text={onViewProjectText} onClick={onViewProjectClick} />
        )}
      </Modal.Footer>
    </Modal>
  );
};


