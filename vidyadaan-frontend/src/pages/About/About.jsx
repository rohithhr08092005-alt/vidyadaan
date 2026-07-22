import {
  FaSchool,
  FaHandsHelping,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaSchool className="text-4xl text-blue-600" />,
      title: "Verified Government Schools",
      desc: "Only verified schools can raise infrastructure requests.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-orange-500" />,
      title: "Transparent Donations",
      desc: "Track every donation from funding to project completion.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "NGO Collaboration",
      desc: "NGOs help monitor and execute school development projects.",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-600" />,
      title: "Impact Analytics",
      desc: "View reports, progress, and real-time project updates.",
    },
  ];

  return (
    <div className="bg-slate-50">

      {/* Hero */}
      <section className="bg-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          About VIDYADAAN
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
          VIDYADAAN connects Government Schools, NGOs and Donors
          on one transparent platform to improve educational
          infrastructure through verified donations.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Our Mission
          </h2>

          <p className="text-slate-600 leading-8">
            To provide a transparent donation platform where
            schools can raise verified infrastructure requests,
            NGOs can monitor projects, and donors can see the
            real impact of every contribution.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Our Vision
          </h2>

          <p className="text-slate-600 leading-8">
            Every Government School deserves quality classrooms,
            laboratories, libraries, and digital learning
            facilities regardless of location.
          </p>
        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-10 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose VIDYADAAN?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-20 mt-16">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10">

          <div>
            <h2 className="text-5xl font-bold">120+</h2>
            <p className="mt-2">Schools</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">350+</h2>
            <p className="mt-2">Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">₹52L</h2>
            <p className="mt-2">Funds Raised</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">15K+</h2>
            <p className="mt-2">Students Benefited</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold">
          Together We Can Transform Government Schools
        </h2>

        <p className="mt-4 text-slate-600">
          Join VIDYADAAN today and help create better learning
          opportunities for every student.
        </p>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold">
          Donate Now
        </button>

      </section>

    </div>
  );
}

export default About;