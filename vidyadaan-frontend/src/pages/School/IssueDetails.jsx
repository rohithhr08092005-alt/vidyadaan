import { FiPaperclip, FiMessageCircle } from "react-icons/fi";

const donorList = [
  { name: "Ravi K.", amount: "₹5,000", status: "Verified" },
  { name: "Anjali P.", amount: "₹3,500", status: "Verified" },
  { name: "Suresh M.", amount: "₹2,000", status: "Pending" },
];

const timeline = [
  { title: "Issue Created", date: "Jun 10, 2026" },
  { title: "Verified", date: "Jun 12, 2026" },
  { title: "Donation Started", date: "Jun 15, 2026" },
  { title: "Work Started", date: "Jun 20, 2026" },
];

function IssueDetails() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80" alt="Issue" className="h-64 w-full object-cover" />
              </div>
              <h1 className="mt-6 text-2xl font-semibold text-slate-800">Classroom Fan Repair</h1>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Several classroom fans in Block A are malfunctioning and need immediate replacement to maintain a safe and comfortable learning environment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Budget</p>
                <p className="mt-1 text-2xl font-semibold text-slate-800">₹20,000</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Progress Percentage</p>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: "70%" }} />
                </div>
                <p className="mt-2 text-sm font-medium text-slate-700">70% complete</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">NGO Assigned</p>
                <p className="mt-1 font-semibold text-slate-800">Bright Future Foundation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-800">Timeline</h2>
            <div className="mt-6 space-y-4">
              {timeline.map((item, index) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-600" />
                    {index !== timeline.length - 1 && <div className="mt-1 h-8 w-px bg-slate-200" />}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-800">Donor List</h2>
            <div className="mt-4 space-y-3">
              {donorList.map((donor) => (
                <div key={donor.name} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">
                  <div>
                    <p className="font-medium text-slate-700">{donor.name}</p>
                    <p className="text-sm text-slate-500">{donor.amount}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">{donor.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-800">Comments</h2>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600"><FiMessageCircle className="h-4 w-4" /></div>
                <div>
                  <p className="font-medium text-slate-800">Principal Review</p>
                  <p className="mt-1 text-sm text-slate-600">The repair schedule has been updated and the contractor has been informed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-800">Attachments</h2>
            <div className="mt-4 space-y-3">
              {["Repair Estimate.pdf", "Before Photos.zip"].map((file) => (
                <div key={file} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-sm text-slate-600">
                  <span>{file}</span>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600 transition hover:bg-blue-100">
                    <FiPaperclip className="h-4 w-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueDetails;
