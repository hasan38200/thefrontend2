import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Words, Btn, ease } from "../../../ui";
import { Input, Select, Area } from "../Field";

const NEED = ["Right Match (Research & shortlist)", "Right Direction (+ strategy & scripts)", "Right Campaign (Full management)", "Not sure yet (Help me choose)"];
const BUDGET = ["Under PKR 100,000 / US$500", "PKR 100,000 – 350,000 / US$500 – 2,500", "PKR 350,000+ / US$2,500+", "Not sure yet"];
const TIME = ["Within 2 weeks", "2 – 6 weeks", "Over 6 weeks", "Ongoing / monthly"];
const STEPS = ["We review your brief and objectives.", "A discovery call on audience, geography, budget and timing.", "A proposal with scope, deliverables, exclusions and timeline."];
const EMPTY = { name: "", company: "", email: "", phone: "", need: "", product: "", markets: "", budget: "", time: "", goal: "" };

export default function BrandForm() {
  const [form, setForm] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!form.name.trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) x.email = "Enter a valid email.";
    if (!form.need) x.need = "Choose one option.";
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
          <h1 className="font-display text-5xl md:text-7xl">Brief received.</h1>
          <p className="mt-6 text-lg">Thank you, we'll review it and get back to you to set up a discovery call.</p>
          <div className="mt-8"><Btn onClick={() => { setForm(EMPTY); setDone(false); }}>Submit another brief</Btn></div>
        </motion.div>
      ) : (
        <motion.div key="form" exit={{ opacity: 0, y: -20 }} className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold text-red">Submit a brief</p>
            <h1 className="font-display text-4xl leading-[1.02] md:text-6xl">
              <Words text="Tell us what you're launching. We'll find who should say it." go />
            </h1>
            <p className="mt-6 text-lg">Share the essentials and we'll come back with the right package, a timeline and next steps, usually starting with a short discovery call.</p>
            <ol className="mt-8 space-y-4">
              {STEPS.map((s, i) => (
                <motion.li key={s} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.12, ease }} className="flex gap-4 border-t border-navy/20 pt-4">
                  <span className="font-display text-2xl text-red">{i + 1}.</span>{s}
                </motion.li>
              ))}
            </ol>
            <p className="mt-8">Prefer email? <span className="font-semibold">[YOUR EMAIL]</span></p>
          </div>

          <form onSubmit={submit} noValidate className="space-y-5 rounded-3xl border border-sky bg-sky/20 p-6 md:p-10 lg:col-span-7">
            <Input label="Your name" name="name" error={err.name} {...p} />
            <Input label="Company / brand" name="company" {...p} />
            <Input label="Work email" name="email" type="email" error={err.email} {...p} />
            <Input label="Phone / WhatsApp" name="phone" type="tel" {...p} />
            <fieldset>
              <legend className="text-sm font-semibold">What do you need?</legend>
              <div className="mt-2 space-y-2">
                {NEED.map((o) => (
                  <label key={o} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${form.need === o ? "border-navy bg-navy text-cream" : "border-navy/30 hover:border-red"}`}>
                    <input type="radio" name="need" className="accent-red" checked={form.need === o} onChange={() => setForm({ ...form, need: o })} />{o}
                  </label>
                ))}
              </div>
              {err.need && <span className="mt-1 block text-sm text-red">{err.need}</span>}
            </fieldset>
            <Input label="Product / category" name="product" placeholder="e.g. vitamin C serum" {...p} />
            <Input label="Target market(s)" name="markets" placeholder="e.g. Karachi, Lahore, Toronto" {...p} />
            <Select label="Approximate budget" name="budget" options={BUDGET} {...p} />
            <Select label="Timeline" name="time" options={TIME} {...p} />
            <p className="text-sm">We only use these details to respond to your brief.</p>
            <Btn>Send brief</Btn>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
