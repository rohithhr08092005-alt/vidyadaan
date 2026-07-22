import {
  FiBarChart2,
  FiClipboard,
  FiDollarSign,
  FiGift,
  FiHome,
  FiPieChart,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const stats = [
  { title: "Total Students", value: "1240", icon: FiUsers, color: "from-blue-500 to-blue-600" },
  { title: "Teachers", value: "42", icon: FiHome, color: "from-orange-500 to-orange-600" },
  { title: "Active Issues", value: "7", icon: FiClipboard, color: "from-rose-500 to-rose-600" },
  { title: "Total Donations", value: "₹8.2L", icon: FiDollarSign, color: "from-emerald-500 to-emerald-600" },
  { title: "Active Projects", value: "5", icon: FiGift, color: "from-violet-500 to-violet-600" },
  { title: "School Development Score", value: "92%", icon: FiTrendingUp, color: "from-cyan-500 to-cyan-600" },
];

const donationData = [65, 82, 74, 91, 88, 103, 112];
const issueData = [4, 2, 1];
const projectData = [30, 55, 78, 92];

const activityItems = [
  { title: "Donation milestone reached", time: "2h ago", detail: "₹50,000 received for the science lab upgrade." },
  { title: "Infrastructure issue updated", time: "4h ago", detail: "Electricity repair request is now in progress." },
  { title: "NGO proposal approved", time: "Yesterday", detail: "A new NGO partner is assigned to the library project." },
];

const notifications = [
  "New donation received from S. Sharma",
  "Project proposal approved by the district office",
  "Reminder: complete the computer lab inspection",
];

const tasks = [
  "Verify pending classroom repair requests",
  "Review donor receipts for the week",
  "Upload completion photos for the library project",
];

function PrincipalDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Principal Portal</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">VIDYADAAN School Overview</h1>
              <p className="mt-3 max-w-2xl text-sm text-blue-100 sm:text-base">
                Track donations, monitor infrastructure issues, and oversee school development activities in one place.
              </p>
            </div>
            <div className="rounded-xl bg-white/15 px-4 py-3 text-sm backdrop-blur">
              <p className="font-medium">Last Updated</p>
              <p className="text-lg font-semibold">Today, 09:30 AM</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`inline-flex rounded-xl bg-gradient-to-r ${stat.color} p-3 text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm text-slate-500">{stat.title}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-800">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg xl:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">Monthly Donations</h2>
                <p className="text-sm text-slate-500">Donation trend for the current academic year</p>
              </div>
              <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">+18% Growth</div>
            </div>
            <div className="mt-6 flex h-48 items-end gap-3">
              {donationData.map((value, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${value}%` }} />
                  <span className="text-xs text-slate-500">W{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-800">Issue Status</h2>
            <div className="mt-6 space-y-4">
              {issueData.map((value, index) => (
                <div key={index}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-600">{index === 0 ? "Resolved" : index === 1 ? "In Progress" : "Pending"}</span>
                    <span className="font-medium text-slate-800">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: `${value * 20}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">Project Progress</h2>
                <p className="text-sm text-slate-500">Milestones across active projects</p>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">On Track</div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {projectData.map((value, index) => (
                <div key={index}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-600">{["Library", "Lab", "Playground", "Water Supply"][index]}</span>
                    <span className="font-medium text-slate-800">{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-800">Recent Activity</h2>
            <div className="mt-4 space-y-3">
              {activityItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-slate-700">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800">Notifications</h2>
              <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">View All</button>
            </div>
            <div className="mt-4 space-y-3">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm text-slate-600">{notification}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-800">Upcoming Tasks</h2>
            <ul className="mt-4 space-y-3">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                  <FiPieChart className="h-4 w-4 text-orange-500" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalDashboard;
