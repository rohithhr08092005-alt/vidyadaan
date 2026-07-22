import { FiMail, FiPhone, FiUser } from "react-icons/fi";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Account</p>
            <h1 className="mt-2 text-3xl font-semibold">Donor profile</h1>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600"><FiUser className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-50 p-5">
            <h2 className="text-lg font-semibold">Asha R.</h2>
            <p className="mt-2 text-sm text-slate-500">Verified donor • 6 donations made</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><FiMail className="text-blue-500" /> asha@example.com</div>
              <div className="flex items-center gap-3"><FiPhone className="text-blue-500" /> +91 98765 43210</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Preferences</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span>Receive monthly impact updates</span><span className="font-medium text-emerald-600">Enabled</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span>Anonymous donations</span><span className="font-medium text-slate-600">Disabled</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
