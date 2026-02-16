import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Fake auth logic
    localStorage.setItem("token", "fake-jwt-token");

    if (formData.rememberMe) {
      localStorage.setItem("rememberMe", "true");
    }

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <span>Squid</span>
        </div>

        <div className="auth-card">
          <h1>Welcome Back</h1>
          <p className="auth-subtitle">
            Sign in to continue to your account
          </p>

          <form onSubmit={handleSubmit}>
            {error && <p className="auth-error">{error}</p>}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" className="auth-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
