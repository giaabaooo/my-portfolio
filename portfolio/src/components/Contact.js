import React, { useRef, useState } from 'react';
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IoSend } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { AiFillGithub, AiFillFacebook, AiFillMail } from "react-icons/ai";

export default function ContactUs() {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAlertClose = () => {
        setAlertMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l2n672y', 'template_skkfqgg', form.current, 'AL_QeDqTX3JiynBHD')
            .then((result) => {
                console.log(result.text);
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
                setAlertMessage('Your message was transmitted successfully!');
                setAlertVariant('success');
            }, (error) => {
                console.log(error.text);
                setAlertMessage('Transmission critical error. Please try again.');
                setAlertVariant('danger');
            });
    };

    // Style đồng bộ cho các trường Input của Console Form
    const inputStyle = {
        background: '#101123',
        border: '1px solid #353a52',
        borderRadius: '0px',
        color: '#ffffff',
        padding: '12px 15px',
        width: '100%',
        marginBottom: '20px',
        outline: 'none',
        transition: 'all 0.3s ease'
    };

    return (
        <Container fluid id="contact" style={{ backgroundColor: "#000000", backgroundImage: "none", color: "#fff", paddingTop: "100px", paddingBottom: "100px" }}>
          <Container>
            <Row className="align-items-center">
                {/* Cột trái: Thông tin liên hệ dạng Text khối */}
                <Col lg="5" style={{ paddingRight: "40px" }}>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "25px", textTransform: "uppercase" }}>
                        CONTACT <span style={{ color: "#16f2b3" }}>WITH ME</span>
                    </h1>
                    <p style={{ color: "#e5e7eb", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "40px", textAlign: "justify" }}>
                        If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem' }}>
                            <AiFillMail color="#ec4899" size={24} />
                            <span>giabaobs35@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem' }}>
                            <AiFillFacebook color="#16f2b3" size={24} />
                            <a href="https://facebook.com/ng.gia.baoooo/" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>fb.com/ng.gia.baoooo</a>
                        </div>
                    </div>
                </Col>

                {/* Cột phải: Form nhập liệu sắc nét phong cách Cyberpunk */}
                <Col lg="7">
                    <form ref={form} onSubmit={sendEmail} style={{ backgroundColor: "#0d1224", border: "1px solid #353a52", padding: "40px", boxShadow: "8px 8px 0px 0px #ec4899" }}>
                        <Row>
                            <Col lg="6">
                                <label style={{ color: "#16f2b3", fontWeight: "bold", marginBottom: "8px", fontFamily: "monospace" }}>&gt; USER_NAME</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    style={inputStyle}
                                    required
                                    onChange={handleChange}
                                    value={formData.user_name}
                                    onFocus={(e) => e.target.style.borderColor = "#16f2b3"}
                                    onBlur={(e) => e.target.style.borderColor = "#353a52"}
                                />
                            </Col>
                            <Col lg="6">
                                <label style={{ color: "#16f2b3", fontWeight: "bold", marginBottom: "8px", fontFamily: "monospace" }}>&gt; USER_EMAIL</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    style={inputStyle}
                                    required
                                    onChange={handleChange}
                                    value={formData.user_email}
                                    onFocus={(e) => e.target.style.borderColor = "#16f2b3"}
                                    onBlur={(e) => e.target.style.borderColor = "#353a52"}
                                />
                            </Col>
                        </Row>
                        
                        <label style={{ color: "#16f2b3", fontWeight: "bold", marginBottom: "8px", fontFamily: "monospace" }}>&gt; TRANSMISSION_MESSAGE</label>
                        <textarea
                            name="message"
                            rows="5"
                            style={{ ...inputStyle, resize: 'none' }}
                            required
                            onChange={handleChange}
                            value={formData.message}
                            onFocus={(e) => e.target.style.borderColor = "#16f2b3"}
                            onBlur={(e) => e.target.style.borderColor = "#353a52"}
                        ></textarea>

                        <div style={{ textAlign: "right", marginTop: "10px" }}>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "2px solid #16f2b3",
                                    color: "#16f2b3",
                                    padding: "10px 35px",
                                    fontWeight: "bold",
                                    borderRadius: "0px",
                                    letterSpacing: "1px",
                                    transition: "all 0.2s"
                                }}
                                onMouseOver={(e) => { e.target.style.backgroundColor = "#16f2b3"; e.target.style.color = "#000"; }}
                                onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#16f2b3"; }}
                            >
                                TRANSMIT <IoSend style={{ marginLeft: '5px', marginBottom: '2px' }} />
                            </button>
                        </div>
                    </form>

                    {alertMessage && (
                        <div style={{ marginTop: "20px" }}>
                            <Alert
                                variant={alertVariant}
                                onClose={handleAlertClose}
                                dismissible
                                style={{ borderRadius: "0px", backgroundColor: alertVariant === 'success' ? '#101123' : '#2a0f16', color: alertVariant === 'success' ? '#16f2b3' : '#ff4a5a', border: `1px solid ${alertVariant === 'success' ? '#16f2b3' : '#ff4a5a'}` }}
                            >
                                {alertMessage}
                            </Alert>
                        </div>
                    )}
                </Col>
            </Row>
          </Container>
        </Container>
    );
}