import { FiHeart, FiStar } from "react-icons/fi";

const wishlist = [
  { name: "Rural Development School", reason: "Digital lab for 120 children" },
  { name: "Model Primary School", reason: "Library expansion and books" },
];

function Wishlist() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Saved Projects</p>
            <h1 className="mt-2 text-3xl font-semibold">Wishlist</h1>
          </div>
          <div className="rounded-2xl bg-red-50 p-3 text-red-500"><FiHeart className="h-5 w-5" /></div>
        </div>

        <div className="mt-6 space-y-3">
          {wishlist.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <p className="font-semibold text-slate-800">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.reason}</p>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"><FiStar className="h-4 w-4" /> Support</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
