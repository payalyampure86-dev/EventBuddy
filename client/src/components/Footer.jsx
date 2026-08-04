import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>🎉 EventBuddy</h2>

          <p>
            EventBuddy helps you discover, create and manage
            amazing events with a modern and easy-to-use platform.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Dashboard</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@eventbuddy.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Pune, India</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 EventBuddy. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;