import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>About Gagangiri Rubber Works</h3>
          <p>
            Gagangiri Rubber Works specializes in high-quality rubber products, catering to industries with durable and reliable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:shivaji.pawar@gagangirirubber.com" style={{textDecoration:"none"}}>shivaji.pawar@gagangirirubber.com</a></p>
          <p>Phone: +91 81697 45760</p>
          <p>GST Id:27BKEPP6242C1ZA</p>
          <p>Address: PLOT NO-22 SARVE NO-109 ADARSH NAGAR VALAP, Near HINDALCO COMPANY, Taloja, Navi Mumbai, Maharashtra 410208</p>
        </div>

        {/* Social Media */}
        {/* <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div> */}
      </div>
      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Gagangiri Rubber Works. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
