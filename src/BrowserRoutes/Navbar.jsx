import React from "react";
// import the Link tag to this file
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/footer">Footer</Link>
    </>
  );
};

export default Navbar;
