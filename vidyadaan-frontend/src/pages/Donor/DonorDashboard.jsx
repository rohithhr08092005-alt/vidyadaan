import { FiArrowRight, FiBell, FiDollarSign, FiHeart, FiHome, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";

const summaryCards = [
  { title: "Total Donated", value: "₹1.24L", icon: FiDollarSign, color: "from-blue-600 to-blue-500" },
  { title: "Schools Supported", value: "6", icon: FiHome, color: "from-orange-500 to-orange-600" },
  { title: "Students Impacted", value: "320", icon: FiUsers, color: "from-emerald-500 to-emerald-600" },
  { title: "Impact Score", value: "94%", icon: FiTrendingUp, color: "from-violet-500 to-violet-600" },
];

const recentDonations = [
  { school: "Govt. High School, Hyderabad", amount: "₹10,000", status: "Completed" },
  { school: "Rural School, Karimnagar", amount: "₹5,000", status: "Pending" },
  { school: "Model School, Warangal", amount: "₹15,000", status: "Completed" },
];

const recommendedSchools = [
  { name: "Government High School", location: "Hyderabad", progress: 78, goal: "₹2,00,000" },
  { name: "Rural Development School", location: "Karimnagar", progress: 61, goal: "₹1,50,000" },
  { name: "Model Primary School", location: "Warangal", progress: 82, goal: "₹3,00,000" },
];

function DonorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Donor Portal</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Welcome back, Asha</h1>
              <p className="mt-3 max-w-2xl text-sm text-blue-100 sm:text-base">Your generosity is creating brighter learning spaces for students across government schools.</p>
            </div>
            <button className="rounded-xl bg-white/15 px-4 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/25">View Impact Report</button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`inline-flex rounded-xl bg-gradient-to-r ${card.color} p-3 text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm text-slate-500">{card.title}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-800">{card.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Recent Donations</h2>
                <p className="text-sm text-slate-500">Your latest contributions</p>
              </div>
              <button className="text-sm font-medium text-blue-600">View All</button>
            </div>
            <div className="mt-5 space-y-3">
              {recentDonations.map((item) => (
                <div key={item.school} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div>
                    <p className="font-medium text-slate-800">{item.school}</p>
                    <p className="text-sm text-slate-500">{item.amount}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${item.status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Notifications</h2>
                <p className="text-sm text-slate-500">Fresh updates for you</p>
              </div>
              <div className="rounded-full bg-blue-50 p-2 text-blue-600"><FiBell className="h-4 w-4" /></div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                "School construction update received",
                "Your donation receipt is ready",
                "New school added to your saved list",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Recommended Schools</h2>
              <p className="text-sm text-slate-500">Verified schools that need your support</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">Explore <FiArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {recommendedSchools.map((school) => (
              <div key={school.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">{school.name}</p>
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">{school.location}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: `${school.progress}%` }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  <span>{school.progress}% funded</span>
                  <span>Goal: {school.goal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorDashboard;