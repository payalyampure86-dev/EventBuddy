import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./SavedEvents.css";

function SavedEvents() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    if (user) {
      fetchSavedEvents();
    }
  }, []);
arguments
  const fetchSavedEvents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/events/saved/${user.id}`
      );

      setSavedEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeEvent = async (eventId) => {
    try {
      await axios.delete(
        "https://eventbuddy-33hc.onrender.com",
        {
          data: {
            userId: user.id,
            eventId,
          },
        }
      );

      setSavedEvents(
        savedEvents.filter((event) => event._id !== eventId)
      );

      alert("Event Removed Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to remove event");
    }
  };

  return (
    <div className="saved-layout">
      <Sidebar />

      <div className="saved-page">
        <div className="saved-header">
          <h1>❤️ Saved Events</h1>
          <p>Manage your favourite events.</p>
        </div>

        <div className="saved-list">
          {savedEvents.length === 0 ? (
            <h2>No Saved Events</h2>
          ) : (
            savedEvents.map((event) => (
              <div
                className="saved-card"
                key={event._id}
              >
                <div>
                  <h2>{event.title}</h2>

                  <p>📅 {event.date}</p>

                  <p>📍 {event.location}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeEvent(event._id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedEvents;