import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    role: "Donor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "VIDYADAAN made it easy to support government schools. The before-and-after updates gave me confidence that my donation was used properly.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "School Principal",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Our school received computers through generous donors. The platform is transparent, simple, and incredibly helpful.",
  },
  {
    id: 3,
    name: "Anil Rao",
    role: "NGO Coordinator",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Verification and progress tracking are excellent. VIDYADAAN creates trust between schools, NGOs, and donors.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            What People Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by donors, schools, and NGO partners.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-50 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>

              <div className="mt-5 flex text-yellow-500 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}