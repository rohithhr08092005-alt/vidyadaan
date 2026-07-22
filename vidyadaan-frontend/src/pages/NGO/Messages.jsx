import { FiPaperclip, FiSend, FiUser } from "react-icons/fi";

const threads = [
  { name: "Principal Meera", preview: "Please share the updated fund report." },
  { name: "School Admin", preview: "Volunteer attendance is ready." },
];

function Messages() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="grid min-h-[650px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <h2 className="text-xl font-semibold">Inbox</h2>
            <div className="mt-5 space-y-3">
              {threads.map((thread) => (
                <div key={thread.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-50 p-2 text-emerald-600"><FiUser className="h-4 w-4" /></div>
                    <div>
                      <p className="font-medium text-slate-800">{thread.name}</p>
                      <p className="text-sm text-slate-500">{thread.preview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-5">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">Principal Meera</p>
              <p className="mt-1 text-sm text-slate-500">Online now</p>
            </div>

            <div className="mt-5 flex-1 space-y-3 rounded-2xl bg-slate-50 p-4">
              <div className="max-w-[80%] rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm">Please share the latest progress update.</div>
              <div className="ml-auto max-w-[80%] rounded-2xl bg-emerald-600 p-3 text-sm text-white shadow-sm">We have completed the first milestone and are preparing the next report.</div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
              <FiPaperclip className="text-slate-400" />
              <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Type a message" />
              <button className="rounded-lg bg-emerald-600 p-2.5 text-white"><FiSend className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
