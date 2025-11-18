import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // In a real setup, post to your backend/email service
    setTimeout(() => setStatus("Thanks! I’ll get back to you soon."), 1000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center gap-2 text-white">
          <Mail size={18} className="text-blue-400" />
          <h2 className="text-3xl font-bold">Get in touch</h2>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input type="text" required className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@company.com"/>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea rows={4} required className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white">
              <Send size={16} /> Send Message
            </button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </div>
        </form>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
