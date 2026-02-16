import React, { useState } from "react";
import "./ContactPage.css";
import globeMapImg from '../../assets/Frame.png';
import globeContactImg from '../../assets/Globe.png';


import logo1 from "../../assets/Group 96.png";
import logo2 from "../../assets/Group 97.png";
import logo3 from "../../assets/Group 98.png";
import logo4 from "../../assets/Group 99.png";
import logo5 from "../../assets/Group 100.png";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');

   
    setFormData({
      email: '',
      name: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">

     
      <section className="companies-section">
        <h2>Companies we Worked<br />With in Since 2015</h2>

        <div className="logo-grid">
          <div className="logo-box">
            <img src={logo1} alt="Smile company logo" />
          </div>
          <div className="logo-box">
            <img src={logo2} alt="Urban company logo" />
          </div>
          <div className="logo-box">
            <img src={logo3} alt="Natural company logo" />
          </div>
          <div className="logo-box">
            <img src={logo4} alt="Wave company logo" />
          </div>
          <div className="logo-box">
            <img src={logo5} alt="Happy company logo" />
          </div>

        </div>
      </section>

      {/* ================= CTA CARD ================= */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <p className="cta-subtitle">Love our Our Tool?</p>
            <h2>Fell Free to Join our<br />15 Days Free Trial</h2>
            <button type="button">Download Template</button>
          </div>

          <div className="cta-image">
            <img src={globeMapImg} alt="World map decoration" />
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section ">
        <div className="contact-blob contact-blob-1"></div>
        <div className="contact-blob contact-blob-2"></div>



        <div className="contact-left">
          <img src={globeContactImg} alt="Globe wireframe" className="globe-image" />
        </div>

        <div className="contact-right">
          <h2>Get In Touch</h2>
          <p>
            A good design is not only aesthetically pleasing, but also functional.
            It should be able to solve the problem.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit">Get in Touch</button>
          </form>
        </div>
      </section>

    </div>
  );
}