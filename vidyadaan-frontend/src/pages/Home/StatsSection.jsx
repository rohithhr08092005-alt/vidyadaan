import { FaSchool, FaUsers, FaHandHoldingHeart, FaBuilding } from "react-icons/fa";

const stats = [
  {
    icon: <FaSchool className="text-4xl text-blue-600" />,
    value: "120+",
    label: "Government Schools",
  },
  {
    icon: <FaUsers className="text-4xl text-green-600" />,
    value: "15,000+",
    label: "Students Benefited",
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl text-red-500" />,
    value: "₹52 Lakhs",
    label: "Donations Raised",
  },
  {
    icon: <FaBuilding className="text-4xl text-purple-600" />,
    value: "28+",
    label: "NGO Partners",
  },
];

function StatsSection() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Impact
          </h2>

          <p className="mt-4 text-slate-600">
            Together we are transforming government schools across India.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-800">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default StatsSection;