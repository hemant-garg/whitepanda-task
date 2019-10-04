import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <FaTwitter />
        <FaLinkedin />
        <FaInstagram />
        <FaFacebook />
      </div>
      <div>
        <p>Copyright &copy;2019 White Panda Media Pvt. Ltd.</p>
        <p>All rights reserved</p>
      </div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Service Agreement</a>
        <a href="#">Contact us</a>
      </div>
    </footer>
  );
}
