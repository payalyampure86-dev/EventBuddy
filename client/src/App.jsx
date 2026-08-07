import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageEvents from "./pages/ManageEvents";
import ManageRegistrations from "./pages/ManageRegistrations";
import Notifications from "./pages/Notifications";import Financial from "./pages/Financial";
import Booking from "./pages/Booking";
import Feedback from "./pages/Feedback";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import SavedEvents from "./pages/SavedEvents";
import MyRegistrations from "./pages/MyRegistrations";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminNotifications from "./pages/AdminNotifications";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(){

return(
<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route 
path="/admin-dashboard" 
element={<AdminDashboard/>}
/>
<Route
path="/manage-users"
element={<ManageUsers/>}
/>
<Route
path="/manage-events"
element={<ManageEvents/>}
/>
<Route
path="/manage-registrations"
element={<ManageRegistrations/>}
/>
<Route 
 path="/notifications" 
 element={<Notifications/>}
/>
  <Route path="/settings" element={<Settings />} />
<Route path="/my-registrations" element={<MyRegistrations />} />
<Route path="/saved-events" element={<SavedEvents />} />
  <Route path="/profile" element={<Profile />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/events" element={<Events />} />
<Route path="/financial" element={<Financial/>}/>
<Route
  path="/admin-notifications"
  element={<AdminNotifications />}
/>
<Route path="/create-event" element={<CreateEvent />} />
<Route path="/booking" element={<Booking/>}/>

<Route path="/feedback" element={<Feedback/>}/>
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

</Routes>
)

}

export default App;