import React from "react";
import "./Home.css";
import Marquee from "react-fast-marquee";
import Card from "./CardComponent";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="div1">
        <div className="marquee-container">
          <Marquee pauseOnHover={true} speed={50}>
            <div className="image_wrapper">
              <img src="/rubber-o-rings.jpg" alt="rubber-o-rings" />
            </div>
            <div className="image_wrapper">
              <img src="/rubber-o-rings.jpg" alt="rubber-o-rings" />
            </div>
            <div className="image_wrapper">
              <img src="/rubber-o-rings.jpg" alt="rubber-o-rings" />
            </div>
            <div className="image_wrapper">
              <img src="/rubber-o-rings.jpg" alt="rubber-o-rings" />
            </div>
            <div className="image_wrapper">
              <img src="/rubber-o-rings.jpg" alt="rubber-o-rings" />
            </div>
          </Marquee>
        </div>

        <div className="div2">
          <h1>Products</h1>
          <Card />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;