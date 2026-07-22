import { Link } from "react-router-dom";
import {
  FaSchool,
  FaDonate,
  FaBook,
  FaLaptop,
  FaTint,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

const campaigns = [
  {
    id: 1,
    school: "Government High School",
    location: "Mysuru, Karnataka",
    need: "Smart Classroom",
    goal: 200000,
    raised: 130000,
  },
  {
    id: 2,
    school: "Government Primary School",
    location: "Mangaluru, Karnataka",
    need: "Library",
    goal: 150000,
    raised: 90000,
  },
  {
    id: 3,
    school: "Government PU College",
    location: "Shivamogga, Karnataka",
    need: "Computer Lab",
    goal: 350000,
    raised: 210000,
  },
];

function Donation() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Support Government Schools
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            Every donation helps build better classrooms,
            libraries, computer labs and brighter futures.
          </p>

          <Link
            to="/donor/donate"
            className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
          >
            Donate Now
            <FaArrowRight />
          </Link>

        </div>
      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">120+</h2>
            <p>Verified Schools</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-orange-500">₹52L</h2>
            <p>Funds Raised</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-green-600">350+</h2>
            <p>Projects</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-purple-600">15K+</h2>
            <p>Students Benefited</p>
          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Donate By Category
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <FaLaptop className="mx-auto text-5xl text-blue-600 mb-4" />
            <h3 className="font-bold">Computer Lab</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <FaBook className="mx-auto text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold">Library</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <FaTint className="mx-auto text-5xl text-cyan-500 mb-4" />
            <h3 className="font-bold">Drinking Water</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <FaSchool className="mx-auto text-5xl text-green-600 mb-4" />
            <h3 className="font-bold">Smart Classroom</h3>
          </div>

        </div>

      </section>

      {/* Campaigns */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8">
          Featured Campaigns
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {campaigns.map((campaign) => {

            const progress = Math.round(
              (campaign.raised / campaign.goal) * 100
            );

            return (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
              >

                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
                  alt={campaign.school}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {campaign.school}
                  </h3>

                  <p className="text-slate-500 mt-1">
                    {campaign.location}
                  </p>

                  <p className="mt-4">
                    <strong>Need:</strong> {campaign.need}
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-3 mt-5">

                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{
                        width: `${progress}%`,
                      }}
                    />

                  </div>

                  <div className="flex justify-between mt-3 text-sm">

                    <span>₹{campaign.raised.toLocaleString()}</span>

                    <span>₹{campaign.goal.toLocaleString()}</span>

                  </div>

                  <div className="mt-6 flex gap-3">

                    <button className="flex-1 border border-blue-600 text-blue-600 rounded-xl py-3 hover:bg-blue-50">
                      View Details
                    </button>

                    <Link
                      to="/donor/donate"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 text-center flex items-center justify-center gap-2"
                    >
                      <FaDonate />
                      Donate
                    </Link>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <FaUsers className="mx-auto text-6xl mb-6" />

          <h2 className="text-4xl font-bold">
            Together We Can Change Lives
          </h2>

          <p className="mt-5 text-blue-100">
            Join VIDYADAAN and support the education
            of thousands of government school students.
          </p>

          <Link
            to="/donor/donate"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
          >
            Start Donating
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Donation;