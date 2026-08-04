import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUserShield,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import API from "../api";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: role,
      });

      alert(res.data.message || "Registration Successful ✅");

      navigate("/login");
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-logo">
          Event<span>Buddy</span>
        </div>

        <h2>Create Account</h2>

        <p>
          Join EventBuddy and discover amazing events.
        </p>

        {/* ROLE */}

        <div className="role-selector">

          <button
            type="button"
            className={
              role === "user" ? "active" : ""
            }
            onClick={() => setRole("user")}
          >
            <FaUser />
            User
          </button>

          <button
            type="button"
            className={
              role === "admin" ? "active" : ""
            }
            onClick={() => setRole("admin")}
          >
            <FaUserShield />
            Admin
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          <div className="password-box">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={
                formData.confirmPassword
              }
              onChange={handleChange}
              required
            />

            <span
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          <button
            className="register-btn"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;