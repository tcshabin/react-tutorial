import AdminLayout from "../../../layouts/AdminLayout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="dashboard-card">
        <h1>Welcome to Admin Dashboard</h1>
        <p>This is your admin module dashboard</p>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
