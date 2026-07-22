import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact VIDYADAAN
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're a donor,
            school administrator, NGO, or volunteer, we're here to help.
          </p>

        </div>
      </section>

      {/* Contact Cards */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />

            <h3 className="font-bold text-xl">
              Address
            </h3>

            <p className="mt-2 text-gray-600">
              KVG College of Engineering,
              Sullia,
              Karnataka
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <FaPhoneAlt className="text-4xl text-green-600 mx-auto mb-4" />

            <h3 className="font-bold text-xl">
              Phone
            </h3>

            <p className="mt-2 text-gray-600">
              +91 6364480125
              <br />
              +91 8861678556
              <br />
              +91 8310112134
              <br />
              +91 7204652305
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <FaEnvelope className="text-4xl text-red-500 mx-auto mb-4" />

            <h3 className="font-bold text-xl">
              Email
            </h3>

            <p className="mt-2 text-gray-600">
              support@vidyadaan.in
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <FaClock className="text-4xl text-orange-500 mx-auto mb-4" />

            <h3 className="font-bold text-xl">
              Working Hours
            </h3>

            <p className="mt-2 text-gray-600">
              Mon - Sat
              <br />
              9:00 AM - 6:00 PM
            </p>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

          {/* Right Side */}

          <div>

            {/* Map */}

            <div className="bg-white rounded-3xl shadow-lg h-72 flex items-center justify-center">

              <div className="text-center">

                <FaMapMarkerAlt className="text-6xl text-blue-600 mx-auto mb-4" />

                <h3 className="text-2xl font-bold">
                  Google Map
                </h3>

                <p className="text-gray-500 mt-2">
                  Add Google Maps here later
                </p>

              </div>

            </div>

            {/* FAQ */}

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">

                <div>
                  <h4 className="font-semibold">
                    How can I donate?
                  </h4>
                  <p className="text-gray-600">
                    Browse schools and click the Donate button.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    How are schools verified?
                  </h4>
                  <p className="text-gray-600">
                    Every school is verified by the VIDYADAAN admin.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Can NGOs manage projects?
                  </h4>
                  <p className="text-gray-600">
                    Yes, NGOs can manage funds and update project progress.
                  </p>
                </div>

              </div>

            </div>

            {/* Social */}

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

              <h2 className="text-2xl font-bold mb-5">
                Follow Us
              </h2>

              <div className="flex gap-5 text-3xl">

                <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition" />

                <FaTwitter className="text-sky-500 cursor-pointer hover:scale-110 transition" />

                <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110 transition" />

                <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;