import { FiDownload, FiFileText } from "react-icons/fi";

const reports = [
  { title: "Monthly report", type: "July 2025" },
  { title: "Expense report", type: "Fund utilization" },
  { title: "Project report", type: "Completion status" },
];

function Reports() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Reports</p>
              <h1 className="mt-2 text-3xl font-semibold">Download reports</h1>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiFileText className="h-5 w-5" /></div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reports.map((report) => (
            <div key={report.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-slate-800">{report.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{report.type}</p>
              <button className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
                <FiDownload className="h-4 w-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;
