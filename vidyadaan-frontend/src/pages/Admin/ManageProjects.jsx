import { FiEye, FiFilter, FiSearch, FiTrendingUp } from 'react-icons/fi';
import AdminShell from './components/AdminShell';
import { projects } from './data';

function ManageProjects() {
  return (
    <AdminShell title="Manage Projects" subtitle="Monitor school projects, funding progress, and completion status.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">{project.title}</h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">{project.status}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{project.school}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: `${project.progress}%` }}></div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <span>{project.progress}% funded</span>
                <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-blue-600"><FiEye className="h-4 w-4" /> View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

export default ManageProjects;
