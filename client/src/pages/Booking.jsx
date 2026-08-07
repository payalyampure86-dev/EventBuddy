import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./CommonPage.css";

function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "https://eventbuddy-33hc.onrender.com"
      );

      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="common-layout">
      <AdminSidebar />

      <div className="common-page">
        <h1>🎫 Booking Management</h1>

        <div className="common-card">
          <h2>All Bookings</h2>

          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.user?.name}</td>
                    <td>{booking.event?.title}</td>
                    <td>
                      {new Date(
                        booking.createdAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;