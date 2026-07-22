import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            About VIDYADAAN
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            VIDYADAAN is a smart donation platform that connects Government
            Schools, NGOs, and Donors to improve educational infrastructure
            with complete transparency and accountability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition">
            <FaBullseye className="text-5xl text-blue-600 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Our Mission
            </h3>

            <p className="text-slate-600">
              To ensure every government school receives the resources it
              needs by connecting genuine donors with verified educational
              projects.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition">
            <FaEye className="text-5xl text-green-600 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Our Vision
            </h3>

            <p className="text-slate-600">
              Build a transparent and technology-driven ecosystem where
              donations create measurable improvements in education.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition">
            <FaHandsHelping className="text-5xl text-yellow-500 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Why VIDYADAAN?
            </h3>

            <p className="text-slate-600">
              Schools upload requirements, NGOs verify projects, donors
              contribute securely, and everyone can track progress through
              before-and-after updates.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;