import { FiBookmark, FiMapPin } from "react-icons/fi";

const saved = [
  { name: "Government High School", location: "Hyderabad" },
  { name: "Rural Development School", location: "Karimnagar" },
];

function SavedSchools() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Saved List</p>
            <h1 className="mt-2 text-3xl font-semibold">Saved schools</h1>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600"><FiBookmark className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 space-y-3">
          {saved.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <p className="font-semibold text-slate-800">{item.name}</p>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500"><FiMapPin className="text-blue-500" /> {item.location}</div>
              </div>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedSchools;
