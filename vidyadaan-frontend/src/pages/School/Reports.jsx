import { FiDownload, FiFileText, FiPrinter } from "react-icons/fi";

const reports = [
  { title: "Monthly Report", desc: "Academic and donation summary for the month", badge: "Updated" },
  { title: "Donation Report", desc: "Breakdown of all donor contributions", badge: "Ready" },
  { title: "Expense Report", desc: "Spending and procurement analysis", badge: "Ready" },
  { title: "Beneficiary Report", desc: "Student and facility impact report", badge: "Updated" },
  { title: "Completion Report", desc: "Final closure summary for projects", badge: "Draft" },
];

function Reports() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Reports</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800">School Reports</h1>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
            <FiPrinter className="h-4 w-4" />
            Generate PDF
          </button>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report) => (
            <div key={report.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FiFileText className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">{report.badge}</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{report.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{report.desc}</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100">Preview</button>
                <button className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-100">
                  <FiDownload className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;
