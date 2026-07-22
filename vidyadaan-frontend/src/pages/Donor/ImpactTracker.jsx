import { FiBarChart2 } from "react-icons/fi";

const impact = [
  { label: "Schools funded", value: "6" },
  { label: "Students impacted", value: "320" },
  { label: "Projects completed", value: "11" },
];

function ImpactTracker() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Impact Overview</p>
            <h1 className="mt-2 text-3xl font-semibold">Impact tracker</h1>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiBarChart2 className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {impact.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactTracker;
