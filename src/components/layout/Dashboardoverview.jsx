import { 
  Users, 
  DollarSign, 
  Activity, 
  TrendingUp,
  FileText,
  UserPlus,
  BarChart3,
  Download,
  Plus
} from "lucide-react";
import "./DashboardLayout.css";

export default function DashboardOverview() {
  return (
    <div>
      {/* Page Header */}
      <div className="main-header">
        <div>
          <h1 className="main-title">Overview</h1>
          <p className="main-subtitle">Welcome back! Here's what's happening with your dashboard</p>
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

      {/* Stats Grid */}
      <div className="content-grid">
        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: 'linear-gradient(135deg, #a78bfa, #e98fd8)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={24} color="white" />
            </div>
            <div>
              <div className="stat-value">2,543</div>
              <div className="stat-label">Total Users</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', fontSize: '13px' }}>
            <TrendingUp size={14} />
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DollarSign size={24} color="white" />
            </div>
            <div>
              <div className="stat-value">$12,345</div>
              <div className="stat-label">Revenue</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', fontSize: '13px' }}>
            <TrendingUp size={14} />
            <span>+8% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Activity size={24} color="white" />
            </div>
            <div>
              <div className="stat-value">342</div>
              <div className="stat-label">Active Sessions</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', fontSize: '13px' }}>
            <TrendingUp size={14} />
            <span>+5% from last hour</span>
          </div>
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BarChart3 size={24} color="white" />
            </div>
            <div>
              <div className="stat-value">98.5%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', fontSize: '13px' }}>
            <TrendingUp size={14} />
            <span>+2% from last week</span>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="content-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <Activity size={24} color="#a78bfa" />
          <h2 style={{ color: 'white', margin: 0, fontSize: '20px', fontWeight: 600 }}>Recent Activity</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ 
            padding: '15px', 
            background: '#1a1a1f', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'rgba(167, 139, 250, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={20} color="#a78bfa" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', margin: 0, fontSize: '15px', fontWeight: 500 }}>New user registered</p>
              <p style={{ color: '#666', margin: 0, fontSize: '13px' }}>2 minutes ago</p>
            </div>
          </div>

          <div style={{ 
            padding: '15px', 
            background: '#1a1a1f', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'rgba(16, 185, 129, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DollarSign size={20} color="#10b981" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', margin: 0, fontSize: '15px', fontWeight: 500 }}>New payment received</p>
              <p style={{ color: '#666', margin: 0, fontSize: '13px' }}>15 minutes ago</p>
            </div>
          </div>

          <div style={{ 
            padding: '15px', 
            background: '#1a1a1f', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileText size={20} color="#3b82f6" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', margin: 0, fontSize: '15px', fontWeight: 500 }}>Report generated</p>
              <p style={{ color: '#666', margin: 0, fontSize: '13px' }}>1 hour ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <Activity size={24} color="#a78bfa" />
          <h2 style={{ color: 'white', margin: 0, fontSize: '20px', fontWeight: 600 }}>Quick Actions</h2>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="header-button">
            <FileText size={16} />
            <span>Create Report</span>
          </button>
          <button className="header-button">
            <UserPlus size={16} />
            <span>Invite Users</span>
          </button>
          <button className="header-button">
            <BarChart3 size={16} />
            <span>View Analytics</span>
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