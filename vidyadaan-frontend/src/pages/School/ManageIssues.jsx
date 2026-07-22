import { useMemo, useState } from "react";
import { FiEdit2, FiEye, FiFilter, FiTrash2 } from "react-icons/fi";

const issues = [
  { title: "Classroom Fan Repair", category: "Maintenance", budget: "₹20,000", collected: "₹12,500", priority: "High", status: "In Progress", created: "2026-06-10" },
  { title: "Computer Lab Upgrade", category: "Infrastructure", budget: "₹75,000", collected: "₹48,000", priority: "Medium", status: "Verified", created: "2026-06-21" },
  { title: "Water Filter Replacement", category: "Utilities", budget: "₹15,000", collected: "₹9,000", priority: "Low", status: "Pending", created: "2026-07-01" },
];

function ManageIssues() {
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");

  const filteredIssues = useMemo(() => {
    return issues.filter((item) => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      const matchesPriority = priority === "All" || item.priority === priority;
      const matchesStatus = status === "All" || item.status === status;
      const matchesCategory = category === "All" || item.category === category;
      return matchesQuery && matchesPriority && matchesStatus && matchesCategory;
    });
  }, [query, priority, status, category]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Issue Management</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800">Manage Issues</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search issues" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
              <FiFilter className="text-slate-500" />
              <select value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-transparent outline-none">
                <option value="All">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none">
              <option value="All">Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Verified">Verified</option>
              <option value="Pending">Pending</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none">
              <option value="All">Category</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th className="px-3 py-3 font-medium">Issue</th>
                <th className="px-3 py-3 font-medium">Category</th>
                <th className="px-3 py-3 font-medium">Budget</th>
                <th className="px-3 py-3 font-medium">Collected</th>
                <th className="px-3 py-3 font-medium">Priority</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Created</th>
                <th className="px-3 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredIssues.map((item) => (
                <tr key={item.title} className="text-sm text-slate-600">
                  <td className="px-3 py-3 font-medium text-slate-800">{item.title}</td>
                  <td className="px-3 py-3">{item.category}</td>
                  <td className="px-3 py-3">{item.budget}</td>
                  <td className="px-3 py-3">{item.collected}</td>
                  <td className="px-3 py-3"><span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">{item.priority}</span></td>
                  <td className="px-3 py-3"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">{item.status}</span></td>
                  <td className="px-3 py-3">{item.created}</td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"><FiEye className="h-4 w-4" /></button>
                      <button className="rounded-lg bg-orange-50 p-2 text-orange-600 transition hover:bg-orange-100"><FiEdit2 className="h-4 w-4" /></button>
                      <button className="rounded-lg bg-rose-50 p-2 text-rose-600 transition hover:bg-rose-100"><FiTrash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageIssues;
