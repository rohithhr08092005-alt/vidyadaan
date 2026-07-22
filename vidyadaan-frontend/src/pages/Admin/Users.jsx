import { FiEdit, FiSearch, FiShield, FiTrash2 } from 'react-icons/fi';
import AdminShell from './components/AdminShell';

const users = [
  { name: 'Sanjay Rao', role: 'Principal', email: 'sanjay@school.gov' },
  { name: 'Meera Shah', role: 'Donor', email: 'meera@example.com' },
  { name: 'Rajat Dev', role: 'NGO Admin', email: 'rajat@ngo.org' },
];

function Users() {
  return (
    <AdminShell title="Users" subtitle="Manage platform role assignments and user access.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiSearch className="text-slate-400" />
              <input className="bg-transparent text-sm outline-none" placeholder="Search users" />
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {users.map((user) => (
            <div key={user.email} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <FiShield className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-slate-800">{user.name}</div>
                  <div className="text-sm text-slate-500">{user.role} • {user.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiEdit className="h-4 w-4" /></button>
                <button className="rounded-lg bg-red-50 p-2 text-red-600"><FiTrash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

export default Users;
