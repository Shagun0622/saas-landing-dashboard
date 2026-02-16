import React from "react";
import "./HeroOrbit.css";

import circles from "../../assets/Group 123.png";
import logo from "../../assets/logo.png";
import icon1 from "../../assets/Ellipse 9.png";
import icon2 from "../../assets/Ellipse 10.png";
import icon3 from "../../assets/Ellipse 11.png";
import dot from "../../assets/Group 124.png";

export default function HeroOrbit() {
  return (
    <section className="hero-orbit">
      
      {/* LEFT SIDE */}
      <div className="orbit-wrapper">
        <div className="orbit-container">
          
          <img src={circles} alt="rings" className="rings" />

          <div className="center-circle">
            <img src={logo} alt="center logo" />
          </div>

          {/* Big Icons */}
          <img src={icon1} className="orbit-icon big big1" alt="" />
          <img src={icon2} className="orbit-icon big big2" alt="" />
          <img src={icon3} className="orbit-icon big big3" alt="" />

          {/* Small Dots */}
          <img src={dot} className="orbit-icon small small1" alt="" />
          <img src={dot} className="orbit-icon small small2" alt="" />
          <img src={dot} className="orbit-icon small small3" alt="" />

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-content">
        <h1>
          We're here to <br />
          guide and help <br />
          you at all times
        </h1>

        <p>
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>

        <button className="hero-btn">Download</button>
      </div>

    </section>
  );
}
