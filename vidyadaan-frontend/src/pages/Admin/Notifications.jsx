import { FiBell, FiCheckCircle, FiClock } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

const notifications = [
  { title: 'New school verification request', time: '2 min ago', type: 'Pending' },
  { title: 'Donation milestone reached', time: '24 min ago', type: 'Alert' },
  { title: 'NGO report submitted', time: '1 hr ago', type: 'Completed' },
];

function Notifications() {
  return (
    <AdminShell title="Notifications" subtitle="Monitor platform alerts and admin updates.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="space-y-3">
          {notifications.map((item) => (
            <div key={item.title} className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <FiBell className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-slate-800">{item.title}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                    <FiClock className="h-4 w-4" /> {item.time}
                  </div>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${item.type === 'Pending' ? 'bg-orange-50 text-orange-600' : item.type === 'Alert' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

export default Notifications;
