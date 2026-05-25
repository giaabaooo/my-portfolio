import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineTrophy } from "react-icons/ai";

function Cert() {
  return (
    <div style={{ backgroundColor: "#000000", backgroundImage: "none" }}>
      
      {/* ========================================================= */}
      {/* SECTION 1: CERTIFICATES (EMPTY STATE)                     */}
      {/* ========================================================= */}
      <Container fluid className="project-section" id="certificates" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#fff", paddingTop: "100px", paddingBottom: "40px" }}>
        <Container>
          <h1 className="project-heading" style={{ fontSize: "2.5em", fontProject: "900", textAlign: "center" }}>
            MY <strong style={{ color: "#16f2b3" }}>CERTIFICATES</strong>
          </h1>
          <Row style={{ justifyContent: "center", marginTop: "40px" }}>
            <Col md={8}>
              {/* Khung Console hiển thị trạng thái trống cực chất */}
              <div style={{ 
                border: "1px dashed #353a52", 
                padding: "25px", 
                textAlign: "center", 
                color: "#a0aabf",
                fontFamily: "monospace",
                fontSize: "1.05rem",
                backgroundColor: "#0d1224"
              }}>
                [ SYSTEM STATUS: NO ACTIVE CERTIFICATES ENROLLED / INDEX READY ]
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ========================================================= */}
      {/* SECTION 2: EDUCATION (ADDED DIRECTLY BELOW)               */}
      {/* ========================================================= */}
      <Container fluid className="education-section" id="education" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#fff", paddingTop: "40px", paddingBottom: "100px" }}>
        <Container>
          <h1 className="project-heading" style={{ fontSize: "2.5em", fontWeight: "900", textAlign: "center", marginBottom: "50px" }}>
            MY <strong style={{ color: "#ec4899" }}>EDUCATION</strong>
          </h1>
          
          <Row style={{ justifyContent: "center" }}>
            <Col md={8}>
              {/* Khung chứa thông tin Học vấn đồng nhất thiết kế khối */}
              <div style={{ 
                backgroundColor: "#101123", 
                border: "1px solid #353a52", 
                borderRadius: "0px", 
                boxShadow: "8px 8px 0px 0px #16f2b3", // Đổ bóng cứng màu xanh Neon tương phản
                padding: "40px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "#16f2b3"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "#353a52"; }}
              >
                {/* Dòng tiêu đề trường và mốc thời gian */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}>
                  <div>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: "900", color: "#ffffff", margin: 0, letterSpacing: "1px" }}>
                      FPT UNIVERSITY
                    </h2>
                    <h4 style={{ fontSize: "1.2rem", color: "#16f2b3", marginTop: "6px", fontWeight: "bold" }}>
                      Bachelor of Software Engineering
                    </h4>
                  </div>
                  <div className="ms-md-auto">
                    <span style={{ backgroundColor: "#0d1224", border: "1px solid #ec4899", color: "#ec4899", padding: "6px 16px", fontSize: "0.95rem", fontWeight: "bold", fontFamily: "monospace" }}>
                      09/2021 - 09/2025
                    </span>
                  </div>
                </div>

                <p style={{ color: "#e5e7eb", fontSize: "1.1rem", lineHeight: "1.8", textAlign: "justify", margin: 0 }}>
                  Chương trình đào tạo tập trung chuyên sâu vào kỹ thuật phần mềm toàn diện, xây dựng và tối ưu hóa kiến trúc hệ thống, quản trị cơ sở dữ liệu nâng cao, cùng năng lực tích hợp giải pháp trí tuệ nhân tạo (AI). Giữ vai trò lập trình viên nòng cốt trong các dự án thực chiến công nghệ lớn của khóa học.
                </p>

                {/* Khối Flex giải thưởng & tài trợ nghiên cứu đồ án */}
                <div style={{ 
                  marginTop: "35px", 
                  backgroundColor: "#0d1224", 
                  borderLeft: "4px solid #ec4899", 
                  padding: "20px",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center"
                }}>
                  <AiOutlineTrophy color="#ec4899" size={36} style={{ flexShrink: 0 }} />
                  <p style={{ color: "#ffffff", fontSize: "1rem", margin: 0, lineHeight: "1.6" }}>
                    <strong style={{ color: "#ec4899" }}>ACADEMIC HIGHLIGHT:</strong> Đồ án nghiên cứu công nghệ thực chiến lọt <strong style={{ color: "#16f2b3" }}>Top 30% đồ án xuất sắc nhất toàn trường</strong> và vinh dự được nhà trường phê duyệt cấp gói ngân sách tài trợ nghiên cứu & phát triển (R&D Funding) trị giá <strong style={{ color: "#16f2b3" }}>50.000.000 VND</strong>.
                  </p>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Cert;