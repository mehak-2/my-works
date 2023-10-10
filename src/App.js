import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import About from "./components/About";
import Skills from "./components/Skills";
import Event from "./components/Event";
import Certificate from "./components/Certificate";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/frontend" element={<Frontend />} />
          <Route exact path="/Backend" element={<Backend />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/certificate" element={<Certificate />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
