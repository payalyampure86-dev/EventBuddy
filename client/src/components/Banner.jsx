import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">

      <div className="banner-left">

        <span className="tag">
          🎉 Welcome to EventBuddy
        </span>

        <h1>
          Discover Amazing
          <br />
          <span>Events Near You</span>
        </h1>

        <p>
          Join exciting events, connect with people,
          create unforgettable experiences and manage
          everything in one place.
        </p>

        <div className="banner-buttons">

          <Link to="/events">
            <button className="explore-btn">
              Explore Events
            </button>
          </Link>

          <Link to="/create-event">
            <button className="create-btn">
              Create Event
            </button>
          </Link>

        </div>

      </div>

      <div className="banner-right">

        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
          alt="Event"
        />

      </div>

    </section>
  );
}

export default Banner;