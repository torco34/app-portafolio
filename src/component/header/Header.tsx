import { Link, Outlet, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavStyled, PortfolioText } from "./styled/Header";
import { Search } from "./Search";
import { useThemeContext } from "../../usecontext/ ContextProvider";
import { Hooks } from "../../hook/Hooks";
import { BsGlobe2, BsFillCaretDownFill } from "react-icons/bs";
import { Language } from "./Language";
import { TextLanguage } from "./TextLanguage";
import { CustomButton } from "../common/CustomButton";
import { ModalBox } from "../common/ModalBox";
import { useState } from "react";
export const Header = () => {

  const { query, setQuery, selectedLanguage } = useThemeContext() ?? {
    query: "",
  };
  const history = useNavigate();
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    history(`${searchQuery}`);
  };
  const { showText, setShowText } = Hooks();
  console.log(showText);
 
    const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewProjectClick = () => {
    // Lógica para manejar el clic en "Ver proyecto"
  };

  const handleShow = () => {
    setShowText(!showText);
  };
  return (
    <>
      <Navbar expand="lg" className="shadow bg-dark ">
        <Container className=" space-x-10">
          <Navbar.Brand>
            <PortfolioText>Portafolio</PortfolioText>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
              <NavStyled>
                <Link to="/">Home</Link>
                <Link to="study">Study</Link>
                <Link to="proyecto">Projects</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
              </NavStyled>
            </Nav>

            <Search onSearch={handleSearch} query={query} />
            <div className="px-5 cursor-pointer  ">
              <CustomButton
                text={selectedLanguage}
                className="bg-slate-100 flex text-stone-500 w-120 h-19 rounded"
                icon={<BsGlobe2 className=" w-6 h-6 text-stone-500" />}
                onClick={handleShowModal}
                onMouseOut={() => console.log("Mouse fuera del botón")}
              />
              <ModalBox
                show={showModal}
                onClose={handleCloseModal}
                title="Título del Modal"
                text="Texto del Modal"
                imageURL="URL de la imagen"
                onViewProjectText="Ver proyecto"
                onViewProjectClick={handleViewProjectClick}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
