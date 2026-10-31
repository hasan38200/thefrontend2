import { motion } from "framer-motion";
import { Reveal, Eyebrow, H2, Sec } from "../../../ui";

// The four steps shown in the design
const FOUR_STEPS = [
  ["Brief", "Your product, audience, market and goal."],
  ["Research", "We study what works for your brand and check every creator's fit."],
  ["Recommend & direct", "A shortlist with reasons, plus scripts and hooks."],
  ["Launch & report", "Booking, approvals, and a report on what worked."],
];

export default function HowWeWork() {
  return (
    <Sec id="how">
      <div className="text-center">
        <Eyebrow className="text-[12px] sm:text-[13px]">How we work</Eyebrow>
        <H2 className="mx-auto !text-navy">From brief to report, in four steps.</H2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {FOUR_STEPS.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 4) * 0.1} className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full flex-col items-center rounded-3xl border border-navy/10 bg-white px-5 py-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10 sm:px-6 sm:py-10"
            >
              <motion.span
                whileHover={{ rotate: -8, scale: 1.1 }}
                className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-navy font-display text-2xl font-bold text-white sm:mb-6"
              >
                {i + 1}
              </motion.span>

              <h3 className="font-display text-xl text-red sm:text-2xl">{t}</h3>
              <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-navy/80 sm:text-sm">{d}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}