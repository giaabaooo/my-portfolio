import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineGlobal, AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  // Xác định thẻ bọc ảnh động dựa trên việc có Case Study hay không
  const ImageLinkWrapper = props.detailLink ? Link : "a";
  const imageLinkProps = props.detailLink 
    ? { to: props.detailLink } 
    : { href: props.liveLink, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Card 
      className="project-card-view" 
      style={{ 
        backgroundColor: "#101123", 
        border: "1px solid #353a52", 
        borderRadius: "0px", 
        boxShadow: "8px 8px 0px 0px #ec4899", 
        transition: "all 0.3s ease",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = "#16f2b3"; }}
      onMouseOut={(e) => { e.currentTarget.style.borderColor = "#353a52"; }}
    >
      {/* Thẻ bọc ảnh xử lý thông minh theo cấu trúc dự án */}
      <ImageLinkWrapper 
        {...imageLinkProps}
        style={{ display: "block", overflow: "hidden", borderBottom: "1px solid #353a52", cursor: "pointer" }}
        title={props.detailLink ? "View Project Evidence" : "Visit Live Website"}
      >
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="project-img" 
          style={{ 
            width: "100%", 
            height: "auto", 
            maxHeight: "220px", 
            objectFit: "cover", 
            transition: "transform 0.3s ease", 
            filter: "contrast(105%)" 
          }}
          onMouseOver={(e) => { e.target.style.transform = "scale(1.03)"; }}
          onMouseOut={(e) => { e.target.style.transform = "scale(1)"; }}
        />
      </ImageLinkWrapper>
      
      <Card.Body style={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Card.Title style={{ fontWeight: "bold", color: "#16f2b3", fontSize: "1.5rem", marginBottom: "15px" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "1.05rem", color: "#e5e7eb", lineHeight: "1.6", marginBottom: "30px", flexGrow: 1 }}>
          {props.description}
        </Card.Text>
        
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "auto" }}>
          {/* Nút Live Web luôn hiển thị */}
          <Button 
            href={props.liveLink} 
            target="_blank"
            style={{ 
              backgroundColor: "#16f2b3", 
              borderColor: "#16f2b3", 
              color: "#000", 
              borderRadius: "0px", 
              fontWeight: "bold", 
              padding: "10px 20px", 
              flex: 1, 
              textAlign: "center" 
            }}
            onMouseOver={(e) => { e.target.style.opacity = "0.8"; }}
            onMouseOut={(e) => { e.target.style.opacity = "1"; }}
          >
            <AiOutlineGlobal style={{ marginBottom: "2px" }} /> Live Web
          </Button>

          {/* CHỈ HIỂN THỊ NÚT CASE STUDY NẾU CÓ ĐƯỜNG LINK */}
          {props.detailLink && (
            <Button 
              as={Link}
              to={props.detailLink} 
              style={{ 
                backgroundColor: "transparent", 
                borderColor: "#ec4899", 
                color: "#ec4899", 
                borderRadius: "0px", 
                fontWeight: "bold", 
                padding: "10px 20px", 
                borderWidth: "2px", 
                flex: 1, 
                textAlign: "center" 
              }}
              onMouseOver={(e) => { e.target.style.backgroundColor = "#ec4899"; e.target.style.color = "#fff"; }}
              onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#ec4899"; }}
            >
              <AiOutlineFileSearch style={{ marginBottom: "2px" }} /> Case Study
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;