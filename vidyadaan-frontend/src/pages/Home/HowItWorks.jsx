import {
  FaSchool,
  FaClipboardCheck,
  FaDonate,
  FaCamera,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSchool className="text-5xl text-blue-600" />,
    title: "School Raises a Request",
    description:
      "Government schools submit infrastructure or educational requirements through the VIDYADAAN platform.",
  },
  {
    icon: <FaClipboardCheck className="text-5xl text-green-600" />,
    title: "NGO Verifies the Request",
    description:
      "Partner NGOs inspect and verify each request before it becomes available for donations.",
  },
  {
    icon: <FaDonate className="text-5xl text-yellow-500" />,
    title: "Donors Contribute",
    description:
      "Individuals and organizations donate funds or educational resources securely through the platform.",
  },
  {
    icon: <FaCamera className="text-5xl text-purple-600" />,
    title: "Track Project Completion",
    description:
      "Schools upload before-and-after photos so donors can see the real impact of their contributions.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            How VIDYADAAN Works
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A transparent and simple process connecting schools, NGOs, and donors.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-slate-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="mb-4 text-center text-xl font-bold text-slate-800">
                {step.title}
              </h3>

              <p className="text-center text-slate-600">
                {step.description}
              </p>

              <div className="absolute -top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white shadow-lg">
                {index + 1}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;