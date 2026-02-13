import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <div className="sidebar">
        <h3>Admin Panel</h3>
        <a href="#">Dashboard</a>
        <a href="#">Users</a>
        <a href="#">Settings</a>
      </div>

      <div className="main-content">{children}</div>
    </div>
  );
}

export default AdminLayout;
