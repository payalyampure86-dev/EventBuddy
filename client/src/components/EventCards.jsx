import React from "react";
import "./EventCards.css";

function EventCards() {

  const events = [

    {
      id:1,
      title:"Tech Conference",
      date:"25 July 2026",
      place:"Pune",
      image:"https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
    },

    {
      id:2,
      title:"Music Festival",
      date:"30 July 2026",
      place:"Mumbai",
      image:"https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    },

    {
      id:3,
      title:"Startup Meetup",
      date:"5 August 2026",
      place:"Bangalore",
      image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
    }

  ];

  return (

    <section className="featured">

      <h2>⭐ Featured Events</h2>

      <div className="event-grid">

        {

          events.map((event)=>(

            <div className="event-card" key={event.id}>

              <img
                src={event.image}
                alt={event.title}
              />

              <div className="event-content">

                <h3>{event.title}</h3>

                <p>📅 {event.date}</p>

                <p>📍 {event.place}</p>

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

export default EventCards;