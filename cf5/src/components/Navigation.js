import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useApp } from "../App";
import { language_code, switch_texts } from "../utils/languages";

function Navigation() {
  const { language, darkMode, setLanguage } = useApp();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2>CF5</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact to="/">
              {switch_texts.homepage[language]}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category">
              {switch_texts.category[language]}
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/element">
                Elements
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button
              variant="outline"
              onClick={() =>
                setLanguage(
                  language === language_code.en
                    ? language_code.vi
                    : language_code.en
                )
              }
              size="sm"
            >
              <Image src={`/assets/img/${language}.png`}></Image>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
