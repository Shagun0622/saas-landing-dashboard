import {
  Users,
  Activity,
  TrendingUp,
  BarChart3,
  FileText,
  UserPlus,
  Download,
  Plus,
  Building2,
  MapPin
} from "lucide-react";

import useUsers from "../hooks/useUsers";

export default function Dashboard() {
  const { users, loading, error } = useUsers();

  // Derived stats (dynamic)
  const totalUsers = users.length;
  const totalCompanies = new Set(
    users.map((u) => u.company.name)
  ).size;

  const totalCities = new Set(
    users.map((u) => u.address.city)
  ).size;

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div className="main-header">
        <div>
          <h1 className="main-title">Overview</h1>
          <p className="main-subtitle">
            Welcome back! Here's what's happening with your dashboard
          </p>
        </div>

        <div className="header-actions">
          <button className="header-button">
            <Download size={16} />
            <span>Export</span>
          </button>
          <button className="header-button primary">
            <Plus size={16} />
            <span>Add New</span>
          </button>
        </div>
      </div>

      {/* ================= STATS GRID ================= */}
      <div className="content-grid">

        {/* Total Users */}
        <div className="stat-card">
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #a78bfa, #e98fd8)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Users size={24} color="white" />
            </div>

            <div>
              <div className="stat-value">
                {loading ? "..." : totalUsers}
              </div>
              <div className="stat-label">Total Users</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#10b981", fontSize: "13px" }}>
            <TrendingUp size={14} />
            <span>Live data from API</span>
          </div>
        </div>

        {/* Total Companies */}
        <div className="stat-card">
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Building2 size={24} color="white" />
            </div>

            <div>
              <div className="stat-value">
                {loading ? "..." : totalCompanies}
              </div>
              <div className="stat-label">Companies</div>
            </div>
          </div>

          <div style={{ fontSize: "13px", color: "#999" }}>
            Unique company names
          </div>
        </div>

        {/* Total Cities */}
        <div className="stat-card">
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <MapPin size={24} color="white" />
            </div>

            <div>
              <div className="stat-value">
                {loading ? "..." : totalCities}
              </div>
              <div className="stat-label">Cities Covered</div>
            </div>
          </div>

          <div style={{ fontSize: "13px", color: "#999" }}>
            Unique user locations
          </div>
        </div>

        {/* Success Rate (Static but UI Metric) */}
        <div className="stat-card">
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <BarChart3 size={24} color="white" />
            </div>

            <div>
              <div className="stat-value">100%</div>
              <div className="stat-label">API Status</div>
            </div>
          </div>

          <div style={{ fontSize: "13px", color: "#10b981" }}>
            All systems operational
          </div>
        </div>
      </div>

      {/* ================= RECENT ACTIVITY ================= */}
      <div className="content-card">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <Activity size={24} color="#a78bfa" />
          <h2 style={{ color: "white", margin: 0, fontSize: "20px", fontWeight: 600 }}>
            Recent Activity
          </h2>
        </div>

        {loading ? (
          <p style={{ color: "#999" }}>Loading activity...</p>
        ) : error ? (
          <p style={{ color: "#ef4444" }}>{error}</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {users.slice(0, 3).map((user) => (
              <div
                key={user.id}
                style={{
                  padding: "15px",
                  background: "#1a1a1f",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <Users size={20} color="#a78bfa" />
                <div>
                  <p style={{ color: "white", margin: 0, fontSize: "15px", fontWeight: 500 }}>
                    {user.name} joined the platform
                  </p>
                  <p style={{ color: "#666", margin: 0, fontSize: "13px" }}>
                    {user.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="content-card">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <Activity size={24} color="#a78bfa" />
          <h2 style={{ color: "white", margin: 0, fontSize: "20px", fontWeight: 600 }}>
            Quick Actions
          </h2>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button className="header-button">
            <FileText size={16} />
            <span>Create Report</span>
          </button>
          <button className="header-button">
            <UserPlus size={16} />
            <span>Invite Users</span>
          </button>
          <button className="header-button">
            <Download size={16} />
            <span>Export Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
