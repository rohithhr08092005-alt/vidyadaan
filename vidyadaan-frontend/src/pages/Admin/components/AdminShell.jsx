import { FiBell, FiSearch } from "react-icons/fi";

function AdminShell({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Super Admin</p>
              <h1 className="mt-2 text-3xl font-semibold">{title}</h1>
              <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiSearch className="text-slate-400" />
                <input className="w-32 bg-transparent text-sm outline-none sm:w-44" placeholder="Search" />
              </div>
              <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                <FiBell className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AdminShell;
