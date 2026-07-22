import { FiCalendar, FiCheckCircle, FiClock, FiDollarSign, FiTarget, FiUsers } from "react-icons/fi";

function ProjectDetails() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Project Overview</p>
              <h1 className="mt-2 text-3xl font-semibold">Digital Learning Lab</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">A technology-enabled classroom initiative for 240 students in Government High School, Hyderabad with a focus on digital literacy and online assessments.</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">Progress 72%</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-xl font-semibold">Project scope</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Install 20 student laptops and 1 teacher workstation.</li>
                <li>Set up internet connectivity and smart projector.</li>
                <li>Train 6 teachers in digital classroom practices.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-xl font-semibold">Milestones</h2>
              <div className="mt-5 space-y-4">
                {['Infrastructure completed', 'Devices delivered', 'Teacher training scheduled'].map((item, idx) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                    <FiCheckCircle className="text-emerald-500" />{idx + 1}. {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Key details</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="flex items-center gap-2"><FiDollarSign className="text-emerald-500" /> Budget</span><span className="font-semibold text-slate-800">₹2.4L</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="flex items-center gap-2"><FiUsers className="text-emerald-500" /> Beneficiaries</span><span className="font-semibold text-slate-800">240 students</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="flex items-center gap-2"><FiCalendar className="text-emerald-500" /> Deadline</span><span className="font-semibold text-slate-800">18 Aug</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="flex items-center gap-2"><FiClock className="text-emerald-500" /> Status</span><span className="font-semibold text-slate-800">In progress</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="flex items-center gap-2"><FiTarget className="text-emerald-500" /> Priority</span><span className="font-semibold text-slate-800">High</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
