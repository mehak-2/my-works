import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-section">
      <motion.h1
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transtion={{
          type: "spring",
          stiffness: 500,
          ease: "linear",
          dealy: 2,
          duration: 3,
        }}
        className="header"
      >
        About Me
      </motion.h1>
      <div className="content-column">
        <div className="content-row">
          <motion.img
            initial={{ x: -550, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transtion={{
              type: "spring",
              stiffness: 500,
              ease: "linear",
              dealy: 2,
              duration: 3,
            }}
            className="img"
            src={require("./profile.jpg")}
            alt="mehak"
          />
          <motion.p
            initial={{ x: 550, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transtion={{
              type: "spring",
              stiffness: 500,
              ease: "linear",
              duration: 3,
              dealy: 2,
            }}
            className="about"
          >
            Hello! I'm Mehak, a passionate web developer. My journey as a web
            developer began with a fascination for coding and a desire to bring
            innovative solutions to life. Over the one year, I have honed my
            skills in HTML, CSS, JavaScript, and now I am learning various
            frameworks such as React Js. I stay updated with the latest web
            technologies and trends to ensure that my work improves day by day.
            I have learned many new things from my friends; they helped me a lot
            in my coding journey. If you're seeking a dedicated and creative web
            developer who combines technical expertise with a passion for
            exceptional user experiences, I would love to collaborate with you.
            Let's bring your web project to life and make an impact together. I
            Love Coding!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
