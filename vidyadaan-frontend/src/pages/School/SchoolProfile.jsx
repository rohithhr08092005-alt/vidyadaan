import { FiEdit2, FiHome, FiMapPin, FiPhone, FiUsers } from "react-icons/fi";

const schoolDetails = [
  { label: "School Name", value: "Government High School, Banjara Hills" },
  { label: "UDISE Code", value: "22140102306" },
  { label: "Principal Name", value: "Dr. Meera Reddy" },
  { label: "Address", value: "12-3-45, Road No. 2, Banjara Hills" },
  { label: "District", value: "Hyderabad" },
  { label: "State", value: "Telangana" },
  { label: "Student Count", value: "1240" },
  { label: "Teacher Count", value: "42" },
  { label: "School Type", value: "Government" },
  { label: "Medium", value: "English" },
  { label: "Contact", value: "+91 98765 43210" },
];

function SchoolProfile() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
                alt="School"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">School Profile</p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-800">Government High School</h1>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-blue-700">
                <FiEdit2 className="h-4 w-4" />
                Edit Profile
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {schoolDetails.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-1 font-medium text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <FiUsers className="h-5 w-5 text-blue-600" />
                  <p className="font-semibold text-slate-800">Student Strength</p>
                </div>
                <p className="mt-2 text-2xl font-semibold text-blue-700">1240</p>
              </div>
              <div className="rounded-xl bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <FiHome className="h-5 w-5 text-orange-600" />
                  <p className="font-semibold text-slate-800">Infrastructure Level</p>
                </div>
                <p className="mt-2 text-2xl font-semibold text-orange-700">Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolProfile;
