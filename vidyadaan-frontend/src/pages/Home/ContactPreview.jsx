import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function ContactPreview() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold">
              Contact VIDYADAAN
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              Have questions about donations, NGO partnerships, or school
              registration? Our team is here to help you build a better future
              for government school students.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-700 p-4">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-slate-300">
                    KVG College of Engineering,
                    Sullia, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-600 p-4">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-300">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-600 p-4">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-300">
                    support@vidyadaan.org
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-10 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-blue-600 p-4 transition hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-pink-600 p-4 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-sky-500 p-4 transition hover:scale-110"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="rounded-full bg-blue-800 p-4 transition hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="overflow-hidden rounded-2xl shadow-xl">

              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=KVG%20College%20of%20Engineering%20Sullia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactPreview;