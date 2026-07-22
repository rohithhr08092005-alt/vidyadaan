import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const schools = [
  {
    id: 1,
    name: "Government Higher Primary School",
    place: "Mysuru, Karnataka",
    need: "Smart Classroom",
    raised: 75000,
    goal: 100000,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
  },
  {
    id: 2,
    name: "Government High School",
    place: "Mangalore, Karnataka",
    need: "Computer Lab",
    raised: 120000,
    goal: 150000,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  },
  {
    id: 3,
    name: "Government PU College",
    place: "Bengaluru, Karnataka",
    need: "Library Renovation",
    raised: 45000,
    goal: 80000,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
  },
];

function FeaturedSchools() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Featured Schools
          </h2>

          <p className="mt-4 text-slate-600">
            Support verified government schools that need your help.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {schools.map((school) => {
            const percentage = Math.round(
              (school.raised / school.goal) * 100
            );

            return (
              <div
                key={school.id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-800">
                    {school.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <FaMapMarkerAlt />
                    {school.place}
                  </p>

                  <p className="mt-4">
                    <span className="font-semibold">Current Need:</span>{" "}
                    {school.need}
                  </p>

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-sm">
                      <span>₹{school.raised.toLocaleString()}</span>
                      <span>{percentage}%</span>
                    </div>

                    <div className="h-3 rounded-full bg-slate-200">
                      <div
                        className="h-3 rounded-full bg-blue-600"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <Link
                    to="/donation"
                    className="mt-6 inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
                  >
                    Donate Now
                  </Link>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FeaturedSchools;