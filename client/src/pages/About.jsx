import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About EventBuddy</h1>
        <p>
          Discover. Connect. Create unforgettable experiences with EventBuddy.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-section">

        <div className="about-text">
          <h2>Our Story</h2>

          <p>
            EventBuddy is a modern event management platform built to connect
            people with exciting events. Whether it's a technology conference,
            music festival, workshop, sports event, or business meetup,
            EventBuddy makes discovering and joining events simple.
          </p>

          <p>
            Our goal is to create a seamless platform where users can explore,
            save, and register for events while organizers can easily manage
            their events.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
            alt="About EventBuddy"
          />
        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission-section">

        <div className="mission-card">
          <h2>🎯 Our Mission</h2>

          <p>
            To connect people through meaningful events and make event
            management simple, fast, and accessible for everyone.
          </p>

        </div>

        <div className="mission-card">

          <h2>🚀 Our Vision</h2>

          <p>
            To become the most trusted event platform that inspires communities
            to learn, network, and celebrate together.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Events Hosted</p>
        </div>

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Users</p>
        </div>

        <div className="stat-card">
          <h2>150+</h2>
          <p>Partners</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Cities</p>
        </div>

      </section>

      {/* Why Choose */}

      <section className="choose-section">

        <h2>Why Choose EventBuddy?</h2>

        <div className="choose-grid">

          <div className="choose-card">
            <h3>🎉 Discover Events</h3>
            <p>Find trending events near your location.</p>
          </div>

          <div className="choose-card">
            <h3>🤝 Build Network</h3>
            <p>Meet professionals and like-minded people.</p>
          </div>

          <div className="choose-card">
            <h3>⚡ Easy Registration</h3>
            <p>Register for events in just one click.</p>
          </div>

          <div className="choose-card">
            <h3>❤️ Save Favorites</h3>
            <p>Bookmark events to attend later.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;