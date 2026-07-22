import { FiAward, FiDollarSign, FiDownload, FiMail, FiPhone, FiUsers } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

function DonorDetails() {
  return (
    <AdminShell title="Donor Details" subtitle="Explore donor history, receipts, and supported projects.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800">Asha Kumar</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3"><FiMail className="text-blue-500" /> asha@example.com</div>
            <div className="flex items-center gap-3"><FiPhone className="text-blue-500" /> +91 98765 43210</div>
            <div className="flex items-center gap-3"><FiDollarSign className="text-emerald-500" /> Total donations: ₹2.4L</div>
            <div className="flex items-center gap-3"><FiUsers className="text-orange-500" /> Schools supported: 3</div>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Impact summary: Supported digital labs and library access for 1,200 students.</div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800">Donation History</h3>
          <div className="mt-5 space-y-3">
            {['₹25,000 • ZPHS Chintal', '₹15,000 • GHS Keesara', '₹10,000 • MPPS Narayanpet'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <span>{item}</span>
                <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600"><FiDownload className="h-4 w-4" /> Receipt</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default DonorDetails;
