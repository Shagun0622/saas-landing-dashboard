import { useState, useEffect } from "react";
import useUsers from "../hooks/useUsers";
import "./user.css";

export default function Users() {
  const { users, loading, error } = useUsers();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null); // ✅ NEW

  const usersPerPage = 5;

  // 🔍 Search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // 🔄 Sort
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  // 📄 Pagination
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  // ✅ ESC key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedUser(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 🔥 Loading State
  if (loading) {
    return (
      <div className="users-page">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading users...</p>
        </div>
      </div>
    );
  }

  // 🔥 Error State
  if (error) {
    return (
      <div className="users-page">
        <div className="error-state">
          <span className="error-icon">⚠️</span>
          <p className="error-text">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <div className="users-container">

        {/* Header */}
        <div className="users-header">
          <h1>Users</h1>
          <p>Manage and view all users in the system</p>
        </div>

        {/* Stats */}
        <div className="users-stats">
          <div className="stat-card">
            <div className="stat-value">{users.length}</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{sortedUsers.length}</div>
            <div className="stat-label">Filtered Results</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalPages}</div>
            <div className="stat-label">Total Pages</div>
          </div>
        </div>

        {/* Search + Sort */}
        <div className="users-controls">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search by name or email"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">📈 A–Z</option>
            <option value="desc">📉 Z–A</option>
          </select>
        </div>

        {/* User List */}
        {currentUsers.length > 0 ? (
          <ul className="users-list">
            {currentUsers.map((user) => (
              <li
                key={user.id}
                className="user-card"
                onClick={() => setSelectedUser(user)} // ✅ clickable
                style={{ cursor: "pointer" }}
              >
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
                <div className="user-company">{user.company.name}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <p className="empty-text">No users found matching your search</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`pagination-button ${
                  currentPage === i + 1 ? "active" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selectedUser && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <p><strong>Company:</strong> {selectedUser.company.name}</p>
            <p>
              <strong>Address:</strong>{" "}
              {selectedUser.address.street}, {selectedUser.address.city}
            </p>

            <button
              className="modal-close"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
