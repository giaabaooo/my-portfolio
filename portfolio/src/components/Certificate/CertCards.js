import React from "react";
import Card from "react-bootstrap/Card";

function CertCards(props) {
  return (
    <Card 
      className="project-card-view"
      style={{ 
        backgroundColor: "#101123", 
        border: "1px solid #353a52", 
        borderRadius: "0px", 
        boxShadow: "6px 6px 0px 0px #ec4899", 
        color: "#fff",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = "#16f2b3"; }}
      onMouseOut={(e) => { e.currentTarget.style.borderColor = "#353a52"; }}
    >
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ maxHeight: "280px", objectFit: "cover", borderRadius: "0px" }} />
      )}
      <Card.Body style={{ padding: "25px" }}>
        <Card.Title style={{ fontWeight: "bold", color: "#16f2b3", fontSize: "1.3rem" }}>{props.title}</Card.Title>
        {props.description && <Card.Text style={{ color: "#e5e7eb", fontSize: "0.95rem", marginTop: "10px" }}>{props.description}</Card.Text>}
      </Card.Body>
    </Card>
  );
}

export default CertCards;