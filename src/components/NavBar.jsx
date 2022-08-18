import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="success" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          The Movie Database
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="ms-auto">
            <Nav.Link as={NavLink} end to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/popular_movies">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/">
              Actors
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
