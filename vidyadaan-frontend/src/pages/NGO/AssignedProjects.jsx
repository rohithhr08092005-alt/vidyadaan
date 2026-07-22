import { FiArrowRight, FiBriefcase, FiCalendar, FiTarget } from "react-icons/fi";

const assignedProjects = [
  { name: "Computer Lab Setup", progress: 78, deadline: "18 Aug", owner: "Ravi" },
  { name: "Library Renovation", progress: 55, deadline: "30 Aug", owner: "Anjali" },
  { name: "Water Purifier Installation", progress: 90, deadline: "10 Aug", owner: "Sowmya" },
];

function AssignedProjects() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Operations</p>
              <h1 className="mt-2 text-3xl font-semibold">Assigned projects</h1>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiBriefcase className="h-5 w-5" /></div>
          </div>
        </div>

        <div className="space-y-4">
          {assignedProjects.map((project) => (
            <div key={project.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{project.name}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-2"><FiTarget className="text-emerald-500" /> Assigned to {project.owner}</span>
                    <span className="flex items-center gap-2"><FiCalendar className="text-emerald-500" /> Deadline {project.deadline}</span>
                  </div>
                </div>
                <div className="w-full max-w-xs">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                    <span>{project.progress}% complete</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white">Open <FiArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignedProjects;
