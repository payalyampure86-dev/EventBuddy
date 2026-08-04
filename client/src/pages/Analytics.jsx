import React from "react";
import "./Analytics.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", users: 30 },
  { month: "Feb", users: 45 },
  { month: "Mar", users: 60 },
  { month: "Apr", users: 80 },
  { month: "May", users: 95 },
  { month: "Jun", users: 120 },
];

const eventData = [
  { name: "Tech", value: 40 },
  { name: "Music", value: 25 },
  { name: "Sports", value: 20 },
  { name: "Workshop", value: 15 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

function Analytics() {
  return (
    <div className="analytics">

      <h1>Analytics Dashboard</h1>

      <div className="analytics-cards">

        <div className="analytics-card">
          <h3>Total Users</h3>
          <h2>620</h2>
        </div>

        <div className="analytics-card">
          <h3>Total Events</h3>
          <h2>45</h2>
        </div>

        <div className="analytics-card">
          <h3>Registrations</h3>
          <h2>1280</h2>
        </div>

        <div className="analytics-card">
          <h3>Revenue</h3>
          <h2>₹75,000</h2>
        </div>

      </div>

      <div className="charts">

        <div className="chart-box">

          <h2>Monthly Users</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={monthlyData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="users"
                fill="#2563EB"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="chart-box">

          <h2>Event Categories</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie
                data={eventData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {eventData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Analytics;