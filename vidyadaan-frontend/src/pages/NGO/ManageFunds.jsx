import { FiDollarSign, FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const budgetCards = [
  { title: "Total budget", value: "₹8.5L", tone: "emerald" },
  { title: "Spent", value: "₹5.2L", tone: "amber" },
  { title: "Remaining", value: "₹3.3L", tone: "blue" },
];

const transactions = [
  { title: "Laptop procurement", amount: "-₹1.2L", date: "08 Jul" },
  { title: "Donation received", amount: "+₹2.0L", date: "05 Jul" },
  { title: "Teacher training", amount: "-₹75K", date: "01 Jul" },
];

function ManageFunds() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Finance</p>
              <h1 className="mt-2 text-3xl font-semibold">Manage funds</h1>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiDollarSign className="h-5 w-5" /></div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {budgetCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm text-slate-500">{card.title}</p>
              <p className="mt-3 text-2xl font-semibold text-slate-800">{card.value}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                {card.title === "Spent" ? <FiTrendingDown className="text-amber-500" /> : <FiTrendingUp className="text-emerald-500" />}
                <span>Budget health is stable</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Expense breakdown</h2>
            <div className="mt-5 space-y-4">
              {[
                { label: "Infrastructure", value: "45%", width: "45%" },
                { label: "Training", value: "25%", width: "25%" },
                { label: "Operations", value: "20%", width: "20%" },
                { label: "Outreach", value: "10%", width: "10%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Recent transactions</h2>
            <div className="mt-5 space-y-3">
              {transactions.map((txn) => (
                <div key={txn.title} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                  <div>
                    <p className="font-medium text-slate-800">{txn.title}</p>
                    <p>{txn.date}</p>
                  </div>
                  <span className={`font-semibold ${txn.amount.startsWith("+") ? "text-emerald-600" : "text-slate-800"}`}>{txn.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageFunds;
