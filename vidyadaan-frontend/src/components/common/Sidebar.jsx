import { Link } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Profile", to: "/profile" },
  { label: "Projects", to: "/projects" },
  { label: "Issues", to: "/issues" },
  { label: "Donations", to: "/donations" },
  { label: "Transparency", to: "/transparency" },
  { label: "Settings", to: "/settings" },
  { label: "Verify Schools", to: "/verify-schools" },
  { label: "Manage Schools", to: "/manage-schools" },
  { label: "Manage Donors", to: "/manage-donors" },
  { label: "Manage NGOs", to: "/manage-ngos" },
  { label: "Manage Projects", to: "/manage-projects" },
  { label: "Analytics", to: "/analytics" },
];

function Sidebar({ onNavigate }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-6 px-2">
        <h2 className="text-lg font-semibold text-slate-800">Menu</h2>
        <p className="text-sm text-slate-500">Manage your portal</p>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-lg bg-slate-100 p-3">
        <button
          type="button"
          className="w-full rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
