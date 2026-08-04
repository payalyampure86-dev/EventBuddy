import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./Notifications.css";

function AdminNotifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Registration",
      message: "Payal registered for AI Workshop",
      time: "5 min ago",
    },
    {
      id: 2,
      title: "New Event",
      message: "Hackathon 2026 has been created.",
      time: "20 min ago",
    },
    {
      id: 3,
      title: "Certificate Generated",
      message: "Certificate generated successfully.",
      time: "1 hour ago",
    },
  ]);

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <div className="notifications-container">
          <h1>Notifications</h1>

          {notifications.map((item) => (
            <div className="notification-card" key={item.id}>
              <div className="notification-content">
                <h3>{item.title}</h3>
                <p>{item.message}</p>
                <small>{item.time}</small>
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

export default AdminNotifications;