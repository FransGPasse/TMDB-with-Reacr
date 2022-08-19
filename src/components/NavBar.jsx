import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="myBlue" expand="md" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          The Movie Database
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={NavLink} end to="/" className="text-white">
              Home
            </Nav.Link>
            <NavDropdown title="Movies">
              <NavDropdown.Item as={NavLink} end to="/popular_movies">
                Popular movies
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} end to="/now_playing">
                Now playing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} end to="/" className="text-white">
              Actors
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/" className="text-white">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
