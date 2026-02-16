import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  return (
    <div className="dashboard-layout">
      
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <svg className="sidebar-logo" width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="15" r="6" fill="white"/>
            <circle cx="18" cy="35" r="6" fill="white"/>
            <circle cx="42" cy="35" r="6" fill="white"/>
            <path d="M30 21 L18 29 M30 21 L42 29 M18 35 L30 43 M42 35 L30 43" stroke="white" strokeWidth="3"/>
          </svg>
          <h2 className="sidebar-title">Dashboard</h2>
        </div>

        {/* User Profile (Optional) */}
        <div className="sidebar-profile">
          <div className="profile-avatar">
            JD
          </div>
          <div className="profile-info">
            <p className="profile-name">John Doe</p>
            <p className="profile-email">john@example.com</p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="sidebar-nav">
          <li className="nav-item">
            <div 
              className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
              onClick={() => handleNavClick('/dashboard')}
            >
              <LayoutDashboard className="nav-icon" size={20} />
              <span>Overview</span>
            </div>
          </li>
          <li className="nav-item">
            <div 
              className={`nav-link ${isActive('/dashboard/users') ? 'active' : ''}`}
              onClick={() => handleNavClick('/dashboard/users')}
            >
              <Users className="nav-icon" size={20} />
              <span>Users</span>
            </div>
          </li>
          <li className="nav-item">
            <div 
              className={`nav-link ${isActive('/dashboard/settings') ? 'active' : ''}`}
              onClick={() => handleNavClick('/dashboard/settings')}
            >
              <Settings className="nav-icon" size={20} />
              <span>Settings</span>
            </div>
          </li>
        </ul>

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}