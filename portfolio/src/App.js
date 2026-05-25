import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ProjectDetails from "./components/Projects/ProjectDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Certs from "./components/Certificate/Certs";
import ContactUs from "./components/Contact";
import Practicle from "../src/components/Particle";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Gia Bảo | Portfolio</title>
      </Helmet>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          {/* TRANG CHỦ: Giữ nguyên vẹn tất cả các phân hệ xếp chồng của bạn */}
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Projects />
              <Certs />
              
              <ContactUs />
            </>
          } />
          
          {/* TRANG RIÊNG BIỆT: Chỉ hiển thị duy nhất nội dung Case Study */}
          <Route path="/project/skillmatch" element={<ProjectDetails />} />
          
          {/* Bẫy lỗi đường dẫn: Tự động quay về trang chủ nếu nhập sai link */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;