import { Link, Outlet } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavStyled, PortfolioText } from "./styled/Header";

export const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="show bg-dark ">
                <Container>
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
                                <Link to="about">Contact</Link>
                            </NavStyled>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark" className="bg-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
};
