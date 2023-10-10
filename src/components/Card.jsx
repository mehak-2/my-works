import React from "react";

import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transtion={{ type: "spring", stiffness: 300 }}
      className="card"
    >
      <h1>{props.pname}</h1>
      <h3>{props.desc}</h3>
      <button className="git-btn">{props.button}</button>
    </motion.div>
  );
};

export default Card;
