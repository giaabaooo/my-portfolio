import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg1 from "../../Assets/img.png";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";

function Home2() {
  return (
    // Bỏ borderTop, chuyển màu nền về #000000 để hòa làm một với file Home ở trên
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#fff", padding: "80px 0" }}>
      <Container id="home2">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: "900", letterSpacing: "1px" }}>
              <span style={{ color: "#ec4899" }}>//</span> ABOUT <span style={{ color: "#16f2b3" }}>ME</span>
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.25em", lineHeight: "1.8", color: "#e5e7eb", marginTop: "30px" }}>
              As a highly motivated Fresher Fullstack Developer, my objective is to leverage my solid foundation in web development and database management to build high-performance, user-centric applications. 
              <br /><br />
              I am eager to join a professional environment where I can contribute to impactful projects, quickly adapt to new technologies, and continuously advance my technical expertise to become a Senior Software Engineer.
              <br /><br />
              I believe in "Show, don't tell." I have practically applied my skills by building the architecture for <b style={{ color: "#16f2b3" }}>SkillMatch</b> (an AI-integrated recruitment platform).
            </p>
          </Col>
          
          <Col md={4} className="myAvtar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            {/* Main Cyberpunk Frame (Square, no blur radius shadow) */}
            <div style={{
              position: 'relative',
              backgroundColor: '#0d1224', // Deep Strong Black Surface Token
              border: '1px solid #353a52', // Muted Border Token
              padding: '12px', // Spacing Token 4
              borderRadius: '0', // Square edges for dứt khoát feel
              boxShadow: '10px 10px 0px 0px #ec4899', // HARD Neon Pink offset shadow - NO BLUR.
              maxWidth: '350px',
              width: '100%',
              transition: 'all 0.3s ease',
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '12px 12px 0px 0px #ec4899';}}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '10px 10px 0px 0px #ec4899';}}
            >
              {/* Minimalist Tech Corner Decorations (Neon Green) */}
              <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '20px', height: '2px', backgroundColor: '#16f2b3' }}></div>
              <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '2px', height: '20px', backgroundColor: '#16f2b3' }}></div>
              <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '2px', backgroundColor: '#16f2b3' }}></div>
              <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '2px', height: '20px', backgroundColor: '#16f2b3' }}></div>

              <img 
                src={myImg1} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  display: 'block',
                  width: '100%', 
                  height: 'auto',
                  border: '1px solid #16f2b3', // Neon Green inner border
                  borderRadius: '0', // keep square
                  // default style: terminal grayscale look
                  filter: 'grayscale(100%) contrast(120%)',
                  transition: 'filter 0.3s ease',
                }} 
                onMouseOver={(e) => { e.currentTarget.style.filter = 'grayscale(0%) contrast(110%)'; }} // Full color on hover
                onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%) contrast(120%)'; }} // Return to terminal look
              />
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social" style={{ textAlign: "center", marginTop: "80px" }}>
            <h2 style={{ fontWeight: "bold" }}>ESTABLISH <span style={{ color: "#ec4899" }}>CONNECTION</span></h2>
            <p style={{ color: "#a0aabf" }}>My inbox is always open. Feel free to connect with me via:</p>
            <ul className="home-about-social-links" style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px" }}>
              <li className="social-icons">
                <a href="https://github.com/giaabaooo" target="_blank" rel="noreferrer" style={{ color: "#16f2b3", fontSize: "2.5em", transition: "all 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.2)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"}>
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://facebook.com/ng.gia.baoooo/" target="_blank" rel="noreferrer" style={{ color: "#16f2b3", fontSize: "2.5em", transition: "all 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.2)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"}>
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a href="mailto:giabaobs35@gmail.com" target="_blank" rel="noreferrer" style={{ color: "#16f2b3", fontSize: "2.5em", transition: "all 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.2)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"}>
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;