const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://eventbuddy-frontend.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("EventBuddy Backend Running 🚀");
});


const PORT = process.env.PORT || 5000;


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected Successfully ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {

    console.log("MongoDB Connection Error:", err);

  });


// MongoDB Events
mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Error:", err);
});