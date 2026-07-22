import { FiDownload, FiFileText, FiFilter, FiSearch } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

const reports = [
  { title: 'Monthly Impact Report', type: 'PDF', date: '2026-06-12' },
  { title: 'Donor Compliance Report', type: 'Excel', date: '2026-06-05' },
  { title: 'School Verification Audit', type: 'PDF', date: '2026-05-31' },
];

function Reports() {
  return (
    <AdminShell title="Reports" subtitle="Download governance and compliance reports.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiSearch className="text-slate-400" />
              <input className="bg-transparent text-sm outline-none" placeholder="Search reports" />
            </div>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600">
              <FiFilter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {reports.map((report) => (
            <div key={report.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <FiFileText className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-slate-800">{report.title}</div>
                  <div className="text-sm text-slate-500">{report.date} • {report.type}</div>
                </div>
              </div>
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                <FiDownload className="h-4 w-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

export default Reports;
