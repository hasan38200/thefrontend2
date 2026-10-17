import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Sec, ease } from "../ui";

// ---------- Data ----------
const ROLES = [
  { title: "Talent Researcher", dept: "Talent & PR", type: "Full-time", location: "Remote", desc: "Research creators, assess niche and audience fit, and build ranked shortlists with clear rationale." },
  { title: "PR & Partnerships Executive", dept: "Talent & PR", type: "Full-time", location: "Remote", desc: "Run media outreach, PR seeding and brand partnerships, and keep launch timelines on track." },
  { title: "Social Media Executive", dept: "Social media", type: "Full-time", location: "Remote", desc: "Plan content calendars, write captions in English and Urdu, and manage brand communities." },
  { title: "Paid Media Specialist", dept: "Paid media", type: "Full-time", location: "Remote", desc: "Plan, launch and optimise Meta, TikTok and Google campaigns, and report results clearly." },
  { title: "Video Editor & Content Creator", dept: "Shoots & production", type: "Full-time / Freelance", location: "Remote", desc: "Edit reels, UGC-style video and brand films, and support shoots from concept to delivery." },
];

const HIRING_STEPS = [
  { num: "01", title: "Apply", desc: "Send the form below with your CV or portfolio.", color: "text-red" },
  { num: "02", title: "Chat", desc: "A short call to get to know you and your work.", color: "text-sky" },
  { num: "03", title: "Task or interview", desc: "A small, relevant task or a second conversation.", color: "text-navy" },
  { num: "04", title: "Offer", desc: "If it's a fit, we'll welcome you to the team.", color: "text-red" },
];

// ---------- Components ----------
const PlayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/90 drop-shadow-md">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
  </svg>
);

function RoleItem({ role, isOpen, onClick }) {
  return (
    <div className="border-b border-navy/30">
      <button onClick={onClick} className="flex w-full flex-col gap-4 py-6 text-left transition-colors hover:bg-navy/5 md:flex-row md:items-center md:justify-between md:py-8">
        <h3 className="font-display text-2xl font-semibold text-navy md:text-3xl">{role.title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-navy md:text-sm">{role.dept}</span>
          <span className="rounded-full border border-navy/30 px-4 py-1.5 text-xs font-semibold text-navy md:text-sm">{role.type}</span>
          <span className="rounded-full border border-navy/30 px-4 py-1.5 text-xs font-semibold text-navy md:text-sm">{role.location}</span>
          <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="ml-2 text-2xl font-light text-red">+</motion.span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} className="overflow-hidden">
            <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-base leading-relaxed text-navy/75 md:text-lg">{role.desc}</p>
              <a href="#apply-form" className="inline-flex shrink-0 items-center rounded-full bg-red px-8 py-3 text-sm font-semibold text-cream transition hover:bg-red/90 md:text-base">Apply for this role</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------- Page ----------
export default function Careers() {
  const [openRole, setOpenRole] = useState(null);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.target);

    try {
      // Points to the local Node.js backend
      const response = await fetch("https://thebackend-teal.vercel.app/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pt-[10%] pb-20 md:px-10">
        
        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">Who we are · Careers</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-navy md:text-5xl lg:text-6xl">
              Do the <span className="font-serif italic text-red">right</span> work, with the right people.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/75 md:text-lg">
              We're building a team that cares about fit, craft and honest results. If that sounds like you, we'd like to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#open-roles" className="inline-flex items-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-cream transition hover:bg-red/90 md:text-base">See open roles</a>
              <a href="#apply-form" className="inline-flex items-center rounded-full border border-navy/30 px-6 py-3 text-sm font-semibold text-navy transition hover:border-red hover:text-red md:text-base">Send your CV</a>
            </div>
          </motion.div>

          {/* Hero Collage */}
          <div className="relative aspect-[4/3] w-full">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease }} className="absolute left-0 top-0 h-[80%] w-[55%] overflow-hidden rounded-tr-[3rem] bg-navy">
              <video src="https://videos.pexels.com/video-files/3254006/3254006-hd_1920_1080_25fps.mp4" poster="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800" autoPlay loop muted playsInline className="h-full w-full object-cover opacity-80" />
            
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease }} className="absolute right-0 top-0 h-[45%] w-[40%] overflow-hidden rounded-bl-[3rem] bg-red">
              <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease }} className="absolute bottom-0 right-0 h-[50%] w-[40%] overflow-hidden rounded-tl-[3rem] bg-sky">
              <img src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Planning" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.8, type: "spring" }} className="absolute bottom-[10%] left-[10%] h-12 w-12 rounded-full bg-red md:h-16 md:w-16" />
          </div>
        </div>

        {/* WHY JOIN US */}
        <div className="mt-32">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">Why join us</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">A place to learn fast and do work you're proud of.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-tr-[3rem] bg-navy p-8 text-cream md:p-10">
                <h3 className="font-display text-2xl font-semibold">Learn the whole picture</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">Work across talent, PR, social media, paid media and shoots, not just one channel.</p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-tl-[3rem] bg-red p-8 text-cream md:p-10">
                <h3 className="font-display text-2xl font-semibold">Real briefs, early</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">Work on live brand campaigns, with guidance from people who have done it.</p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.15}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-bl-[3rem] bg-sky p-8 text-navy md:p-10">
                <h3 className="font-display text-2xl font-semibold">Ownership over your work</h3>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">A small team means your ideas and decisions shape the result.</p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.2}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-br-[3rem] bg-navy p-8 text-cream md:p-10">
                <h3 className="font-display text-2xl font-semibold">Local and international</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">Work with brands and talent in Pakistan, New York and Canada.</p>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* OPEN ROLES */}
        <div id="open-roles" className="mt-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">Open roles</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">Find your role.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm text-navy/70 md:text-base">Tap a role to see what it involves. Don't see a fit? Send your CV anyway.</p>
            </Reveal>
          </div>
          <div className="mt-12 border-t border-navy/30">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.05}>
                <RoleItem role={role} isOpen={openRole === i} onClick={() => setOpenRole(openRole === i ? null : i)} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* HOW HIRING WORKS */}
        <div className="mt-32">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">How hiring works.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {HIRING_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="border-t-4 border-navy/20 pt-6" style={{ borderColor: step.color.includes("red") ? "#BE1D23" : step.color.includes("sky") ? "#669BBB" : "#0F2C3D" }}>
                  <p className={`font-display text-4xl font-bold ${step.color}`}>{step.num}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* APPLY FORM */}
        <div id="apply-form" className="mt-32">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
              
              {/* Left side (Navy) */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="text-xs font-bold uppercase tracking-widest text-sky md:text-sm">Apply</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream md:text-5xl">Tell us about you.</h2>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-cream/80">Share your details and a link to your CV or portfolio. We read every application.</p>
              </div>

              {/* Right side (Cream Card) */}
              <div className="bg-cream p-8 md:p-12 lg:p-14 lg:rounded-tl-[4rem] lg:rounded-bl-[4rem] lg:my-6 lg:mr-6">
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Full name</span>
                      <input name="fullName" required type="text" className="mt-2 w-full rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Email</span>
                      <input name="email" required type="email" className="mt-2 w-full rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Phone / WhatsApp</span>
                      <input name="phone" required type="tel" className="mt-2 w-full rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-navy">Role</span>
                      <select name="role" required className="mt-2 w-full appearance-none rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20">
                        <option value="">Select a role</option>
                        {ROLES.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                        <option value="Other">Other / General application</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-navy">Portfolio link</span>
                    <input name="portfolio" type="text" placeholder="https://" className="mt-2 w-full rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20" />
                  </label>

                  {/* File Upload Input */}
                  <label className="block">
                    <span className="text-sm font-semibold text-navy">Upload CV (PDF)</span>
                    <input name="cvFile" type="file" accept=".pdf,.doc,.docx" className="mt-2 w-full rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 text-sm text-navy/70 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20 file:mr-4 file:rounded-full file:border-0 file:bg-red file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cream hover:file:bg-red/90" />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-navy">Why The Right Talent?</span>
                    <textarea name="why" required rows={4} className="mt-2 w-full resize-none rounded-xl border border-navy/20 bg-[#FBEFD6] px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/20"></textarea>
                  </label>

                  <div className="mt-2">
                    <button type="submit" disabled={formStatus === "sending"} className="rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream transition hover:bg-red/90 disabled:opacity-50 md:text-base">
                      {formStatus === "sending" ? "Sending..." : "Submit application"}
                    </button>
                    
                    {formStatus === "success" && (
                      <p className="mt-4 font-semibold text-green-600">Application sent successfully! We'll be in touch.</p>
                    )}
                    {formStatus === "error" && (
                      <p className="mt-4 font-semibold text-red-600">Something went wrong. Please try again.</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Sec>
  );
}