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

      <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-5 md:mt-10">
        {STEPS.map(([t, d], i) => (
          <Reveal
            key={t}
            delay={(i % 4) * 0.1}
            className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="flex h-full flex-col items-center rounded-2xl border border-[navy]/15 p-4 text-center sm:rounded-3xl sm:p-6"
            >
              <motion.span
                whileHover={{ rotate: -8, scale: 1.1 }}
                className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-navy font-display text-lg font-bold text-white sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl"
              >
                {i + 1}
              </motion.span>
              <h3 className="font-display text-lg text-red sm:text-xl">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm">{d}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}