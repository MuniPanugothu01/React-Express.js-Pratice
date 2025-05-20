import React from "react";
// import the browser routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Browser = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Browser;
