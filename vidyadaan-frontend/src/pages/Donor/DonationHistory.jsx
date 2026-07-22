import { FiCalendar, FiDollarSign } from "react-icons/fi";

const donations = [
  { date: "12 Jun 2025", school: "Government High School", amount: "₹10,000", receipt: "Receipt #1023" },
  { date: "02 Jun 2025", school: "Rural Development School", amount: "₹5,000", receipt: "Receipt #1018" },
  { date: "20 May 2025", school: "Model Primary School", amount: "₹15,000", receipt: "Receipt #1009" },
];

function DonationHistory() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Your Contributions</p>
            <h1 className="mt-2 text-3xl font-semibold">Donation history</h1>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600"><FiDollarSign className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 space-y-3">
          {donations.map((donation) => (
            <div key={donation.receipt} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-800">{donation.school}</p>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <FiCalendar className="text-blue-500" /> {donation.date}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-800">{donation.amount}</p>
                <p className="text-sm text-slate-500">{donation.receipt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonationHistory;
