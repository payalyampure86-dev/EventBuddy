import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="admin-sidebar">

      <h2>EventBuddy</h2>

      <p className="admin-role">
        Admin Panel
      </p>

      <Link to="/admin-dashboard">
        🏠 Dashboard
      </Link>
<Link to="/create-event">
  ➕ Create Event
</Link>
      <Link to="/manage-events">
        📅 Manage Events
      </Link>

      <Link to="/manage-users">
        👥 Manage Users
      </Link>

      <Link to="/manage-registrations">
        📝 Registrations
      </Link>

      <Link to="/booking">
        📋 Booking
      </Link>

      <Link to="/financial">
        💰 Financial
      </Link>

      <Link to="/feedback">
        ⭐ Feedback
      </Link>

      <Link to="/admin-notifications">
  🔔 Notifications
</Link>

      <button
        className="logout-btn"
        onClick={logout}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default AdminSidebar;