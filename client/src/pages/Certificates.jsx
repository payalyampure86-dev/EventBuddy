import React, { useState } from "react";
import "./Certificates.css";

function Certificates() {

  const [certificates] = useState([
    {
      id: 1,
      name: "Payal Yampure",
      event: "AI Workshop",
      date: "20 Aug 2026",
    },
    {
      id: 2,
      name: "Rahul Patil",
      event: "Hackathon",
      date: "25 Aug 2026",
    },
    {
      id: 3,
      name: "Sneha Sharma",
      event: "Music Fest",
      date: "30 Aug 2026",
    },
  ]);

  return (
    <div className="certificate-container">

      <div className="certificate-header">
        <h1>Certificates</h1>
      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Participant</th>
            <th>Event</th>
            <th>Date</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody>

          {certificates.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.event}</td>
              <td>{item.date}</td>

              <td>

                <button className="download-btn">
                  Download
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Certificates;