import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");

    navigate("/login");
  };

  return (
    <div className="sidebar">

      <h2>EventBuddy</h2>

      <Link to="/dashboard">🏠 Dashboard</Link>

      <Link to="/events">📅 Events</Link>

      <Link to="/saved-events">❤️ Saved Events</Link>

      <Link to="/my-registrations">📝 My Registrations</Link>
<Link to="/notifications">
  🔔 Notifications
</Link>

      <Link to="/profile">👤 Profile</Link>

      <Link to="/settings">⚙️ Settings</Link>

      <button
        className="logout-btn"
        onClick={logout}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;