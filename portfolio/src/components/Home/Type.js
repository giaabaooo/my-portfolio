import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Web Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30, // Tốc độ xóa nhanh hơn để dứt khoát
        cursor: "█", // Con trỏ phong cách Cyberpunk / Terminal
      }}
    />
  );
}

export default Type;