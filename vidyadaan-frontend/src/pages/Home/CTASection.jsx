import { Link } from "react-router-dom";
import {
  FaHeart,
  FaSchool,
  FaHandsHelping,
} from "react-icons/fa";

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold md:text-5xl">
          Together We Can Transform Education
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Join VIDYADAAN and become part of a transparent movement that
          empowers government schools through verified donations,
          NGO collaboration, and community support.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/donation"
            className="flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-yellow-300"
          >
            <FaHeart />
            Donate Now
          </Link>

          <Link
            to="/school/register"
            className="flex items-center gap-2 rounded-xl border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            <FaSchool />
            Register School
          </Link>

          <Link
            to="/ngo/register"
            className="flex items-center gap-2 rounded-xl border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            <FaHandsHelping />
            Become NGO Partner
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTASection;