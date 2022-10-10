import React from "react";
// scroll
import { Link } from 'react-scroll';
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Thouma</div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonial" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
      </div>
      <Link
        spy={true}
        to="Contacto"
        smooth={true}
        className="button n-button spy-button"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
