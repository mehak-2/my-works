import { motion } from "framer-motion";
import React from "react";
import CertificateCard from "./CertificateCard";

import c1 from "../assests/c1.jpeg";
import c2 from "../assests/c2.jpeg";
import c3 from "../assests/c3.jpeg";
import c4 from "../assests/c4.jpeg";

const Certificate = (props) => {
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
        Achievement Showcase
      </motion.h1>
      <div className="flex gap2 certi">
        <CertificateCard
          name="Meta Participation Certificate"
          img={c1}
          dlink="URL_1"
        />
        <CertificateCard name="Udemy Certificate" img={c2} dlink="URL_2" />
        <CertificateCard
          name="Great Learning Certificate"
          img={c3}
          dlink="URL_3"
        />
        <CertificateCard name="GDG certificate" img={c4} dlink="URL_4" />
      </div>
    </div>
  );
};

export default Certificate;
