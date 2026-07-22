import { FiAward, FiMail, FiMapPin, FiPhone, FiShield, FiStar } from "react-icons/fi";

const highlights = [
  { label: "Verified NGO", value: "Trusted partner" },
  { label: "Projects managed", value: "18" },
  { label: "Volunteers", value: "42" },
  { label: "Impact score", value: "96%" },
];

function NGOProfile() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">NGO Profile</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">BrightFuture Foundation</h1>
              <p className="mt-3 max-w-2xl text-sm text-emerald-100 sm:text-base">Supporting smart classrooms, digital labs, and school infrastructure across underserved districts.</p>
            </div>
            <div className="rounded-2xl bg-white/15 px-4 py-3 text-sm font-medium backdrop-blur">Verified partner • 2024</div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiAward className="h-5 w-5" /></div>
              <div>
                <h2 className="text-xl font-semibold">About the organization</h2>
                <p className="text-sm text-slate-500">Operational since 2018</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">BrightFuture Foundation collaborates with principals and school leaders to improve learning environments with transparent reporting, efficient fund usage, and measurable student impact.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['Education', 'Infrastructure', 'Volunteering', 'Reporting'].map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{tag}</span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Contact details</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><FiMail className="text-emerald-500" /> contact@brightfuture.org</div>
              <div className="flex items-center gap-3"><FiPhone className="text-emerald-500" /> +91 98765 43210</div>
              <div className="flex items-center gap-3"><FiMapPin className="text-emerald-500" /> Hyderabad, Telangana</div>
              <div className="flex items-center gap-3"><FiShield className="text-emerald-500" /> 100% donation transparency</div>
              <div className="flex items-center gap-3"><FiStar className="text-amber-500" /> 4.9 partner rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGOProfile;
