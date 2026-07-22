import { FiFilter, FiHeart, FiMapPin, FiSearch, FiTarget } from "react-icons/fi";

const projects = [
  { name: "Digital Learning Lab", location: "Hyderabad", priority: "High", funding: "₹2.4L", status: "Open" },
  { name: "Science Resource Center", location: "Karimnagar", priority: "Medium", funding: "₹1.6L", status: "Review" },
  { name: "Library Upgrade", location: "Warangal", priority: "Low", funding: "₹1.1L", status: "Open" },
];

function BrowseProjects() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Projects</p>
              <h1 className="mt-2 text-3xl font-semibold">Browse school projects</h1>
              <p className="mt-2 text-sm text-slate-500">Review opportunities, evaluate funding needs, and assign projects to your team.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiSearch className="text-slate-400" />
                <input className="bg-transparent text-sm outline-none" placeholder="Search projects" />
              </div>
              <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600">
                <FiFilter className="h-4 w-4" /> Filter
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{project.name}</h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500"><FiMapPin className="text-emerald-500" /> {project.location}</div>
                </div>
                <button className="rounded-full bg-emerald-50 p-2 text-emerald-600"><FiHeart className="h-4 w-4" /></button>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">Funding required</span>
                  <span className="font-semibold text-slate-800">{project.funding}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>Priority: {project.priority}</span>
                  <span>Status: {project.status}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600"><FiTarget className="h-3.5 w-3.5" /> {project.priority}</div>
                <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white">Assign Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseProjects;
