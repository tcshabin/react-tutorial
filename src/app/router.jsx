import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../modules/auth/pages/Login";
import Dashboard from "../modules/admin/pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
