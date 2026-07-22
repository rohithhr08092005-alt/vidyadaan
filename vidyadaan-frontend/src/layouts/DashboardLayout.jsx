import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen p-6">
      <Outlet />
    </div>
  );
}

export default DashboardLayout;