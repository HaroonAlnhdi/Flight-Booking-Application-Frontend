import React from "react";
import "./AboutUs.css"; // Ensure this file contains the updated CSS

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MyBrand Airlines</h1>
          <p>
            Discover our journey, mission, and the values that set us apart in
            the skies.
          </p>
        </div>
      </section>

      <section className="info-sections">
        <div className="info-card fade-in">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the leading airline that sets the standard for
            excellence in the aviation industry. We strive to be the first
            choice for travelers by offering innovative services, maintaining
            the highest safety standards, and fostering a culture of continuous
            improvement.
          </p>
        </div>
        <div className="info-card fade-in">
          <h2>Our Mission</h2>
          <p>
            At MyBrand Airlines, our mission is to connect people and places
            with unparalleled service. We are committed to providing safe,
            reliable, and enjoyable flights while contributing to the
            communities we serve. Our team of dedicated professionals is focused
            on delivering a seamless travel experience from start to finish.
          </p>
        </div>
      </section>

      <section className="values">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {[
            "Customer-Centric",
            "Innovation",
            "Safety",
            "Integrity",
            "Community",
          ].map((value, index) => (
            <div key={index} className="value-item scale-hover">
              <h3>{value}</h3>
              <p>
                {index === 0 &&
                  "We put our passengers at the heart of everything we do, prioritizing their needs and preferences."}
                {index === 1 &&
                  "We embrace new technologies and ideas to enhance our services and streamline operations."}
                {index === 2 &&
                  "We maintain the highest standards of safety to ensure your peace of mind while traveling."}
                {index === 3 &&
                  "We conduct our business with honesty and transparency, building trust with our customers and partners."}
                {index === 4 &&
                  "We are committed to making a positive impact in the communities we operate in, supporting local initiatives and sustainability efforts."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="meet-team info-card">
        <h2 className="section-title">Meet Our Team</h2>
        <p>
          Our team is the backbone of MyBrand Airlines. From our experienced
          pilots to our friendly cabin crew and dedicated ground staff, each
          member plays a crucial role in delivering exceptional service. We are
          proud of our diverse and talented team, who share a common goal of
          providing you with a top-notch travel experience.
        </p>
      </section>

      <section className="contact">
        <h2 className="section-title">Contact Us</h2>
        <p >
          Have questions or need assistance? Feel free to reach out to us at{" "}
          <a href="mailto:info@mybrandairlines.com">info@mybrandairlines.com</a>{" "}
          or call us at +1-800-123-4567. We look forward to hearing from you!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
