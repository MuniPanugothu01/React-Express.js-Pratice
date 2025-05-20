import React from "react";
// import the browser routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Browser = () => {
  return (
    <>
      <BrowserRouter>
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
