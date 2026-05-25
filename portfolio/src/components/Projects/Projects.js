import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import skillMatchImg from "../../Assets/Projects/SkillMatch.png"; // Đảm bảo đường dẫn ảnh chính xác
import healthMateImg from "../../Assets/Projects/HealthMate.png"; // Hãy chép ảnh minh họa Healthmate của bạn vào đây

function Projects() {
  return (
    <Container fluid className="project-section" id="projects" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#fff", paddingTop: "120px", paddingBottom: "100px" }}>
      <Container>
        <h1 className="project-heading" style={{ fontSize: "2.5em", fontWeight: "900", textAlign: "center" }}>
          FEATURED <strong style={{ color: "#16f2b3" }}>PROJECTS</strong>
        </h1>
        <p style={{ color: "#e5e7eb", textAlign: "center", marginBottom: "50px" }}>
          Interact with the live deployments or inspect underlying system documentation.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", gap: "30px" }}>
          
          {/* DỰ ÁN 1: SKILLMATCH (CÓ CẢ LIVE WEB VÀ CASE STUDY) */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={skillMatchImg}
              title="SkillMatch"
              description="An AI-driven recruitment and training platform built with React, Node.js, and MongoDB. Engineered for intelligent candidate assessment and anti-cheating monitoring during test cycles. Integrates a flexible database layer alongside the PayOS payment gateway."
              liveLink="https://skillmatch-k7gy.onrender.com"
              detailLink="/project/skillmatch"
            />
          </Col>

          {/* DỰ ÁN 2: HEALTHMATE (CHỈ CÓ LIVE WEB - KHÔNG HIỆN NÚT CASE STUDY) */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={healthMateImg}
              title="Healthmate"
              description="A comprehensive health management application developed using React, Node.js, and MongoDB. Features an automated meal planning routing architecture and personalized AI coaching workflows for customized diet and exercise tracking."
              liveLink="https://healthmate-wdp.vercel.app/homepage"
              // Tuyệt đối không truyền detailLink để ẩn nút Case Study
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;