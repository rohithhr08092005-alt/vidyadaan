import { Link } from "react-router-dom";
import { FaHandsHelping, FaUsers, FaCheckCircle } from "react-icons/fa";

const ngos = [
  {
    id: 1,
    name: "Smile Foundation",
    projects: 48,
    volunteers: 210,
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
  },
  {
    id: 2,
    name: "Teach For India",
    projects: 35,
    volunteers: 180,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: 3,
    name: "Akshaya Patra",
    projects: 60,
    volunteers: 320,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
  },
];

function NGOSection() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Our NGO Partners
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted NGOs help verify school requests and ensure donations are
            used effectively.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {ngos.map((ngo) => (
            <div
              key={ngo.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={ngo.image}
                alt={ngo.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-800">
                  {ngo.name}
                </h3>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>{ngo.projects} Projects Completed</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaUsers className="text-blue-600" />
                    <span>{ngo.volunteers} Active Volunteers</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaHandsHelping className="text-yellow-500" />
                    <span>Verified NGO Partner</span>
                  </div>

                </div>

                <Link
                  to="/ngo/register"
                  className="mt-8 inline-block w-full rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
                >
                  Become a Partner
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default NGOSection;