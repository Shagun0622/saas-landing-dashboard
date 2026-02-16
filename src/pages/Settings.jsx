import { useState, useEffect } from "react";
import "./settings.css";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [theme, setTheme] = useState("dark");
  const [savedMessage, setSavedMessage] = useState("");

  // Load saved profile + theme
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const savedTheme = localStorage.getItem("theme");

    if (savedProfile) setProfile(savedProfile);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme globally
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    setSavedMessage("Settings saved successfully!");

    setTimeout(() => setSavedMessage(""), 2000);
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1>Settings</h1>

        <form onSubmit={handleSave} className="settings-form">

          {/* Profile Section */}
          <div className="settings-card">
            <h2>Profile Information</h2>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Theme Section */}
          <div className="settings-card">
            <h2>Appearance</h2>

            <div className="theme-toggle">
              <button
                type="button"
                className={theme === "dark" ? "active" : ""}
                onClick={() => setTheme("dark")}
              >
                🌙 Dark
              </button>

              <button
                type="button"
                className={theme === "light" ? "active" : ""}
                onClick={() => setTheme("light")}
              >
                ☀️ Light
              </button>
            </div>
          </div>

          <button type="submit" className="save-button">
            Save Changes
          </button>

          {savedMessage && (
            <p className="save-message">{savedMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
