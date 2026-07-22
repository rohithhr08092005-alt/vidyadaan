import { FiCheckCircle, FiEye, FiXCircle } from 'react-icons/fi';
import AdminShell from './components/AdminShell';
import { pendingSchools } from './data';

function VerifySchools() {
  return (
    <AdminShell title="Verify Schools" subtitle="Review and decide on newly registered schools.">
      <div className="grid gap-5 lg:grid-cols-2">
        {pendingSchools.map((school) => (
          <div key={school.udise} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">{school.name}</h2>
                <p className="mt-2 text-sm text-slate-500">Principal: {school.principal}</p>
              </div>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-600">{school.status}</span>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              <div><span className="font-medium text-slate-800">District:</span> {school.district}</div>
              <div><span className="font-medium text-slate-800">State:</span> {school.state}</div>
              <div><span className="font-medium text-slate-800">UDISE:</span> {school.udise}</div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-16 w-16 rounded-2xl bg-slate-100" />
              <div className="flex-1 rounded-2xl border border-dashed border-slate-200 p-3 text-sm text-slate-500">School photo preview placeholder</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"><FiCheckCircle className="h-4 w-4" /> Approve</button>
              <button className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"><FiXCircle className="h-4 w-4" /> Reject</button>
              <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"><FiEye className="h-4 w-4" /> View Details</button>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}

export default VerifySchools;
