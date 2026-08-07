import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./CommonPage.css";

function Financial() {

  const [report, setReport] = useState({
    totalRevenue: 0,
    totalBookings: 0,
    payments: [],
  });

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    try {

      const res = await axios.get(
        "https://eventbuddy-33hc.onrender.com"
      );

      setReport(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="common-layout">

      <AdminSidebar />

      <div className="common-page">

        <h1>💰 Financial Report</h1>

        <div className="common-card">

          <h2>Total Revenue</h2>

          <h1>₹ {report.totalRevenue}</h1>

          <p>Total Bookings : {report.totalBookings}</p>

        </div>

        <br />

        <div className="common-card">

          <h2>Payment History</h2>

          {report.payments.length === 0 ? (

            <p>No payments found.</p>

          ) : (

            <table>

              <thead>

                <tr>

                  <th>User</th>
                  <th>Email</th>
                  <th>Event</th>
                  <th>Amount</th>

                </tr>

              </thead>

              <tbody>

                {report.payments.map((item) => (

                  <tr key={item._id}>

                    <td>{item.user}</td>
                    <td>{item.email}</td>
                    <td>{item.event}</td>
                    <td>₹ {item.amount}</td>

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

export default Financial;