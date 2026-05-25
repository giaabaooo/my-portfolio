import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineProject,
} from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{
        backgroundColor: navColour ? "#0a0a0a" : "transparent",
        borderBottom: navColour ? "1px solid #16f2b3" : "none",
        transition: "all 0.3s ease-out",
        paddingTop: navColour ? "10px" : "20px",
        paddingBottom: navColour ? "10px" : "20px",
        backdropFilter: "none", // Loại bỏ hoàn toàn blur để tối ưu FPS
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span style={{ 
            color: "#16f2b3", 
            fontWeight: "900", 
            fontSize: "1.8rem", 
            letterSpacing: "3px",
            textShadow: "0 0 10px rgba(22, 242, 179, 0.3)"
          }}>
            GIA BẢO.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{ border: "1px solid #16f2b3", borderRadius: "0" }}
        >
          <span style={{ backgroundColor: "#16f2b3" }} className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink to="home" smooth={true} duration={500} offset={-100} onClick={() => updateExpanded(false)} className="nav-link" style={{ cursor: "pointer", color: "#fff", fontWeight: "600" }}>
                <AiOutlineHome style={{ marginBottom: "2px", color: "#16f2b3" }} /> Home
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink to="about" smooth={true} duration={500} offset={-40} onClick={() => updateExpanded(false)} className="nav-link" style={{ cursor: "pointer", color: "#fff", fontWeight: "600" }}>
                <AiOutlineUser style={{ marginBottom: "2px", color: "#ec4899" }} /> About me
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-40} onClick={() => updateExpanded(false)} className="nav-link" style={{ cursor: "pointer", color: "#fff", fontWeight: "600" }}>
                <AiOutlineProject style={{ marginBottom: "2px", color: "#16f2b3" }} /> Projects
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink to="education" smooth={true} duration={500} offset={-40} onClick={() => updateExpanded(false)} className="nav-link" style={{ cursor: "pointer", color: "#fff", fontWeight: "600" }}>
                <MdOutlineSchool style={{ marginBottom: "2px", color: "#ec4899", fontSize: "1.15rem" }} /> Education
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-40} onClick={() => updateExpanded(false)} className="nav-link" style={{ cursor: "pointer", color: "#fff", fontWeight: "600" }}>
                <AiOutlineMessage style={{ marginBottom: "2px", color: "#16f2b3" }} /> Contact
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;