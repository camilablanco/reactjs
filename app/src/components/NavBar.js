import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {

    return(
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Fragr</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Log In</Nav.Link>
                <NavDropdown title="Perfumes" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Mujer</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Hombre</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Unisex</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Buscar perfume"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
                </Form>
                <CartWidget />
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;

