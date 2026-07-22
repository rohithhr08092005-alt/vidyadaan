import { FiArrowRight, FiGlobe, FiMail, FiPhone } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

function NGODetails() {
  return (
    <AdminShell title="NGO Details" subtitle="Review NGO registration, projects, and partner schools.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Sahyog Foundation</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3"><FiMail className="text-blue-500" /> contact@sahyog.org</div>
            <div className="flex items-center gap-3"><FiPhone className="text-blue-500" /> +91 98999 12121</div>
            <div className="flex items-center gap-3"><FiGlobe className="text-emerald-500" /> Hyderabad, Telangana</div>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Mission: Improve digital access and sanitation facilities in rural schools.</div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800">Active Projects</h3>
          <div className="mt-5 space-y-3">
            {['Smart Classrooms • 3 schools', 'Sanitation Drive • 5 schools', 'Scholarship Support • 2 schools'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <span>{item}</span>
                <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">View <FiArrowRight className="h-4 w-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default NGODetails;
