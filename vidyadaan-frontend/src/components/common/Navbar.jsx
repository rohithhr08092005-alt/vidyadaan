import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSignInAlt,
} from "react-icons/fa";

import logo from "../../assets/logo/logo.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Schools", to: "/schools" },
  { label: "Donate", to: "/donation" },
  { label: "NGOs", to: "/ngos" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="VIDYADAAN Logo"
              className="h-14 w-14 object-contain rounded-full shadow-md bg-white p-1"
            />

            <div>

              <h1 className="text-2xl font-bold text-blue-700">
                VIDYADAAN
              </h1>

              <p className="text-xs text-slate-500">
                Smart School Donation System
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (

              <Link
                key={link.to}
                to={link.to}
                className="font-medium text-slate-700 hover:text-blue-600 transition duration-300"
              >
                {link.label}
              </Link>

            ))}

          </nav>

          {/* Desktop Buttons */}

          <div className="hidden md:flex items-center gap-3">

            <Link
              to="/login"
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
            >
              <FaSignInAlt />
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg transition"
            >
              <FaUserCircle />
              Register
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-slate-700"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden bg-white border-t shadow-lg">

          <div className="flex flex-col p-5 gap-4">

            {navLinks.map((link) => (

              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </Link>

            ))}

            <hr />

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-lg border px-4 py-3 hover:bg-slate-100"
            >
              <FaSignInAlt />
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-3 hover:bg-blue-700"
            >
              <FaUserCircle />
              Register
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;