import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminDashboard.css";
function AdminDashboard()
{
return(
<div className="admin-layout">
<AdminSidebar/>
<div className="admin-content">
<h1>
Admin Dashboard
</h1>
<p>
Welcome back Admin 👋
</p>
<div className="admin-cards">
<div className="admin-card">
<h2>120</h2>
<p>Total Users</p>
</div>
<div className="admin-card">
<h2>35</h2>
<p>Total Events</p>
</div>
<div className="admin-card">
<h2>250</h2>
<p>Total Registrations</p>
</div>
<div className="admin-card">
<h2>15</h2>
<p>Pending Requests</p>
</div>
</div>
<div className="recent-box">
<h2>
Recent Activity
</h2>
<p>
✅ New user registered
</p>
<p>
📅 New event created
</p>
<p>
📝 Registration completed
</p>
</div>
</div>
</div>
)
}
export default AdminDashboard;