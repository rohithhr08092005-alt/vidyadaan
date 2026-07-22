import { FiCheckCircle, FiShield, FiSliders } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

function Settings() {
  return (
    <AdminShell title="Settings" subtitle="Control platform preferences and governance toggles.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center gap-3">
            <FiSliders className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-800">System Preferences</h2>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-3">Auto-approve verified schools: Enabled</div>
            <div className="rounded-2xl bg-slate-50 p-3">Donation receipts: Mandatory</div>
            <div className="rounded-2xl bg-slate-50 p-3">NGO verification required: Yes</div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center gap-3">
            <FiShield className="h-5 w-5 text-emerald-600" />
            <h2 className="text-lg font-semibold text-slate-800">Security Controls</h2>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span>Two-factor auth</span><FiCheckCircle className="text-emerald-500" /></div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span>Audit log retention</span><span>365 days</span></div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

export default Settings;
