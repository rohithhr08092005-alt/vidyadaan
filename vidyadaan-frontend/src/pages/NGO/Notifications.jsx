import { FiBell } from "react-icons/fi";

const items = [
  { title: "Project assigned", text: "A new project was assigned to your team." },
  { title: "Donation received", text: "₹50,000 donation has been recorded." },
  { title: "Deadline reminder", text: "Library renovation deadline is approaching." },
];

function Notifications() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Activity</p>
            <h1 className="mt-2 text-3xl font-semibold">Notifications</h1>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiBell className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{item.title}</p>
              <p className="mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
