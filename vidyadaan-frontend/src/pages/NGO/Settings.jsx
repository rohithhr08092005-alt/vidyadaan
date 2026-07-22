import { FiCheckCircle, FiLock, FiMail, FiShield } from "react-icons/fi";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Account</p>
            <h1 className="mt-2 text-3xl font-semibold">Settings</h1>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiShield className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-5">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-white p-3"><span>Email updates</span><span className="text-emerald-600"><FiCheckCircle className="h-4 w-4" /></span></div>
              <div className="flex items-center justify-between rounded-2xl bg-white p-3"><span>SMS reminders</span><span className="text-slate-400"><FiCheckCircle className="h-4 w-4" /></span></div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5">
            <h2 className="text-lg font-semibold">Security</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-3"><FiLock className="text-emerald-500" /> Two-factor authentication enabled</div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-3"><FiMail className="text-emerald-500" /> Recovery email connected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
