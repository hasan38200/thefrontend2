import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../Field";

const ROLES = ["UGC creator", "Influencer", "Model", "Actor / presenter", "Photographer / videographer"];

export default function CreatorForm() {
  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", link: "", niche: "" });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  
  const toggleRole = (r) => {
    setRoles((prev) => prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Build FormData manually with Failsafe defaults
    const formData = new FormData();
    
    // Failsafe: Ensure strings are actually strings and not undefined/null
    formData.append("fullName", form.name?.trim() || "Unknown Creator");
    formData.append("email", form.email?.trim() || "No Email Provided");
    formData.append("phone", form.phone?.trim() || "No Phone Provided");
    formData.append("role", "Creator Application");
    formData.append("portfolio", form.link?.trim() || "N/A");
    
    // Safely join the roles
    const selectedRoles = roles.length > 0 ? roles.join(", ") : "None selected";
    formData.append("why", `Roles: ${selectedRoles}\nNiche: ${form.niche?.trim() || "No niche provided"}`);
    
    // Add a dummy file or extra field just in case the backend demands it
    formData.append("cvFile", "N/A"); 

    try {
      const response = await fetch("https://peachpuff-newt-354936.hostingersite.com/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setRoles([]);
        setForm({ name: "", email: "", phone: "", link: "", niche: "" });
      } else {
        // Log the error response if backend sends one
        const errorData = await response.json().catch(() => ({}));
        console.error("Backend Error:", errorData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    }
  };

  const p = { form, setForm };

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      
      {/* LEFT SIDE */}
      <div className="pt-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-red">
          Join as talent
        </p>
        
        <h1 className="mt-4 font-display text-[2.75rem] sm:text-5xl md:text-[3.5rem] font-bold leading-[1.05] text-navy">
          Are you the <span className="font-serif italic text-red font-normal">right</span> talent?
        </h1>
        
        <p className="mt-6 text-[15px] leading-relaxed text-navy/70">
          UGC creators, influencers, models, actors and presenters: apply to join our roster. We only match you with brands that fit your niche and audience.
        </p>

        <div className="mt-10 space-y-4">
          {[
            "We review your profile, content and audience.",
            "If it's a fit, a short call to get to know your work.",
            "We match you with brands that suit your niche and audience."
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-bold text-red">0{i + 1}</span>
              <span className="text-[15px] text-navy/80">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy/15 pt-6 text-[13px] text-navy/60">
          Questions? <a href="mailto:hello@therighttalent.com" className="underline hover:text-red">[YOUR EMAIL]</a>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-[2.5rem] border border-gray-100 bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Full name" name="name" required {...p} />
            <Input label="Email" name="email" type="email" required {...p} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Phone / WhatsApp" name="phone" type="tel" {...p} />
            <Input label="Instagram or profile link" name="link" type="url" placeholder="https://instagram.com/..." {...p} />
          </div>

          <div>
            <label className="text-sm font-semibold text-navy mb-2 block">I am a...</label>
            <div className="flex flex-wrap gap-2.5">
              {ROLES.map((r) => {
                const active = roles.includes(r);
                return (
                  <button
                    type="button"
                    key={r}
                    onClick={() => toggleRole(r)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium transition-all ${
                      active 
                        ? "border-navy bg-navy text-white" 
                        : "border-gray-300 text-navy hover:border-navy"
                    }`}
                  >
                    <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${active ? "border-white" : "border-gray-400"}`}>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </span>
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          <Input label="Your niche" name="niche" placeholder="e.g. skincare, food, fashion" {...p} />

          <button type="submit" disabled={status === "sending"} className="mt-4 w-full rounded-full bg-red py-3.5 text-[15px] font-bold text-white transition hover:bg-[#a81b2a] disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Submit application"}
          </button>
          
          {status === "success" && (
            <p className="text-center text-[14px] font-bold text-green-600 mt-2">Application sent successfully! We'll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-center text-[14px] font-bold text-red-600 mt-2">Something went wrong. Please check the console.</p>
          )}
          
          <p className="text-center text-[12px] text-navy/50">
            Takes under a minute.
          </p>
        </form>
      </motion.div>
    </div>
  );
}