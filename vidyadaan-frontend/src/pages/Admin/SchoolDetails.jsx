import { FiBookOpen, FiCalendar, FiCamera, FiDollarSign, FiFlag, FiMapPin, FiUsers } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

function SchoolDetails() {
  return (
    <AdminShell title="School Details" subtitle="Inspect school profile, infrastructure, projects, and funding history.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">ZPHS Chintal</h2>
              <p className="mt-2 text-sm text-slate-500">Government school in Medchal district</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">Verified</span>
          </div>
          <div className="mt-5 rounded-3xl bg-slate-100 p-10 text-center text-slate-500">
            <FiCamera className="mx-auto mb-3 h-8 w-8" />
            School photo gallery placeholder
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-3"><span className="font-medium text-slate-800">Principal:</span> Ramesh Rao</div>
            <div className="rounded-2xl bg-slate-50 p-3"><span className="font-medium text-slate-800">Students:</span> 620</div>
            <div className="rounded-2xl bg-slate-50 p-3"><span className="font-medium text-slate-800">District:</span> Medchal</div>
            <div className="rounded-2xl bg-slate-50 p-3"><span className="font-medium text-slate-800">State:</span> Telangana</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800">Infrastructure</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {['Classrooms: 18', 'Labs: 2', 'Digital setup: Yes', 'Water facility: Yes'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800">Donation History</h3>
            <div className="mt-4 space-y-3">
              {['₹25,000 received', '₹15,000 received', '₹10,000 pending'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default SchoolDetails;
