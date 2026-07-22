import { FiBell, FiCheckCircle, FiTrash2 } from "react-icons/fi";

const notifications = [
  { title: "Donation Received", detail: "₹10,000 received from Ravi Kumar", time: "10 min ago" },
  { title: "Project Approved", detail: "The water facility project has been approved", time: "1 hour ago" },
  { title: "NGO Assigned", detail: "Bright Future Foundation is now assigned", time: "3 hours ago" },
  { title: "New Comment", detail: "A new comment was added to the library issue", time: "Yesterday" },
  { title: "Reminder", detail: "Upload the completion report for the science lab", time: "Yesterday" },
];

function Notifications() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Notifications</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800">Latest Updates</h1>
          </div>
          <div className="rounded-full bg-blue-50 p-3 text-blue-600">
            <FiBell className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {notifications.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">{item.time}</span>
                <button className="rounded-lg bg-emerald-50 p-2 text-emerald-600"><FiCheckCircle className="h-4 w-4" /></button>
                <button className="rounded-lg bg-rose-50 p-2 text-rose-600"><FiTrash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
