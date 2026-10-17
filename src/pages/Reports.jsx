import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Sec, ease } from "../ui";

// ---------- Data ----------
const REPORTS = [
  {
    id: 1,
    type: "Guide",
    category: "Talent & PR",
    title: "The brand guide to choosing creators",
    desc: "Our full scorecard method, with a template you can use for your next campaign.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-navy",
    shape: "rounded-tr-[2rem]",
  },
  {
    id: 2,
    type: "Report",
    category: "Talent & PR",
    title: "Influencer marketing in Pakistan",
    desc: "How brands are working with creators, and where the opportunities are.",
    image: "https://images.pexels.com/photos/5081933/pexels-photo-5081933.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-red",
    shape: "rounded-tl-[2rem]",
  },
  {
    id: 3,
    type: "Checklist",
    category: "Shoots",
    title: "The shoot planning checklist",
    desc: "Everything to sort before shoot day, from shot lists to usage rights.",
    image: "https://images.pexels.com/photos/3014016/pexels-photo-3014016.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-sky",
    shape: "rounded-bl-[2rem]",
  },
  {
    id: 4,
    type: "Playbook",
    category: "Paid media",
    title: "Creator ads playbook",
    desc: "How to run creator content as ads on Meta and TikTok, step by step.",
    image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-navy",
    shape: "rounded-bl-[2rem]",
  },
  {
    id: 5,
    type: "Guide",
    category: "Social media",
    title: "Social media planning template",
    desc: "A ready-to-use monthly content calendar with prompts for every week.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-red",
    shape: "rounded-tr-[2rem]",
  },
  {
    id: 6,
    type: "Report",
    category: "Talent & PR",
    title: "Reaching diaspora audiences abroad",
    desc: "How brands can connect with Pakistani audiences in North America through creators.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-sky",
    shape: "rounded-tl-[2rem]",
  },
];

// ---------- Components ----------
function ReportCard({ report }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-navy/20 bg-white p-4 transition-shadow hover:shadow-lg">
      
      {/* Fixed Image Area */}
      <div className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden ${report.shape} ${report.bg}`}>
        <img 
          src={report.image} 
          alt={report.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>

      {/* Badges */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-cream">
          {report.type}
        </span>
        <span className="rounded-full bg-[#FBEFD6] px-3 py-1 text-xs font-semibold text-navy">
          {report.category}
        </span>
      </div>

      {/* Text Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-display text-lg font-semibold leading-snug text-navy md:text-xl">
          {report.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">
          {report.desc}
        </p>
      </div>

      {/* Bottom Link */}
      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-red">
        <span>Get it free</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}

// ---------- Page ----------
export default function Reports() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      e.target.reset();
    }, 1000);
  };

  const featuredReport = REPORTS[0];

  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pt-[10%] pb-20 md:px-10">
        
        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">
              Latest · Reports
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-navy md:text-5xl lg:text-6xl">
              Reports and guides to make the <span className="font-serif italic text-red">right</span> call.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/75 md:text-lg">
              Free, practical resources on talent, PR, social media, paid media and production. Download, use and share with your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#featured" className="inline-flex items-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-cream transition hover:bg-red/90 md:text-base">
                Get the featured report
              </a>
              <a href="#library" className="inline-flex items-center rounded-full border border-navy/30 px-6 py-3 text-sm font-semibold text-navy transition hover:border-red hover:text-red md:text-base">
                Browse all
              </a>
            </div>
          </motion.div>

          {/* Featured Card */}
          <div id="featured">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] bg-navy p-6 md:p-8">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tr-[2rem] rounded-bl-[2rem] bg-sky">
                  <img 
                    src={featuredReport.image} 
                    alt="Featured Report" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
                <div className="mt-6">
                  <span className="rounded-full bg-red px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                    Featured report
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.1] text-cream md:text-3xl">
                    {featuredReport.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cream/80 md:text-base">
                    {featuredReport.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* RESOURCE LIBRARY */}
        <div id="library" className="mt-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
                The resource library.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xs text-sm text-navy/70 md:text-right md:text-base">
                Guides, reports, checklists and playbooks, all free to download.
              </p>
            </Reveal>
          </div>

          {/* Grid Layout */}
          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REPORTS.map((report, i) => (
              <Reveal key={report.id} delay={i * 0.05} className="h-full">
                <ReportCard report={report} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* GET YOUR REPORT FORM */}
        <div className="mt-32">
          <Reveal>
            <div className="grid grid-cols-1 overflow-hidden rounded-tr-[4rem] border border-navy/30 bg-cream lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">
                  Free download
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-navy md:text-5xl">
                  Get your report.
                </h2>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-navy/75">
                  Tell us where to send it. You'll also get new reports as they're released.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-sm font-semibold text-navy md:text-base">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-red text-white">✓</span>
                    Free, no strings attached
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-navy md:text-base">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-sky text-white">✓</span>
                    Practical and easy to share
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-navy md:text-base">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-navy text-white">✓</span>
                    Unsubscribe any time
                  </li>
                </ul>
              </div>
              <div className="bg-white/50 p-8 md:p-12 lg:p-14">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-navy">Which report?</span>
                    <select required className="mt-2 w-full appearance-none rounded-xl border border-navy/30 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20">
                      <option value="">Select a report</option>
                      {REPORTS.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
                    </select>
                  </label>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Name</span>
                      <input required type="text" className="mt-2 w-full rounded-xl border border-navy/30 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Work email</span>
                      <input required type="email" className="mt-2 w-full rounded-xl border border-navy/30 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Company</span>
                      <input required type="text" className="mt-2 w-full rounded-xl border border-navy/30 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Job title</span>
                      <input type="text" className="mt-2 w-full rounded-xl border border-navy/30 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                  </div>
                  <div className="mt-4">
                    <button type="submit" disabled={formStatus === "sending"} className="rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream transition hover:bg-red/90 disabled:opacity-50 md:text-base">
                      {formStatus === "sending" ? "Sending..." : "Send me the report"}
                    </button>
                    {formStatus === "success" && <p className="mt-4 font-semibold text-green-600">Report sent to your email!</p>}
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>

        {/* NEWSLETTER */}
        <Reveal delay={0.1}>
          <div className="relative mt-32 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] bg-sky px-8 py-16 md:px-16 md:py-20">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-navy/60 md:text-sm">
                  Newsletter
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
                  Get the <span className="font-serif italic text-white">right</span> ideas, monthly.
                </h2>
                <p className="mt-4 text-base text-navy/80">
                  New posts, reports and talent insights in your inbox. No spam.
                </p>
              </div>
              <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required className="w-full rounded-full border border-navy/20 bg-cream px-6 py-3.5 text-sm text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/20" />
                <button type="submit" className="whitespace-nowrap rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-red/90">Subscribe</button>
              </form>
            </div>
          </div>
        </Reveal>

      </div>
    </Sec>
  );
}