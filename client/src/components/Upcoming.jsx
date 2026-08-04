import React from "react";
import "./Upcoming.css";

function Upcoming() {

  const upcomingEvents = [

    {
      id: 1,
      title: "AI Workshop",
      date: "12 August 2026",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
    },

    {
      id: 2,
      title: "Coding Hackathon",
      date: "18 August 2026",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
    },

    {
      id: 3,
      title: "Startup Summit",
      date: "25 August 2026",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800"
    }

  ];

  return (

    <section className="upcoming-section">

      <h2>📅 Upcoming Events</h2>

      <p>
        Don't miss these exciting upcoming events.
      </p>

      <div className="upcoming-grid">

        {

          upcomingEvents.map((event)=>(

            <div
              className="upcoming-card"
              key={event.id}
            >

              <img
                src={event.image}
                alt={event.title}
              />

              <div className="upcoming-content">

                <h3>{event.title}</h3>

                <p>📅 {event.date}</p>

                <p>📍 {event.location}</p>

                <button>
                  View Details
                </button>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Upcoming;