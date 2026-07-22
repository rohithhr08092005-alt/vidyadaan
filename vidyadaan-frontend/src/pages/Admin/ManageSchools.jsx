import { FiEdit2, FiEye, FiFilter, FiSearch, FiTrash2 } from 'react-icons/fi';
import AdminShell from './components/AdminShell';
import { schools } from './data';

function ManageSchools() {
  return (
    <AdminShell title="Manage Schools" subtitle="Search, filter, and manage school records.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiSearch className="text-slate-400" />
              <input className="bg-transparent text-sm outline-none" placeholder="Search schools" />
            </div>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600">
              <FiFilter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">School</th>
                <th className="px-4 py-3">Principal</th>
                <th className="px-4 py-3">District</th>
                <th className="px-4 py-3">Students</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Projects</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school) => (
                <tr key={school.name} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-800">{school.name}</td>
                  <td className="px-4 py-3">{school.principal}</td>
                  <td className="px-4 py-3">{school.district}</td>
                  <td className="px-4 py-3">{school.students}</td>
                  <td className="px-4 py-3"><span className={`rounded-full px-3 py-1 text-xs font-medium ${school.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : school.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'}`}>{school.status}</span></td>
                  <td className="px-4 py-3">{school.projects}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiEye className="h-4 w-4" /></button>
                      <button className="rounded-lg bg-amber-50 p-2 text-amber-600"><FiEdit2 className="h-4 w-4" /></button>
                      <button className="rounded-lg bg-red-50 p-2 text-red-600"><FiTrash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}

export default ManageSchools;
