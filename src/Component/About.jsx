import React from "react";
import "./About.css";
import Footer from "./Footer";
const About = () => {
  return (
    <>
        <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Gagangiri Rubber Works</h1>
        <p className="about-description">
          Gagangiri Rubber Works is a leading Indian manufacturer specializing in
          high-quality rubber products. Since our inception in 2011, we have
          been one of the fastest-growing companies in the industry, known for
          our wide product range, superior quality, and competitive pricing. We
          proudly collaborate with well-known brands across India.
        </p>

        <h2 className="about-subtitle">Our Product Categories</h2>
        <ul className="about-list">
          <li><span className="about-list-item">Rubber Molded Products:</span> Rubber Gaskets, O-Rings, Couplings, Diaphragms, Seals, Bushes, Bellows, Expansion Bellows, Grommets, Packings, and more (customized as per drawings).</li>
          <li><span className="about-list-item">Rubber Extruded Products:</span> Rubber Sections, Rubber Cords, Sponge Profiles, and more.</li>
          <li><span className="about-list-item">Rubber to Metal Bonded Products:</span> Rubber Buffers, Anti-Vibration Mounts, Level Mounts, Bearings, Rubber Rolls, Sandwich Mounts, and a full range of "O" Mounts (25mm to 100mm).</li>
          <li><span className="about-list-item">Thermoplastic Polyurethane (TPU) Products:</span> U & V Seals, Chevron Packings, Wiper Seals, PU Sheets, etc.</li>
          <li><span className="about-list-item">Castable Polyurethane Products:</span> PU-Coated MS & Aluminum Rolls.</li>
          <li><span className="about-list-item">Silicone Products:</span> High-quality silicone-based products and parts.</li>
          <li><span className="about-list-item">VITON Products:</span> Specializing in manufacturing VITON-based products and parts.</li>
        </ul>

        <p className="about-footer">
          We would be honored to be included in your supplier list and look forward to the
          opportunity to build a strong business relationship with your esteemed organization.
        </p>

        <p className="about-footer-bold">We appreciate your consideration and look forward to hearing from you soon.</p>
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default About;
