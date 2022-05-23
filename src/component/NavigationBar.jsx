import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";

function NavigationBar() {
  return (
    <div>
      <Navbar expand="md" className="bg-dark">
        <Container
          style={{
            fontFamily: "Roboto",
            fontWeight: "bolder",
          }}
        >
          <Navbar.Brand href="/" className="text-white">
            Mukhammad Abdul Mukhid
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-secondary"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#about" className="text-white">
                AboutMe
              </Nav.Link>
              <Nav.Link href="#education" className="text-white">
                Education
              </Nav.Link>
              <Nav.Link href="#skills" className="text-white">
                Skills
              </Nav.Link>
              <Nav.Link href="#porto" className="text-white">
                Portofolio
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
