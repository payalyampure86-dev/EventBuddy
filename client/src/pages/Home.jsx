import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./Home.css";

const eventsData = [
  {
    id: 1,
    title: "Tech Innovation Summit",
    date: "25 August 2026",
    location: "Pune",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
  },
  {
    id: 2,
    title: "Music Festival Night",
    date: "30 August 2026",
    location: "Mumbai",
    category: "Music",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600",
  },
  {
    id: 3,
    title: "Startup Networking",
    date: "10 September 2026",
    location: "Bangalore",
    category: "Business",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
  },
  {
    id: 4,
    title: "AI Workshop",
    date: "15 September 2026",
    location: "Pune",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },
  {
    id: 5,
    title: "College Cultural Fest",
    date: "20 September 2026",
    location: "Solapur",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
  },
  {
    id: 6,
    title: "Sports Championship",
    date: "12 October 2026",
    location: "Pune",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
  },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
   <Navigation />

      <div className="home">

        <section className="hero">

          <div className="hero-left">

            <span className="hero-tag">
              🎉 India's Trusted Event Platform
            </span>

            <h1>
              Discover Amazing
              <br />
              <span>Events Near You</span>
            </h1>

            <p>
              Book conferences, workshops, concerts,
              hackathons and festivals with EventBuddy.
            </p>

            <div className="hero-buttons">

              <Link to="/events" className="explore-btn">
                Explore Events
              </Link>

              <Link to="/create-event" className="create-btn">
                Create Event
              </Link>

            </div>

            <div className="search-box">

              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button>
                Search
              </button>

            </div>

          </div>

          <div className="hero-right">

            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900"
              alt="Hero"
            />

          </div>

        </section>

        <section className="categories">

          <h2>Popular Categories</h2>

          <div className="category-grid">

            <div className="category-card">💻 Technology</div>
            <div className="category-card">🎵 Music</div>
            <div className="category-card">💼 Business</div>
            <div className="category-card">🎨 Art</div>
            <div className="category-card">⚽ Sports</div>
            <div className="category-card">🍔 Food</div>

          </div>

        </section>

        <section className="featured-events">

          <div className="section-title">

            <h2>Featured Events</h2>

            <Link to="/events">
              View All
            </Link>

          </div>

          <div className="event-grid">

            {filteredEvents.map((event) => (

              <div className="event-card" key={event.id}>

                <img src={event.image} alt={event.title} />

                <div className="event-content">

                  <span>{event.category}</span>

                  <h3>{event.title}</h3>

                  <p>📅 {event.date}</p>

                  <p>📍 {event.location}</p>

                  <div className="event-buttons">

                    <button className="save-btn">
                      ❤️ Save
                    </button>

                    <Link
                      className="register-btn"
                      to="/events"
                    >
                      Register
                    </Link>

                    <Link
                      className="details-btn"
                      to={`/events/${event.id}`}
                    >
                      Details
                    </Link>

                  </div>

                </div>

              </div>

            ))}
                      </div>
        </section>

        {/* WHY CHOOSE */}

        <section className="why-section">

          <h2>Why Choose EventBuddy?</h2>

          <div className="why-grid">

            <div className="why-card">
              <h3>🎯 Easy Discovery</h3>
              <p>
                Find events quickly based on your interests and location.
              </p>
            </div>

            <div className="why-card">
              <h3>⚡ Quick Registration</h3>
              <p>
                Register for events in just a few clicks.
              </p>
            </div>

            <div className="why-card">
              <h3>🤝 Networking</h3>
              <p>
                Connect with professionals and students.
              </p>
            </div>

            <div className="why-card">
              <h3>🔒 Secure Platform</h3>
              <p>
                Safe and trusted event management system.
              </p>
            </div>

          </div>

        </section>



        {/* STATS */}

        <section className="stats">

          <div className="stat-card">
            <h2>500+</h2>
            <p>Events</p>
          </div>

          <div className="stat-card">
            <h2>10K+</h2>
            <p>Users</p>
          </div>

          <div className="stat-card">
            <h2>100+</h2>
            <p>Cities</p>
          </div>

          <div className="stat-card">
            <h2>4.9★</h2>
            <p>Rating</p>
          </div>

        </section>



        {/* NEWSLETTER */}

        <section className="newsletter">

          <h2>Stay Updated</h2>

          <p>
            Subscribe to receive notifications about upcoming events.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </section>



        {/* FOOTER */}

        <footer className="footer">

          <div className="footer-container">

            <div>
              <h2>🎉 EventBuddy</h2>
              <p>
                Discover amazing events and connect with people.
              </p>
            </div>

            <div>

              <h3>Quick Links</h3>

              <Link to="/">Home</Link><br />
              <Link to="/events">Events</Link><br />
              <Link to="/about">About</Link><br />
              <Link to="/contact">Contact</Link>

            </div>

            <div>

              <h3>Contact</h3>

              <p>📧 support@eventbuddy.com</p>
              <p>📞 +91 9876543210</p>
              <p>📍 Pune, Maharashtra</p>

            </div>

          </div>

          <hr />

          <p className="copyright">
            © 2026 EventBuddy. All Rights Reserved.
          </p>

        </footer>

      </div>

    </>
  );
}

export default Home;