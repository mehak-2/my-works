import React from "react";

import svg from "./svg.svg";

const Home = () => {
  return (
    <div>
      <div className="left">
        <h1 className="intro-title">
          Hi,I'm <span>Mehak</span>
        </h1>
        <button className="github-main">Github</button>
      </div>
      <div className="right">
        <img className="svg" src={svg} height="450px" width="450px" />
      </div>
    </div>
  );
};

export default Home;
