import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Words, Btn, ease } from "../../../ui";
import { Input, Select, Area } from "../Field";

const ROLES = ["UGC creator", "Influencer", "Model", "Actor / presenter", "Photographer / videographer"];
const PLATFORMS = ["Instagram", "TikTok", "YouTube", "Facebook", "LinkedIn", "Other"];
const STEPS = ["We review your profile, content and audience.", "If it's a fit, a short call to get to know your work.", "We match you with brands that suit your niche and audience."];
const EMPTY = { name: "", email: "", phone: "", city: "", roles: [], platform: "", link: "", niche: "", audience: "", languages: "", collabs: "" };

export default function CreatorForm() {
  const [form, setForm] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  const toggle = (r) =>
    setForm({ ...form, roles: form.roles.includes(r) ? form.roles.filter((x) => x !== r) : [...form.roles, r] });

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!form.name.trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) x.email = "Enter a valid email.";
    if (!form.roles.length) x.roles = "Choose at least one.";
    setErr(x);
    if (Object.keys(x).length) return;
    // TODO: send `form` to your backend / Formspree / email service here.
    setDone(true);
    window.__lenis?.scrollTo(0, { duration: 1 });
  };

  const p = { form, setForm };
  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div key="ok" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="max-w-2xl py-16">
          <h1 className="font-display text-5xl md:text-7xl">Application received.</h1>
          <p className="mt-6 text-lg">Thank you, we'll review your profile and get back to you.</p>
          <div className="mt-8"><Btn onClick={() => { setForm(EMPTY); setDone(false); }}>Submit another application</Btn></div>
        </motion.div>
      ) : (
        <motion.div key="form" exit={{ opacity: 0, y: -20 }} className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red">Join as talent</p>
            <h1 className="font-display text-5xl leading-[1.02] md:text-6xl">
              <Words text="Are you the" go className="!inline-block" />
              <Words text="right" go delay={0.2} className="!inline-block font-serif italic !font-normal text-red" />
              <Words text="talent?" go delay={0.3} className="!inline-block" />
            </h1>
            <p className="mt-6 text-lg text-navy/80">UGC creators, influencers, models, actors and presenters: apply to join our roster. We only match you with brands that fit your niche and audience.</p>
            <ol className="mt-8 space-y-4">
              {STEPS.map((s, i) => (
                <motion.li key={s} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.12, ease }} className="flex gap-4">
                  <span className="font-bold text-red">0{i + 1}</span>{s}
                </motion.li>
              ))}
            </ol>
            <div className="mt-8 border-t border-navy/20 pt-5 text-navy/80">
              Questions? <span className="underline">[YOUR EMAIL]</span>
            </div>
          </div>

          <form onSubmit={submit} noValidate className="grid gap-5 rounded-tr-[5rem] border-2 border-navy bg-cream p-6 sm:grid-cols-2 md:p-10 lg:col-span-7">
            <Input label="Full name" name="name" error={err.name} {...p} />
            <Input label="Email" name="email" type="email" error={err.email} {...p} />
            <Input label="Phone / WhatsApp" name="phone" type="tel" {...p} />
            <Input label="City & country" name="city" placeholder="e.g. Lahore, Pakistan" {...p} />

            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold">I am a… (choose all that apply)</legend>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {ROLES.map((r) => {
                  const on = form.roles.includes(r);
                  return (
                    <motion.label key={r} whileTap={{ scale: 0.97 }}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 font-semibold transition-colors ${on ? "border-navy bg-navy text-cream" : "border-navy/30 hover:border-red"}`}>
                      <input type="checkbox" checked={on} onChange={() => toggle(r)} className="h-5 w-5 accent-red" />{r}
                    </motion.label>
                  );
                })}
              </div>
              {err.roles && <span className="mt-1 block text-sm text-red">{err.roles}</span>}
            </fieldset>

            <Select label="Main platform" name="platform" options={PLATFORMS} placeholder="Select one" {...p} />
            <Input label="Profile or portfolio link" name="link" placeholder="https://" {...p} />
            <Input label="Niche / content focus" name="niche" placeholder="e.g. skincare, food, fashion" {...p} />
            <Input label="Where is most of your audience?" name="audience" placeholder="e.g. Karachi, UAE, Canada" {...p} />
            <Input label="Languages" name="languages" placeholder="e.g. Urdu, English" {...p} />
           <Area label="Brand collaborations so far (optional)" name="collabs" placeholder="Brands you've worked with, or links to your best work" rows={6} className="sm:col-span-2" {...p} />
            <p className="text-sm text-navy/80 sm:col-span-2">If you're shortlisted, we may ask for audience insight screenshots from your platform.</p>
            <div className="sm:col-span-2"><Btn>Submit application</Btn></div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
