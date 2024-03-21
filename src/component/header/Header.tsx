import { Link, Outlet, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavStyled, PortfolioText } from "./styled/Header";
import { Search } from "./Search";
import { useThemeContext } from "../../usecontext/ ContextProvider";
import { Hooks } from "../../hook/Hooks";

import { Language } from "./Language";
import { TextLanguage } from "./TextLanguage";
export const Header = () => {
  const { showText } = Hooks();
  console.log(showText)
  const { query, setQuery } = useThemeContext() ?? { query: "" };
  const history = useNavigate();
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    history(`${searchQuery}`);
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
          </Navbar.Collapse>
          <Language />
          {/* <BsGlobe2 className=" w-6 h-6 text-stone-300"  /> */}
        </Container>
      </Navbar>
     
      {showText && (
        <>
          <TextLanguage />
        </>
      )}
      <Outlet />
    </>
  );
};
