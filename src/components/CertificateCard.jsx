import { motion } from "framer-motion";
import React from "react";

const CertificateCard = (props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transtion={{ type: "spring", stiffness: 300 }}
      className="card1"
    >
      <div className="w3-card-4">
        <div className="w3-container">
          <img src={props.img} alt="Avatar" />
          <h1>{props.name}</h1>
          <div className="w3-section">
            <a href={props.dlink}>Download</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
