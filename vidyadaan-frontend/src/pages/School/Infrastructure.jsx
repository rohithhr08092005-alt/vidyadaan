import { FiCheckCircle, FiClock, FiCpu, FiDroplet, FiHome, FiMonitor, FiMoon, FiWifi } from "react-icons/fi";

const infrastructureItems = [
  { title: "Classrooms", icon: FiHome, status: "Good", progress: 88, lastUpdated: "2 days ago" },
  { title: "Computer Lab", icon: FiCpu, status: "Under Review", progress: 72, lastUpdated: "5 days ago" },
  { title: "Library", icon: FiMonitor, status: "Excellent", progress: 95, lastUpdated: "1 day ago" },
  { title: "Science Lab", icon: FiMoon, status: "Needs Upgrade", progress: 60, lastUpdated: "3 days ago" },
  { title: "Playground", icon: FiCheckCircle, status: "Good", progress: 85, lastUpdated: "4 days ago" },
  { title: "Smart Classroom", icon: FiMonitor, status: "Excellent", progress: 91, lastUpdated: "Today" },
  { title: "Drinking Water", icon: FiDroplet, status: "Needs Attention", progress: 64, lastUpdated: "1 week ago" },
  { title: "Toilets", icon: FiHome, status: "Good", progress: 83, lastUpdated: "2 days ago" },
  { title: "Electricity", icon: FiCheckCircle, status: "Stable", progress: 90, lastUpdated: "Today" },
  { title: "Internet", icon: FiWifi, status: "Improving", progress: 76, lastUpdated: "6 days ago" },
];

function Infrastructure() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Infrastructure</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800">School Facilities Overview</h1>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {infrastructureItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{item.status}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">{item.title}</h3>
                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: `${item.progress}%` }} />
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <FiClock className="h-4 w-4" />
                  <span>Last updated {item.lastUpdated}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
