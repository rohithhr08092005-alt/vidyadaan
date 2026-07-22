import { FiDownload, FiSearch, FiTrendingUp } from "react-icons/fi";

const donations = [
  { donor: "Ravi Kumar", amount: "₹10,000", date: "2026-07-15", transaction: "TXN-201", status: "Completed" },
  { donor: "Sneha Rao", amount: "₹8,500", date: "2026-07-12", transaction: "TXN-198", status: "Completed" },
  { donor: "Mohit Sharma", amount: "₹5,000", date: "2026-07-08", transaction: "TXN-187", status: "Pending" },
  { donor: "Asha Verma", amount: "₹12,000", date: "2026-07-03", transaction: "TXN-170", status: "Completed" },
];

function DonationHistory() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Total Donations</p>
            <p className="mt-2 text-2xl font-semibold text-slate-800">₹1.24L</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-600">18</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <p className="text-sm text-slate-500">Pending</p>
            <p className="mt-2 text-2xl font-semibold text-orange-600">3</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Donations</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-800">Donation History</h1>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <FiSearch className="text-slate-500" />
              <input placeholder="Search donor" className="bg-transparent text-sm outline-none" />
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-3 py-3 font-medium">Donor Name</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Transaction ID</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {donations.map((item) => (
                  <tr key={item.transaction} className="text-sm text-slate-600">
                    <td className="px-3 py-3 font-medium text-slate-800">{item.donor}</td>
                    <td className="px-3 py-3">{item.amount}</td>
                    <td className="px-3 py-3">{item.date}</td>
                    <td className="px-3 py-3">{item.transaction}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"}`}>{item.status}</span>
                    </td>
                    <td className="px-3 py-3">
                      <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600 transition hover:bg-blue-100">
                        <FiDownload className="h-4 w-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
            <p>Showing 4 of 24 records</p>
            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2">Previous</button>
              <button className="rounded-lg bg-blue-600 px-3 py-2 text-white">1</button>
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2">2</button>
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationHistory;
