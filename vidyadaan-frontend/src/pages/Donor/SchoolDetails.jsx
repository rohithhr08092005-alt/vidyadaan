import { FiHeart, FiMapPin, FiTarget, FiUsers } from "react-icons/fi";

function SchoolDetails() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">School Profile</p>
              <h1 className="mt-2 text-3xl font-semibold">Government High School</h1>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="flex items-center gap-2"><FiMapPin className="text-blue-500" /> Hyderabad</span>
                <span className="flex items-center gap-2"><FiUsers className="text-emerald-500" /> 540 students</span>
              </div>
            </div>
            <button className="rounded-full bg-red-50 p-3 text-red-500"><FiHeart className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-xl font-semibold">Project Need</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">The school needs a safe and functional computer lab to support digital learning for students in grades 6–10. Your contribution will fund laptops, desks, and internet connectivity.</p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <FiTarget className="text-orange-500" /> 78% of funding goal reached
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: "78%" }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  <span>Raised ₹1.56L</span>
                  <span>Goal ₹2L</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-xl font-semibold">How it helps</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Improves digital literacy for 240 students.</li>
                <li>Supports online assessments and practical learning.</li>
                <li>Creates a future-ready classroom environment.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Make a donation</h2>
            <div className="mt-4 space-y-3">
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" placeholder="Enter amount" />
              <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none">
                <option>One-time donation</option>
                <option>Monthly support</option>
              </select>
              <button className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-medium text-white">Continue to Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetails;
