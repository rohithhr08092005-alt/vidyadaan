import { useState } from "react";
import { FiDownload, FiEye } from "react-icons/fi";

const tabs = ["Before", "Progress", "After"];

const galleryData = {
  Before: [
    { title: "Damaged Classroom", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
    { title: "Broken Playground Fence", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" },
  ],
  Progress: [
    { title: "Repair in Progress", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" },
    { title: "Painting Work", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" },
  ],
  After: [
    { title: "Renovated Classroom", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
    { title: "New Playground", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" },
  ],
};

function Gallery() {
  const [activeTab, setActiveTab] = useState("Before");

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Gallery</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800">Visual Progress Gallery</h1>
          </div>
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === tab ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {galleryData[activeTab].map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-semibold text-slate-800">{item.title}</p>
                  <p className="text-sm text-slate-500">{activeTab} stage</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiEye className="h-4 w-4" /></button>
                  <button className="rounded-lg bg-emerald-50 p-2 text-emerald-600"><FiDownload className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
