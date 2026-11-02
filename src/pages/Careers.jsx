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
  { num: "01", title: "Apply", desc: "Send the form below with your CV or portfolio.", color: "text-[#C82333]", border: "#C82333" },
  { num: "02", title: "Chat", desc: "A short call to get to know you and your work.", color: "text-[#67E8F9]", border: "#67E8F9" },
  { num: "03", title: "Task or interview", desc: "A small, relevant task or a second conversation.", color: "text-[#0F2C3D]", border: "#0F2C3D" },
  { num: "04", title: "Offer", desc: "If it's a fit, an offer to join the team.", color: "text-[#C82333]", border: "#C82333" },
];

// ---------- Components ----------
function RoleItem({ role, isOpen, onClick }) {
  return (
    <div className="border-b border-[#0F2C3D]/20">
      <button onClick={onClick} className="flex w-full flex-col gap-4 py-6 text-left transition-colors hover:bg-[#0F2C3D]/5 md:flex-row md:items-center md:justify-between md:py-8">
        <h3 className="font-display text-[1.3rem] font-bold text-[#0F2C3D] md:text-2xl">{role.title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#0F2C3D]/5 px-4 py-1.5 text-[11px] font-bold text-[#0F2C3D]">{role.dept}</span>
          <span className="rounded-full border border-[#0F2C3D]/20 px-4 py-1.5 text-[11px] font-bold text-[#0F2C3D]">{role.type}</span>
          <span className="rounded-full border border-[#0F2C3D]/20 px-4 py-1.5 text-[11px] font-bold text-[#0F2C3D]">{role.location}</span>
          <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="ml-2 text-2xl font-light text-[#C82333]">+</motion.span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} className="overflow-hidden">
            <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#0F2C3D]/70">{role.desc}</p>
              <a href="#apply-form" className="inline-flex shrink-0 items-center rounded-full bg-[#C82333] px-8 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#a81b2a]">Apply for this role</a>
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
      const response = await fetch("https://peachpuff-newt-354936.hostingersite.com/api/apply", {
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
    <Sec className="bg-[#FFFFFF] min-h-screen">
      <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-20 md:px-10 md:pt-32">
        
        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]">Careers at The Right Talent</p>
            <h1 className="mt-4 font-display text-[2.75rem] font-bold leading-[1.05] text-[#0F2C3D] md:text-5xl lg:text-[3.5rem]">
              Do the <span className="font-serif italic text-[#C82333] font-normal">right</span> work, with the right people.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-[#0F2C3D]/70">
              The Right Talent is building a team that cares about fit, craft and honest results. If that sounds like you, send your application.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#open-roles" className="inline-flex items-center rounded-full bg-[#C82333] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a81b2a]">See open roles</a>
              <a href="#apply-form" className="inline-flex items-center rounded-full border border-[#0F2C3D]/30 px-6 py-3 text-sm font-bold text-[#0F2C3D] transition hover:border-[#0F2C3D]">Send your CV</a>
            </div>
          </motion.div>

          {/* Hero Collage (Pure Images, No background colors or opacity masks) */}
          <div className="relative aspect-[4/3] w-full max-w-[500px] ml-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease }} className="absolute left-0 top-[10%] h-[90%] w-[55%] overflow-hidden rounded-tr-[3rem]">
              <video src="https://videos.pexels.com/video-files/3254006/3254006-hd_1920_1080_25fps.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease }} className="absolute right-0 top-0 h-[48%] w-[42%] overflow-hidden rounded-bl-[3rem]">
              <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team" className="h-full w-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease }} className="absolute bottom-0 right-0 h-[50%] w-[42%] overflow-hidden rounded-tl-[3rem]">
              <img src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Planning" className="h-full w-full object-cover" />
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.8, type: "spring" }} className="absolute bottom-[-8%] left-[30%] h-12 w-12 rounded-full bg-[#C82333] z-30" />
          </div>
        </div>

        {/* WHY JOIN US */}
        <div className="mt-32">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]">Why join us</p>
            <h2 className="mt-3 max-w-2xl font-display text-[2.2rem] font-bold leading-[1.1] text-[#0F2C3D] md:text-[2.75rem]">A place to learn fast and do work you're proud of.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-tr-[3rem] bg-[#0F2C3D] p-8 text-white md:p-10">
                <h3 className="font-display text-2xl font-semibold">Learn the whole picture</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">Work across talent, PR, social media, paid media and shoots, not just one channel.</p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-tl-[3rem] bg-[#C82333] p-8 text-white md:p-10">
                <h3 className="font-display text-2xl font-semibold">Real briefs, early</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">Work on live brand campaigns, with guidance from people who have done it.</p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.15}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-bl-[3rem] bg-[#67E8F9] p-8 text-[#0F2C3D] md:p-10">
                <h3 className="font-display text-2xl font-semibold">Ownership over your work</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#0F2C3D]/70">A small team means your ideas and decisions shape the result.</p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.2}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-center rounded-br-[3rem] bg-[#0F2C3D] p-8 text-white md:p-10">
                <h3 className="font-display text-2xl font-semibold">Local and international</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">Work with brands and talent in Pakistan, New York and Canada.</p>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* OPEN ROLES */}
        <div id="open-roles" className="mt-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]">Open roles</p>
              <h2 className="mt-3 font-display text-[2.2rem] font-bold text-[#0F2C3D] md:text-[2.75rem]">Find your role.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-[14px] text-[#0F2C3D]/70">Tap a role to see what it involves. Don't see a fit? Send your CV anyway.</p>
            </Reveal>
          </div>
          <div className="mt-10 border-t border-[#0F2C3D]/20">
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
            <h2 className="font-display text-[2.2rem] font-bold text-[#0F2C3D] md:text-[2.75rem]">How hiring works.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {HIRING_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="pt-5" style={{ borderTop: `3px solid ${step.border}` }}>
                  <p className={`font-display text-[2rem] font-bold ${step.color}`}>{step.num}</p>
                  <h3 className="mt-3 font-display text-[17px] font-bold text-[#0F2C3D]">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#0F2C3D]/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* APPLY FORM */}
        <div id="apply-form" className="mt-32">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F2C3D]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
              
              {/* Left side (Navy) */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#67E8F9]">Apply</p>
                <h2 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.1] text-white md:text-[3rem]">Tell us about you.</h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">Share your details and a link to your CV or portfolio. We read every application.</p>
              </div>

              {/* Right side (Cream Card) */}
              <div className="bg-[#FAFAFA] p-8 md:p-12 lg:p-14 lg:rounded-tl-[4rem] lg:rounded-bl-[4rem] lg:my-6 lg:mr-6">
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-5">
                  
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[13px] font-semibold text-[#0F2C3D]">Full name</span>
                      <input name="fullName" required type="text" className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333]" />
                    </label>
                    <label className="block">
                      <span className="text-[13px] font-semibold text-[#0F2C3D]">Email</span>
                      <input name="email" required type="email" className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333]" />
                    </label>
                    <label className="block">
                      <span className="text-[13px] font-semibold text-[#0F2C3D]">Phone / WhatsApp</span>
                      <input name="phone" required type="tel" className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333]" />
                    </label>
                    <label className="block">
                      <span className="text-[13px] font-semibold text-[#0F2C3D]">Role</span>
                      <select name="role" required className="mt-1.5 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333]">
                        <option value="">Select a role</option>
                        {ROLES.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                        <option value="Other">Other / General application</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[13px] font-semibold text-[#0F2C3D]">Portfolio link</span>
                    <input name="portfolio" type="text" placeholder="https://" className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333]" />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-semibold text-[#0F2C3D]">Upload CV (PDF)</span>
                    <input name="cvFile" type="file" accept=".pdf,.doc,.docx" className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-[#0F2C3D]/70 outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333] file:mr-4 file:rounded-full file:border-0 file:bg-[#C82333] file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#a81b2a]" />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-semibold text-[#0F2C3D]">Why The Right Talent?</span>
                    <textarea name="why" required rows={4} className="mt-1.5 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#C82333] focus:ring-1 focus:ring-[#C82333]"></textarea>
                  </label>

                  <div className="mt-2">
                    <button type="submit" disabled={formStatus === "sending"} className="rounded-full bg-[#C82333] px-8 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#a81b2a] disabled:opacity-50">
                      {formStatus === "sending" ? "Sending..." : "Submit application"}
                    </button>
                    
                    {formStatus === "success" && (
                      <p className="mt-4 text-sm font-bold text-green-600">Application sent successfully! We'll be in touch.</p>
                    )}
                    {formStatus === "error" && (
                      <p className="mt-4 text-sm font-bold text-red-600">Something went wrong. Please try again.</p>
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