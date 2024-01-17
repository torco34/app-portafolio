
import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';



export const Header = () => {
    return (

        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#">Portafolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "

                            navbarScroll
                        >
                            <Link to="/">Home</Link>
                            <Link to="study">Study</Link>
                            <Link to="proyecto">Projects</Link>

                            <Link to="about">About</Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

            <Outlet />
        </>




    )
}
