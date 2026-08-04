import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact EventBuddy</h1>
        <p>
          We'd love to hear from you. Get in touch with our team anytime.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@eventbuddy.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      <section className="map-section">
        <h2>Our Location</h2>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Pune,+Maharashtra&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}

export default Contact;