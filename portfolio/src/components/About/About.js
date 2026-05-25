import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiReact, DiNodejs, DiPython, DiJava, DiMongodb, DiGit } from "react-icons/di";
import { SiFlutter, SiPostgresql, SiFirebase, SiTailwindcss, SiDocker, SiFigma } from "react-icons/si";

function About() {
  return (
    // Ép backgroundImage: "none"
    <Container fluid className="about-section" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#fff", paddingTop: "120px", paddingBottom: "100px" }}>
      <style>
        {`
          @keyframes orbit { 100% { transform: rotate(360deg); } }
          @keyframes orbit-reverse { 100% { transform: rotate(-360deg); } }
          .skills-orbit-wrapper { position: relative; width: 100%; height: 600px; display: flex; justify-content: center; align-items: center; overflow: visible; }
          .orbit-center { width: 120px; height: 120px; background: #0d1224; border: 2px solid #ec4899; border-radius: 50%; display: flex; justify-content: center; align-items: center; z-index: 10; box-shadow: 0 0 30px rgba(236, 72, 153, 0.4); color: #fff; font-weight: 900; font-size: 1.2rem; letter-spacing: 1px; text-align: center; }
          .orbit-ring { position: absolute; border-radius: 50%; border: 1px dashed #353a52; display: flex; justify-content: center; align-items: center; }
          .orbit-ring.one { width: 260px; height: 260px; animation: orbit 15s linear infinite; }
          .orbit-ring.two { width: 400px; height: 400px; animation: orbit 25s linear infinite reverse; }
          .orbit-ring.three { width: 540px; height: 540px; animation: orbit 35s linear infinite; }
          .orbit-icon { position: absolute; width: 55px; height: 55px; background: #101123; border: 1px solid #16f2b3; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 28px; color: #16f2b3; box-shadow: 0 0 15px rgba(22, 242, 179, 0.2); transition: all 0.3s ease; }
          .orbit-ring.one .orbit-icon { animation: orbit-reverse 15s linear infinite reverse; }
          .orbit-ring.two .orbit-icon { animation: orbit-reverse 25s linear infinite normal; }
          .orbit-ring.three .orbit-icon { animation: orbit-reverse 35s linear infinite reverse; }
          .r1-i1 { top: -27px; left: calc(50% - 27px); } .r1-i2 { bottom: 35px; left: -10px; } .r1-i3 { bottom: 35px; right: -10px; }
          .r2-i1 { top: -27px; left: calc(50% - 27px); } .r2-i2 { bottom: -27px; left: calc(50% - 27px); } .r2-i3 { left: -27px; top: calc(50% - 27px); } .r2-i4 { right: -27px; top: calc(50% - 27px); }
          .r3-i1 { top: -27px; left: calc(50% - 27px); } .r3-i2 { top: 150px; right: -25px; } .r3-i3 { bottom: 20px; right: 100px; } .r3-i4 { bottom: 20px; left: 100px; } .r3-i5 { top: 150px; left: -25px; }
          .orbit-icon:hover { background: #16f2b3; color: #000; transform: scale(1.3); box-shadow: 0 0 25px #16f2b3; cursor: pointer; z-index: 20; }
        `}
      </style>

      <Container>
        <Row className="align-items-center">
          <Col md={5} className="about-text-section" style={{ paddingRight: "40px" }}>
            <h1 style={{ fontSize: "2.5em", fontWeight: "900", marginBottom: "30px" }}>
              TECH <span style={{ color: "#16f2b3" }}>ECOSYSTEM</span>
            </h1>
            <p style={{ fontSize: "1.2em", color: "#e5e7eb", lineHeight: "1.8" }}>
              My entire Tech Stack is designed for a single purpose: <b style={{ color: "#ec4899" }}>Building complete end-to-end applications.</b>
              <br /><br />
              From crafting dynamic user interfaces with <b style={{ color: "#16f2b3" }}>React / Flutter</b>, to handling complex data flows on the server with <b style={{ color: "#16f2b3" }}>Node.js / Java</b>, and managing robust architectures using <b style={{ color: "#16f2b3" }}>PostgreSQL / MongoDB</b>.
              <br /><br />
              Furthermore, I leverage <b style={{ color: "#ec4899" }}>Python</b> to develop AI modules (as seen in SkillMatch) and algorithmic trading solutions.
            </p>
          </Col>

          <Col md={7} style={{ display: "flex", justifyContent: "center" }}>
            <div className="skills-orbit-wrapper">
              <div className="orbit-center">TECH<br/>CORE</div>
              <div className="orbit-ring one">
                <div className="orbit-icon r1-i1"><DiReact /></div>
                <div className="orbit-icon r1-i2"><SiFlutter /></div>
                <div className="orbit-icon r1-i3"><SiTailwindcss /></div>
              </div>
              <div className="orbit-ring two">
                <div className="orbit-icon r2-i1"><DiNodejs /></div>
                <div className="orbit-icon r2-i2"><DiPython /></div>
                <div className="orbit-icon r2-i3"><DiMongodb /></div>
                <div className="orbit-icon r2-i4"><SiPostgresql /></div>
              </div>
              <div className="orbit-ring three">
                <div className="orbit-icon r3-i1"><DiJava /></div>
                <div className="orbit-icon r3-i2"><DiGit /></div>
                <div className="orbit-icon r3-i3"><SiDocker /></div>
                <div className="orbit-icon r3-i4"><SiFirebase /></div>
                <div className="orbit-icon r3-i5"><SiFigma /></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;