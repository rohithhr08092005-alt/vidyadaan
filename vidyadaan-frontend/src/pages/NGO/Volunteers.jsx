import { FiAward, FiUsers } from "react-icons/fi";

const volunteers = [
  { name: "Ravi Kumar", skill: "Project coordinator", assigned: "Digital Learning Lab" },
  { name: "Anjali Rao", skill: "Community outreach", assigned: "Library Renovation" },
  { name: "Sowmya Nair", skill: "Finance support", assigned: "Water Purifier Installation" },
];

function Volunteers() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Team</p>
              <h1 className="mt-2 text-3xl font-semibold">Volunteers</h1>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiUsers className="h-5 w-5" /></div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {volunteers.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600"><FiAward className="h-5 w-5" /></div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{member.name}</h2>
                  <p className="text-sm text-slate-500">{member.skill}</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <span className="font-medium text-slate-800">Assigned project:</span> {member.assigned}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Volunteers;
