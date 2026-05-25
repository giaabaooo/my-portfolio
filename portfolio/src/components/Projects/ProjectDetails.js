import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineCheckSquare, AiOutlineTrophy } from "react-icons/ai";
import { Link } from "react-router-dom";

// Import 5 ảnh hiện vật dự án của bạn
import img1 from "../../Assets/Projects/1.jpg";
import img2 from "../../Assets/Projects/2.jpg";
import img3 from "../../Assets/Projects/3.jpg";
import img4 from "../../Assets/Projects/4.jpg";
import img5 from "../../Assets/Projects/5.jpg";

function ProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const artifacts = [
    { img: img1, title: "01 / WORKSHOP" },
    { img: img2, title: "02 / PROJECT CONFIRMED" },
    { img: img3, title: "03 / MERCH DISPLAY" },
    { img: img4, title: "04 / GIFT"  },
    { img: img5, title: "05 / MYSELF" }
  ];

  return (
    <Container fluid className="project-details-section" style={{ backgroundColor: "#000000", color: "#fff", paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh", backgroundImage: "none" }}>
      <Container>
        {/* Nút quay lại trang chủ */}
        <Button 
          as={Link} 
          to="/" 
          style={{ 
            backgroundColor: "transparent", 
            border: "none", 
            color: "#16f2b3", 
            fontWeight: "bold", 
            fontSize: "1.1rem",
            padding: "0",
            marginBottom: "30px"
          }}
        >
          <AiOutlineArrowLeft style={{ marginBottom: "2px", marginRight: "5px" }} /> BACK TO PORTFOLIO
        </Button>

        {/* Tiêu đề dự án */}
        <h1 style={{ fontSize: "3em", fontWeight: "900", textTransform: "uppercase", borderBottom: "2px solid #353a52", paddingBottom: "10px", marginBottom: "40px" }}>
          SKILLMATCH <span style={{ color: "#ec4899" }}>// CASE STUDY</span>
        </h1>

        <Row>
          <Col md={12}>
            {/* Box 1: Tổng quan */}
            <div style={{ backgroundColor: "#101123", border: "1px solid #16f2b3", padding: "30px", marginBottom: "40px", borderRadius: "0px" }}>
              <h3 style={{ color: "#16f2b3", fontWeight: "bold", marginBottom: "20px" }}>1. OVERVIEW</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#e5e7eb" }}>
                SkillMatch là một hệ thống toàn diện kết hợp giữa nền tảng tuyển dụng và thi đánh giá năng lực. Điểm nhấn kỹ thuật của dự án nằm ở hệ thống giám sát chống gian lận (Anti-cheating) theo thời gian thực và việc áp dụng AI để chấm điểm ứng viên một cách khách quan nhất.
              </p>
            </div>

            {/* Box 2: Tính năng cốt lõi & Sự công nhận */}
            <div style={{ backgroundColor: "#0d1224", border: "1px solid #353a52", borderLeft: "4px solid #ec4899", padding: "30px", marginBottom: "50px", borderRadius: "0px" }}>
              <h3 style={{ color: "#ec4899", fontWeight: "bold", marginBottom: "20px" }}>2. CORE FEATURES & RECOGNITION</h3>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#e5e7eb", listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <AiOutlineTrophy color="#16f2b3" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span><strong style={{ color: "#16f2b3" }}>R&D Funding Winner:</strong> Dự án xuất sắc lọt Top 30% mô hình công nghệ tiêu biểu của trường và được cấp gói vốn tài trợ nghiên cứu & phát triển trị giá 50.000.000 VND.</span>
                </li>
                <li style={{ marginBottom: "10px" }}><AiOutlineCheckSquare color="#16f2b3" /> <strong>Role-based Architecture:</strong> Tách biệt luồng nghiệp vụ giữa Ứng viên (Candidate) và Nhà tuyển dụng (HR/Admin).</li>
                <li style={{ marginBottom: "10px" }}><AiOutlineCheckSquare color="#16f2b3" /> <strong>Job-specific States:</strong> Quản lý trạng thái ứng tuyển độc lập cho từng tin tuyển dụng, ngăn chặn rò rỉ hoặc chồng chéo dữ liệu trạng thái.</li>
                <li style={{ marginBottom: "10px" }}><AiOutlineCheckSquare color="#16f2b3" /> <strong>Payment Integration:</strong> Tích hợp cổng thanh toán nội địa PayOS tự động xử lý các giao dịch đăng ký gói doanh nghiệp.</li>
                <li style={{ marginBottom: "10px" }}><AiOutlineCheckSquare color="#16f2b3" /> <strong>Performance Optimization:</strong> Loại bỏ hoàn toàn các lớp filter nhòe (blur DOM), tối ưu hóa tốc độ tải và chuyển đổi toàn bộ thông báo hệ thống sang React Hot Toast.</li>
              </ul>
            </div>

            {/* Box 3: Mục ảnh Flex */}
            <div style={{ padding: "10px 0" }}>
              <h3 style={{ color: "#fff", fontWeight: "900", marginBottom: "30px", letterSpacing: "1px" }}>
                3. SYSTEM BLUEPRINT & PRODUCTION ARTIFACTS
              </h3>
              
              <Row style={{ justifyContent: "center" }}>
                {artifacts.map((item, index) => (
                  // 4 ảnh đầu chia làm 2 cột song song (md={6}), ảnh thứ 5 chiếm trọn chiều rộng (md={12}) để tạo điểm nhấn kết thúc bài bản
                  <Col md={index === 4 ? 12 : 6} key={index} style={{ marginBottom: "40px" }}>
                    <div style={{ 
                      border: "1px solid #353a52", 
                      padding: "12px", 
                      backgroundColor: "#101123",
                      boxShadow: "6px 6px 0px 0px #ec4899",
                      transition: "all 0.3s ease",
                      height: "100%"
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = "#16f2b3"; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = "#353a52"; }}
                    >
                      <div style={{ overflow: "hidden", border: "1px solid #2a2e5a", backgroundColor: "#000" }}>
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          style={{ 
                            width: "100%", 
                            height: "auto", 
                            maxHeight: index === 4 ? "500px" : "300px", 
                            objectFit: "cover",
                            display: "block"
                          }} 
                        />
                      </div>
                      <div style={{ marginTop: "15px", padding: "0 5px" }}>
                        <h4 style={{ color: "#16f2b3", fontSize: "1.1rem", fontWeight: "bold", mb: "5px" }}>{item.title}</h4>
                        <p style={{ color: "#a0aabf", fontSize: "0.95rem", margin: 0, textAlign: "justify" }}>{item.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;