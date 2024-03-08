import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Buttons } from "../common/Buttons";
import { Hooks } from "../../hook/Hooks";
import { useThemeContext } from "../../usecontext/ ContextProvider";
import { Img } from "../common/Img";
import img1 from "../../assets/img/img1.jpg";
export const Project = () => {
  const { buttonTexts } = useThemeContext() ?? { buttonTexts: [] };
  const { selectedText, setSelectedText, show, setShow } = Hooks();
  const handleClose = () => setShow(false);
  const handleShow = (text: any) => {
    setShow(true);
    setSelectedText(text);
  };
  console.log(selectedText);
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
            <Modal.Title>{selectedText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className=" ">
            <Img src={img1} text="foto" title="" />
            lorem*24 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Debitis repellendus beatae similique accusantium modi possimus animi
            exercitationem et illo assumenda, dolor distinctio a deserunt cum
            at? Minima dicta ullam molestiae! Accusantium impedit repudiandae
            molestias nostrum perferendis saepe aliquam neque cumque excepturi
            praesentium aperiam sit, id architecto amet dolore sed dolor tempora
            modi, alias corrupti et a ex odit molestiae? Maiores? Tempora magni
            alias id officia quam asperiores saepe voluptatibus omnis at non
            pariatur, quibusdam earum, debitis sit. Quod optio tempora quaerat
            tempore vitae impedit itaque voluptatem, quisquam quo incidunt
            architecto. Itaque voluptatem ipsa, odio fuga excepturi magni ullam
            pariatur soluta eius sint deleniti rerum facere quos ad non
            corporis! Rerum quo reiciendis excepturi officiis ipsam. Officia
            omnis quaerat esse nemo beatae. A at consequatur, sit velit
            perferendis fugiat vero ipsa, ut voluptate libero corporis! Quas
            facere fuga aut porro delectus amet hic aspernatur quam non. Animi
            voluptates totam alias voluptas enim, ipsam vero consequuntur velit
            eaque a adipisci accusamus blanditiis incidunt autem neque quis
            reiciendis nihil. Maiores nemo nisi ab odio distinctio veniam eum
            repellat!
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
