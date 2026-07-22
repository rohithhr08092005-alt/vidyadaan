import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-slate-800">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-slate-700">Page Not Found</h2>
        <p className="mt-3 text-lg text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;