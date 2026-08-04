import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchEvents();

    if (user) {
      fetchRegistrations();
    }
  }, []);

  // Fetch Events
  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/events"
      );

      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Registrations
  const fetchRegistrations = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/registrations/${user.id}`
      );

      setRegistrations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const stats = [
    {
      title: "Total Events",
      count: events.length,
      icon: "📅",
    },
    {
      title: "Saved Events",
      count: 0,
      icon: "❤️",
    },
    {
      title: "Registrations",
      count: registrations.length,
      icon: "📝",
    },
    {
      title: "Connections",
      count: 0,
      icon: "👥",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        {/* Header */}

        <div className="dashboard-header">
          <div>
            <h1>Welcome {user?.name} </h1>

            <p>Manage your events and connections.</p>
          </div>

          <div className="profile-mini">
            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
            />

            <div>
              <h3>{user?.name}</h3>

              <span>{user?.email}</span>
            </div>
          </div>
        </div>

        {/* Stats */}

        <section className="stats-container">
          {stats.map((item, index) => (
            <div
              className="dashboard-card"
              key={index}
            >
              <div className="card-icon">
                {item.icon}
              </div>

              <div>
                <h2>{item.count}</h2>

                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Quick Actions */}

        <section className="quick-actions">
          <button onClick={() => navigate("/events")}>
            📅 View Events
          </button>

          <button onClick={() => navigate("/create-event")}>
            ➕ Create Event
          </button>

          <button onClick={() => navigate("/my-registrations")}>
            📝 My Registrations
          </button>
        </section>

        {/* Upcoming Events */}

        <section className="dashboard-box">
          <h2>Upcoming Events</h2>

          {events.length === 0 ? (
            <p>No Events Found</p>
          ) : (
            events.slice(0, 5).map((event) => (
              <div
                className="upcoming-item"
                key={event._id}
              >
                <h3>{event.title}</h3>

                <p>📅 {event.date}</p>

                <p>📍 {event.location}</p>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;