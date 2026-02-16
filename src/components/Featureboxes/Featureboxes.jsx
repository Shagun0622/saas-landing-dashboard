import React from "react";
import "./Featureboxes.css";


import feature1 from "../../assets/Group 102.png";
import feature2 from "../../assets/Group 124.png";
import feature3 from "../../assets/Group 129.png";
import feature4 from "../../assets/Group 103.png";
import feature5 from "../../assets/Group.png";
import feature6 from "../../assets/Group 106.png";

const features = [
  { img: feature1, title: "Fully Customizable" },
  { img: feature2, title: "Fully Customizable" },
  { img: feature3, title: "Fully Customizable" },
  { img: feature4, title: "Fully Customizable" },
  { img: feature5, title: "Fully Customizable" },
  { img: feature6, title: "Fully Customizable" },
];

export default function Featureboxes() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <h2 className="feature-heading">Feature Boxes</h2>
        <p className="feature-subtext">
          A good design is not only aesthetically pleasing, but also
          functional. It should be able to solve the problem
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src={feature.img} alt="feature" />
              </div>

              <h3>{feature.title}</h3>
              <p>
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
