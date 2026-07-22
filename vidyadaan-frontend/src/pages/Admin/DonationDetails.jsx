import { FiArrowRight, FiDollarSign, FiFileText, FiShield } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

function DonationDetails() {
  return (
    <AdminShell title="Donation Details" subtitle="Review payment proof, purpose, and fund allocation.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Donation #1023</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3"><FiDollarSign className="text-emerald-500" /> Amount: ₹25,000</div>
            <div className="flex items-center gap-3"><FiFileText className="text-blue-500" /> Purpose: Smart Classroom Setup</div>
            <div className="flex items-center gap-3"><FiShield className="text-orange-500" /> Payment status: Verified</div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800">Allocation</h3>
          <div className="mt-5 space-y-3">
            {['Laptop procurement • 40%', 'Furniture • 35%', 'Maintenance • 25%'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <span>{item}</span>
                <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">View <FiArrowRight className="h-4 w-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default DonationDetails;
