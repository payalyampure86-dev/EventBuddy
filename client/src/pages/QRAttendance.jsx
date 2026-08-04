import React, { useState } from "react";
import "./QRAttendance.css";

function QRAttendance() {

  const [attendance, setAttendance] = useState([
    {
      id: 1,
      name: "Payal Yampure",
      event: "AI Workshop",
      qr: "QR001",
      status: "Present",
    },
    {
      id: 2,
      name: "Rahul Patil",
      event: "Hackathon",
      qr: "QR002",
      status: "Absent",
    },
    {
      id: 3,
      name: "Sneha Sharma",
      event: "Music Fest",
      qr: "QR003",
      status: "Present",
    },
  ]);

  const toggleStatus = (id) => {
    setAttendance(
      attendance.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Present"
                  ? "Absent"
                  : "Present",
            }
          : item
      )
    );
  };

  return (
    <div className="qr-container">

      <div className="qr-header">

        <h1>QR Attendance</h1>

        <button className="scan-btn">
          Scan QR
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Event</th>
            <th>QR Code</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {attendance.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>{item.event}</td>

              <td>{item.qr}</td>

              <td>

                <span
                  className={
                    item.status === "Present"
                      ? "present"
                      : "absent"
                  }
                >
                  {item.status}
                </span>

              </td>

              <td>

                <button
                  className="mark-btn"
                  onClick={() =>
                    toggleStatus(item.id)
                  }
                >
                  Mark
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default QRAttendance;