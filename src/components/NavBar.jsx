import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    /*     <Navbar sticky="top" bg="myBlue" expand="md" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" classNameNameName="text-white">
          The Movie Database
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classNameNameName="ms-auto text-center">
            <Nav.Link as={NavLink} end to="/" classNameNameName="text-white">
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

            <Nav.Link as={NavLink} end to="/" classNameNameName="text-white">
              Actors
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/" classNameNameName="text-white">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */

    <header className="bg-gray-900">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link as={NavLink} end to="/" className="text-cyan-300">
              The Movie Database 🍿
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav className="md:block">
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  as={NavLink}
                  end
                  to="/now_playing"
                  className="text-white transition duration-300 hover:text-cyan-300"
                >
                  Movies
                </Link>
                <Link
                  as={NavLink}
                  end
                  to="/genres"
                  className="text-white transition duration-300 hover:text-cyan-300"
                >
                  Genres
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
