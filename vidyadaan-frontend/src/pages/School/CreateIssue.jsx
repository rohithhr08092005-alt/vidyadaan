import { useState } from "react";
import { FiCheckCircle, FiRotateCcw } from "react-icons/fi";

const initialState = {
  title: "",
  category: "",
  priority: "High",
  description: "",
  budget: "",
  materials: "",
  deadline: "",
  block: "",
  class: "",
};

function CreateIssue() {
  const [form, setForm] = useState(initialState);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setForm(initialState);
  };

  const handleReset = () => {
    setForm(initialState);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Issue Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-800">Create a New Issue</h1>
          <p className="mt-2 text-sm text-slate-500">Report problems, request repairs, and coordinate support for the school.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Issue Title</label>
              <input name="title" value={form.title} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Broken classroom fan" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Issue Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500">
                <option value="">Select category</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Utilities">Utilities</option>
                <option value="Safety">Safety</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Priority</label>
              <select name="priority" value={form.priority} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Estimated Budget</label>
              <input name="budget" value={form.budget} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="₹50,000" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Describe the issue in detail" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Required Materials</label>
              <input name="materials" value={form.materials} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Fans, wires, labor" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Deadline</label>
              <input type="date" name="deadline" value={form.deadline} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Affected Block / Class</label>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="block" value={form.block} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Block A" />
                <input name="class" value={form.class} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Class 8" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Upload Before Images</label>
              <input type="file" className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
              Submit Issue
            </button>
            <button type="button" onClick={handleReset} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              <FiRotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>
        </form>

        {showToast && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
            <FiCheckCircle className="h-5 w-5" />
            <span className="font-medium">Issue submitted successfully.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateIssue;
