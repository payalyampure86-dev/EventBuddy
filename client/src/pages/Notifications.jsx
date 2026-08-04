import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Notifications.css";

function Notifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Registration",
      message: "Payal registered for AI Workshop",
      time: "5 min ago"
    },
    {
      id: 2,
      title: "New Event",
      message: "Hackathon 2026 has been created.",
      time: "20 min ago"
    },
    {
      id: 3,
      title: "Certificate Generated",
      message: "Certificate generated successfully.",
      time: "1 hour ago"
    }
  ]);

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((item) => item.id !== id)
    );
  };

  return (
  <div className="layout">

    <Sidebar />

    <div className="main-content">

      <div className="notifications-container">

        <h1>Notifications</h1>

        {notifications.map((item) => (
          <div className="notification-card" key={item.id}>

            <div className="notification-content">
              <h3>{item.title}</h3>
              <p>{item.message}</p>
              <span className="notification-time">{item.time}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteNotification(item.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>

  </div>
);
}

export default Notifications;