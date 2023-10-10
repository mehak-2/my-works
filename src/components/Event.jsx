import { motion } from "framer-motion";
import React from "react";

const Event = () => {
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
        className="eventhead"
      >
        Memorable Events I Attended
      </motion.h1>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transtion={{ type: "spring", stiffness: 300 }}
        className="row"
      >
        <div className="gallery">
          <a target="_blank" href="event1.jpeg">
            <img
              className="img1"
              src={require("../assests/event1.jpeg")}
              alt="event1"
            />
          </a>
          <div className="desc">
            24-hour Hackathon at Lovely Professional University,Jalandhar
          </div>
        </div>

        <div className="gallery">
          <a target="_blank" href="event2.jpeg">
            <img
              src={require("../assests/event2.jpeg")}
              alt="event2"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            Web3 session at Lovely Professional University,Jalandhar
          </div>
        </div>

        <div className="gallery">
          <a target="_blank" href="event3.jpeg">
            <img
              src={require("../assests/event3.jpeg")}
              alt="event3"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">Mega Session at IKGPTU,Kapurthala</div>
        </div>

        <div className="gallery">
          <a target="_blank" href="event4.jpeg">
            <img
              src={require("../assests/event4.jpeg")}
              alt="event4"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            Google I/O extended Event at IKGPTU,Kapurthala
          </div>
        </div>
      </motion.div>

      <div className="row">
        <div className="gallery">
          <a target="_blank" href="event5.jpeg">
            <img
              src={require("../assests/event5.jpeg")}
              alt="event5"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            App Alchemy- Angular JS Session at IKGPTU,Kapurthala
          </div>
        </div>

        {/* Add three more divs here */}
        {/* Add the same structure as above for each image */}
      </div>
    </div>
  );
};

export default Event;
