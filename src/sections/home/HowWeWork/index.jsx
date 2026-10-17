import { motion } from "framer-motion";
import { Reveal, Eyebrow, H2, Sec } from "../../../ui";
import { STEPS } from "../../../data";

export default function HowWeWork() {
  return (
    <Sec id="how">
      <div className="text-center">
        <Eyebrow className="text-[14px]">How we work</Eyebrow>
        <H2 className="mx-auto">From brief to report, in seven clear steps.</H2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {STEPS.map(([t, d], i) => (
          <Reveal
            key={t}
            delay={(i % 4) * 0.1}
            className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="flex h-full flex-col items-center rounded-3xl border border-navy/15 p-6 text-center transition-shadow hover:shadow-[0_14px_0_-8px_#669BBB]"
            >
              <motion.span
                whileHover={{ rotate: -8, scale: 1.1 }}
                className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-sky font-display text-2xl font-bold"
              >
                {i + 1}
              </motion.span>
              <h3 className="font-display">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed">{d}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}