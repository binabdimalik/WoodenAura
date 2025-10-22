// src/pages/Contact.jsx
import React, { useState } from "react";
import Button from "../components/Button"; // Make sure your Button component path is correct
import "./contact.css"; // Optional: for custom styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to your backend or API
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <Button
            label="Send Message"
            type="submit"
            onClick={handleSubmit}
            style={{ padding: "10px 20px", marginTop: "10px" }}
          />
        </form>

        {/* Store Information */}
        <div className="store-info">
          <h2>Our Store</h2>
          <p>Address: 123 Wooden Aura Street, Nairobi, Kenya</p>
          <p>Phone: +254 712 345 678</p>
          <p>Email: info@woodenaura.com</p>

          {/* Embedded Google Map */}
          <div className="map-container" style={{ marginTop: "20px" }}>
            <iframe
              title="Wooden Aura Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1173!2sNairobi!5e0!3m2!1sen!2ske!4v1697942021234!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
