import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  return (
    <div>
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
        className="certificatehead"
      >
        Skill Set
      </motion.h1>
      <section className="skill-section">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transtion={{ type: "spring", stiffness: 700 }}
          className="row gap3"
        >
          <div className="box">
            <h4>HTML</h4>
          </div>
          <div className="box">
            <h4>CSS</h4>
          </div>
          <div className="box">
            <h4>JavaScript</h4>
          </div>
          <div className="box">
            <h4>React</h4>
          </div>
          <div className="box">
            <h4>Java</h4>
          </div>
          <div className="box">
            <h4>SQL</h4>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
