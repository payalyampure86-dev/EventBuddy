import React, { useState } from "react";
import "./AdminSettings.css";

function AdminSettings() {

  const [settings, setSettings] = useState({
    siteName: "EventBuddy",
    email: "admin@eventbuddy.com",
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveSettings = () => {
    alert("Settings Saved Successfully ✅");
  };

  return (
    <div className="settings-container">

      <h1>Admin Settings</h1>

      <div className="settings-card">

        <label>Website Name</label>

        <input
          type="text"
          name="siteName"
          value={settings.siteName}
          onChange={handleChange}
        />

        <label>Admin Email</label>

        <input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
        />

        <div className="toggle">

          <label>Enable Dark Mode</label>

          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
          />

        </div>

        <button onClick={saveSettings}>
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default AdminSettings;