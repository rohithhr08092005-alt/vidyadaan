import { useState } from "react";
import { Link } from "react-router-dom";

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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-wide text-slate-800">
          VIDYADAAN
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Login
          </Link>
          <Link to="/register" className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            Register
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-slate-900" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="rounded-md bg-slate-800 px-3 py-2 text-white hover:bg-slate-700" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
