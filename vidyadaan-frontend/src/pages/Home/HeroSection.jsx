import { Link } from "react-router-dom";
import { FaSchool, FaHandHoldingHeart } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600')",
        }}
      ></div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            📚 Smart School Donation Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Empower Government Schools with{" "}
            <span className="text-yellow-400">VIDYADAAN</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-200">
            VIDYADAAN connects Schools, NGOs, and Donors on one transparent
            platform to improve educational infrastructure through verified
            donations and real-time project tracking.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/donation"
              className="flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-yellow-300"
            >
              <FaHandHoldingHeart />
              Donate Now
            </Link>

            <Link
              to="/schools"
              className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              <FaSchool />
              Explore Schools
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">120+</h2>
              <p className="text-sm text-slate-300">Schools</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">₹52L</h2>
              <p className="text-sm text-slate-300">Donated</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">350+</h2>
              <p className="text-sm text-slate-300">Donors</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">28</h2>
              <p className="text-sm text-slate-300">NGOs</p>
            </div>

          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="hidden flex-1 justify-end lg:flex">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=700"
            alt="Students"
            className="w-[500px] rounded-3xl border border-white/20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;