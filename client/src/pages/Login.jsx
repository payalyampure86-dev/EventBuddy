import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaCalendarAlt } from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
  "http://localhost:5000/api/auth/login",
  formData
);

      console.log("LOGIN SUCCESS:", res.data);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      if (res.data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
   } catch (err) {
  console.log("STATUS:", err.response?.status);
  console.log("DATA:", JSON.stringify(err.response?.data, null, 2));
  console.log("MESSAGE:", err.message);

  setError(
    err.response?.data?.message ||
    "Login Failed"
  );
}
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="brand">
          <FaCalendarAlt className="logo-icon" />

          <h1>EventBuddy</h1>
        </div>

        <h2>
          Connect.
          <br />
          Celebrate.
          <br />
          Create Memories.
        </h2>

        <p>
          Discover amazing events,
          connect with people and
          manage your events easily.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-card">

        <form onSubmit={handleLogin}>

          <h2>Welcome Back 👋</h2>

          <p className="subtitle">
            Login to your EventBuddy account
          </p>

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          <div className="role-box">

            <button
              type="button"
              className={
                formData.role === "user"
                  ? "active-role"
                  : ""
              }
              onClick={() =>
                setFormData({
                  ...formData,
                  role: "user",
                })
              }
            >
              User
            </button>

            <button
              type="button"
              className={
                formData.role === "admin"
                  ? "active-role"
                  : ""
              }
              onClick={() =>
                setFormData({
                  ...formData,
                  role: "admin",
                })
              }
            >
              Admin
            </button>

          </div>

          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;