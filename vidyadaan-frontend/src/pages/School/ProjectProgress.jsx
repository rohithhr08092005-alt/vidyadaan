import { FiCamera, FiCheckCircle, FiClock, FiImage } from "react-icons/fi";

const milestones = [
  { title: "Issue Created", date: "Jun 10", status: "Completed" },
  { title: "Verified", date: "Jun 12", status: "Completed" },
  { title: "Donation Started", date: "Jun 15", status: "Completed" },
  { title: "Work Started", date: "Jun 20", status: "In Progress" },
  { title: "50%", date: "Jul 01", status: "In Progress" },
  { title: "80%", date: "Jul 10", status: "Upcoming" },
  { title: "Completed", date: "Jul 30", status: "Upcoming" },
  { title: "Completion Report Uploaded", date: "Aug 01", status: "Upcoming" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
];

function ProjectProgress() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Project Tracking</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-800">Project Progress</h1>
            </div>
            <div className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">Overall Progress: 72%</div>
          </div>

          <div className="mt-6 h-3 rounded-full bg-slate-100">
            <div className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" style={{ width: "72%" }} />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-emerald-500" />
                  <p className="font-semibold text-slate-800">{step.title}</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">{step.date}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{step.status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex items-center gap-2">
            <FiCamera className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-800">Photo Gallery</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-slate-200">
                <img src={image} alt={`Progress ${index + 1}`} className="h-48 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectProgress;
