import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Area } from "../Field";

const NEEDS = ["Talent & PR", "Social media", "Paid media", "Shoots", "Not sure yet"];

export default function BrandForm() {
  const [needs, setNeeds] = useState([]);
  // Pre-fill with empty string instead of leaving them undefined
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", brief: "" });
  const [status, setStatus] = useState("");
  
  const toggleNeed = (n) => {
    setNeeds((prev) => prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Build FormData manually from the React state
    const formData = new FormData();
    formData.append("fullName", `${form.name || "No Name"} from ${form.company || "No Company"}`);
    formData.append("email", form.email || "No Email");
    formData.append("phone", form.phone || "No Phone");
    formData.append("role", "Brand Brief");
    formData.append("portfolio", "N/A");
    formData.append("why", `Needs: ${needs.length > 0 ? needs.join(", ") : "None selected"}\n\nBrief: ${form.brief || "No brief provided"}`);

    try {
      const response = await fetch("https://olivedrab-ibis-851738.hostingersite.com/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setNeeds([]);
        setForm({ name: "", company: "", email: "", phone: "", brief: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const p = { form, setForm };

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      
      {/* LEFT SIDE */}
      <div className="pt-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-red">
          Submit a brief
        </p>
        
        <h1 className="mt-4 font-display text-[2.75rem] sm:text-5xl md:text-[3.5rem] font-bold leading-[1.05] text-navy">
          Tell us what you're launching.<br />
          We'll find who should say it.
        </h1>
        
        <p className="mt-6 text-[15px] leading-relaxed text-navy/70">
          Share the essentials and we'll come back with research-backed recommendations, a timeline and next steps, usually starting with a short discovery call.
        </p>

        <div className="mt-10 space-y-4">
          {[
            "We review your brief and objectives.",
            "A discovery call on audience, geography, budget and timing.",
            "A proposal with scope, deliverables and timeline."
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-bold text-red">0{i + 1}</span>
              <span className="text-[15px] text-navy/80">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy/15 pt-6 text-[13px] text-navy/60">
          Prefer email? <a href="mailto:teamrightalent@gmail.com" className="underline hover:text-red">teamrightalent@gmail.com</a>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-[2.5rem] border border-gray-100 bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        {/* Removed encType as we are building data manually */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Your name" name="name" {...p} />
            <Input label="Brand / company" name="company" {...p} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Work email" name="email" type="email" {...p} />
            <Input label="Phone / WhatsApp" name="phone" type="tel" {...p} />
          </div>

          <div>
            <label className="text-sm font-semibold text-navy mb-2 block">What do you need?</label>
            <div className="flex flex-wrap gap-2.5">
              {NEEDS.map((n) => {
                const active = needs.includes(n);
                return (
                  <button
                    type="button"
                    key={n}
                    onClick={() => toggleNeed(n)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium transition-all ${
                      active 
                        ? "border-navy bg-navy text-white" 
                        : "border-gray-300 text-navy hover:border-navy"
                    }`}
                  >
                    <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${active ? "border-white" : "border-gray-400"}`}>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </span>
                    {n}
                  </button>
                );
              })}
            </div>
          </div>

          <Area 
            label="Tell us briefly about your product and goal" 
            name="brief" 
            placeholder="e.g. Launching a skincare serum in Lahore, need 5 creators"
            rows={4} 
            {...p} 
          />

          <button type="submit" disabled={status === "sending"} className="mt-4 w-full rounded-full bg-red py-3.5 text-[15px] font-bold text-white transition hover:bg-[#a81b2a] disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send brief"}
          </button>
          
          {status === "success" && (
            <p className="text-center text-[14px] font-bold text-green-600 mt-2">Brief sent successfully! We'll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-center text-[14px] font-bold text-red-600 mt-2">Something went wrong. Please try again.</p>
          )}
          
          <p className="text-center text-[12px] text-navy/50">
            Takes under a minute.
          </p>
        </form>
      </motion.div>
    </div>
  );
}