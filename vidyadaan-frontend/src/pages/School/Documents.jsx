import { FiDownload, FiEye, FiUpload } from "react-icons/fi";

const documents = [
  { title: "School Registration", type: "PDF", updated: "2026-06-10" },
  { title: "UDISE Certificate", type: "PDF", updated: "2026-06-12" },
  { title: "Principal ID", type: "Image", updated: "2026-06-14" },
  { title: "Approval Letter", type: "PDF", updated: "2026-06-18" },
  { title: "Donation Agreement", type: "DOC", updated: "2026-06-19" },
  { title: "Completion Report", type: "PDF", updated: "2026-06-20" },
];

function Documents() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Documents</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800">Official Documents</h1>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
            <FiUpload className="h-4 w-4" />
            Upload Document
          </button>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <div key={doc.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">{doc.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{doc.type}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                  <FiEye className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">Updated on {doc.updated}</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100">Preview</button>
                <button className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-100">
                  <FiDownload className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documents;
