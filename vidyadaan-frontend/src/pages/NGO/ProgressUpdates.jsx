import { FiCamera, FiCheckCircle, FiClock, FiUpload } from "react-icons/fi";

const updates = [
  { title: "Infrastructure delivered", text: "Classroom furniture and electrical work completed.", time: "2h ago", status: "Completed" },
  { title: "Device installation", text: "20 laptops installed in the digital lab.", time: "Yesterday", status: "In progress" },
  { title: "Volunteer onboarding", text: "New volunteers are being assigned to the project.", time: "2 days ago", status: "Planned" },
];

function ProgressUpdates() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Progress</p>
              <h1 className="mt-2 text-3xl font-semibold">Progress updates</h1>
            </div>
            <button className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white">
              <FiUpload className="h-4 w-4" /> Upload photos
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {updates.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">{item.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">{item.status}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><FiClock className="text-emerald-500" /> {item.time}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiCamera className="h-5 w-5" /></div>
              <div>
                <h2 className="text-xl font-semibold">Latest media</h2>
                <p className="text-sm text-slate-500">Preview of project photos</p>
              </div>
            </div>
            <div className="mt-5 rounded-3xl bg-slate-100 p-10 text-center text-sm text-slate-500">Photo gallery preview will appear here.</div>
            <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700"><FiCheckCircle className="mr-2 inline" /> Uploading is UI-only for this prototype.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressUpdates;
