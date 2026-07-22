import { FiHeart, FiMapPin, FiSearch, FiTarget } from "react-icons/fi";

const schools = [
  { name: "Government High School", location: "Hyderabad", need: "Classroom renovation", raised: "₹1.2L", goal: "₹2L", urgency: "High" },
  { name: "Rural Development School", location: "Karimnagar", need: "Digital lab setup", raised: "₹85K", goal: "₹1.5L", urgency: "Medium" },
  { name: "Model Primary School", location: "Warangal", need: "Library upgrade", raised: "₹1.5L", goal: "₹3L", urgency: "Low" },
];

function BrowseSchools() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Discover Schools</p>
              <h1 className="mt-2 text-3xl font-semibold">Browse impact projects</h1>
              <p className="mt-2 text-sm text-slate-500">Support schools that need learning infrastructure, labs, and safe classrooms.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiSearch className="text-slate-400" />
              <input className="w-full bg-transparent text-sm outline-none" placeholder="Search schools" />
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {schools.map((school) => (
            <div key={school.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{school.name}</h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <FiMapPin className="text-blue-500" /> {school.location}
                  </div>
                </div>
                <button className="rounded-full bg-red-50 p-2 text-red-500"><FiHeart className="h-4 w-4" /></button>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <FiTarget className="text-orange-500" /> {school.need}
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: "70%" }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  <span>Raised {school.raised}</span>
                  <span>Goal {school.goal}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">Urgency: {school.urgency}</span>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">Donate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseSchools;
