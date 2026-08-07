import React, { useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./CreateEvent.css";

function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    organizer: "",
    description: "",
    fee: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://eventbuddy-33hc.onrender.com", formData);

      alert("✅ Event Created Successfully!");

      setFormData({
        title: "",
        category: "",
        date: "",
        time: "",
        location: "",
        organizer: "",
        description: "",
        fee: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to create event");
    }
  };

  return (
    <>
      <AdminSidebar />

      <div className="create-event-container">
        <div className="create-event-card">

          <h1>➕ Create Event</h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="organizer"
              placeholder="Organizer"
              value={formData.organizer}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="fee"
              placeholder="Event Fee (₹)"
              value={formData.fee}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Event Description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Create Event
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default CreateEvent;