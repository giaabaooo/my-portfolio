import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMessage, AiOutlineDownload } from "react-icons/ai";
import ChillCode from "../../Assets/ChillCode.mp4";
import pdf from "../../Assets/CV.pdf"; // Đảm bảo file CV.pdf của bạn nằm trong thư mục src/Assets/

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#ffffff", paddingTop: "120px" }}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1 style={{ paddingBottom: 15, fontSize: "3rem" }} className="heading">
                SYSTEM.OUT.PRINTLN <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{ fontSize: "3.5rem", fontWeight: "900" }}>
                HELLO, I'M <strong style={{ color: "#16f2b3" }}> NGUYỄN GIA BẢO</strong>
              </h1>

              <div style={{ padding: "30px 50px", textAlign: "left", fontSize: "1.8rem", color: "#ec4899" }}>
                <Type />
              </div>

              {/* KHU VỰC CHỨA 2 NÚT BẤM SONG SONG */}
              <div style={{ paddingLeft: 50, marginTop: "20px", display: "flex", gap: "20px", flexWrap: "wrap" }}>

                {/* NÚT 1: ACCESS SYSTEM (Cuộn xuống mục About) */}
                <ScrollLink to="about" smooth={true} duration={500}>
                  <Button
                    variant="outline-success"
                    style={{
                      borderColor: "#16f2b3",
                      color: "#16f2b3",
                      borderRadius: "0px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      padding: "10px 30px",
                      borderWidth: "2px"
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = "#16f2b3"; e.target.style.color = "#000"; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#16f2b3"; }}
                  >
                    <AiOutlineMessage style={{ marginRight: "8px" }} /> ACCESS SYSTEM
                  </Button>
                </ScrollLink>

                {/* NÚT 2: GET RESUME (Tải xuống file CV PDF trực tiếp) */}
                <Button
                  href={pdf}
                  target="_blank" // Mở ở tab mới để xem trực tiếp
                  rel="noreferrer"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#ec4899",
                    color: "#ec4899",
                    borderRadius: "0px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    padding: "10px 30px",
                    borderWidth: "2px"
                  }}
                  onMouseOver={(e) => { e.target.style.backgroundColor = "#ec4899"; e.target.style.color = "#fff"; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#ec4899"; }}
                >
                  <AiOutlineDownload style={{ marginRight: "8px" }} /> GET RESUME
                </Button>

              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: "flex", alignItems: "center" }}>
              <div style={{
                border: "2px solid #353a52",
                padding: "8px",
                backgroundColor: "#101123",
                boxShadow: "10px 10px 0px 0px rgba(236, 72, 153, 0.8)",
                width: "100%"
              }}>
                <video autoPlay loop muted playsInline style={{ width: "100%", outline: "none", border: "1px solid #16f2b3", filter: "contrast(110%)" }}>
                  <source src={ChillCode} type="video/mp4" />
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;