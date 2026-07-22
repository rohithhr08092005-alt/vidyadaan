import { FiBookOpen, FiCheckCircle, FiClock, FiUsers } from "react-icons/fi";
import { BarChart, Bar, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import AdminShell from './components/AdminShell';
import { overviewStats, monthlyDonations, projectStatus, stateSchools, notifications } from './data';

const colors = ['#2563EB', '#F97316', '#22C55E', '#EF4444'];

function StatCard({ label, value, change, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`inline-flex rounded-xl bg-gradient-to-r ${color} p-3 text-white`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-800">{value}</p>
        <span className="text-sm font-medium text-emerald-600">{change}</span>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <AdminShell title="Admin Dashboard" subtitle="Monitor schools, donors, NGOs, funding, and project progress in one place.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewStats.slice(0, 4).map((item) => {
          const iconMap = {
            FiSchool: FiBookOpen,
            FiCheckCircle,
            FiClock,
            FiUsers,
          };
          const Icon = iconMap[item.icon] || FiBookOpen;
          return <StatCard key={item.label} label={item.label} value={item.value} change={item.change} icon={Icon} color={item.color} />;
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Monthly Donations</h2>
              <p className="text-sm text-slate-500">Funds received over time</p>
            </div>
            <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">+22%</div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyDonations}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#2563EB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Project Status</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={projectStatus} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={3}>
                  {projectStatus.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">State-wise Schools</h2>
              <p className="text-sm text-slate-500">Distribution by state</p>
            </div>
            <div className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">Live data</div>
          </div>
          <div className="mt-5 space-y-4">
            {stateSchools.map((item) => (
              <div key={item.state}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{item.state}</span>
                  <span>{item.schools} schools</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500" style={{ width: `${(item.schools / 58) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Recent Activities</h2>
          <div className="mt-5 space-y-3">
            {notifications.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-medium text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Pending School Approvals</h2>
          <div className="mt-5 space-y-3">
            {['ZPHS Chintal', 'GHS Keesara'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-medium text-slate-800">{item}</p>
                  <p className="text-sm text-slate-500">Requires review before verification</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white">Review</button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Quick Actions</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Verify Schools', 'Manage NGOs', 'View Reports', 'Create Notification'].map((action) => (
              <button key={action} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-700">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default AdminDashboard;