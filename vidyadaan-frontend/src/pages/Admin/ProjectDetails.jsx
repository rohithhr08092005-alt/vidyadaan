import { FiCheckCircle, FiDollarSign, FiFlag, FiUsers } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

function ProjectDetails() {
  return (
    <AdminShell title="Project Details" subtitle="Inspect project milestones, funding, and implementation progress.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Smart Classroom Setup</h2>
          <p className="mt-2 text-sm text-slate-500">ZPHS Chintal • Medchal</p>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3"><FiDollarSign className="text-emerald-500" /> Funding raised: ₹6.3L</div>
            <div className="flex items-center gap-3"><FiUsers className="text-blue-500" /> Beneficiaries: 180 students</div>
            <div className="flex items-center gap-3"><FiFlag className="text-orange-500" /> Deadline: 24 Aug 2026</div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800">Milestones</h3>
          <div className="mt-5 space-y-3">
            {['Needs assessment completed', 'Procurement in progress', 'Installation scheduled'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <FiCheckCircle className="text-emerald-500" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default ProjectDetails;
