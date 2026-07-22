import { FiActivity, FiClock, FiFilter, FiSearch } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

const logs = [
  { action: 'Approved school verification', actor: 'Admin Asha', time: '09:40 AM' },
  { action: 'Rejected NGO application', actor: 'Admin Rahul', time: '11:10 AM' },
  { action: 'Updated platform settings', actor: 'Super Admin', time: '02:35 PM' },
];

function AuditLogs() {
  return (
    <AdminShell title="Audit Logs" subtitle="Review governance changes and operational history.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiSearch className="text-slate-400" />
              <input className="bg-transparent text-sm outline-none" placeholder="Search logs" />
            </div>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600">
              <FiFilter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {logs.map((log) => (
            <div key={log.action} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <FiActivity className="mt-1 h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium text-slate-800">{log.action}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <FiClock className="h-4 w-4" /> {log.actor} • {log.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

export default AuditLogs;
