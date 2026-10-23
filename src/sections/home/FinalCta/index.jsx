import { motion } from "framer-motion";
import { Link } from "react-router";
import { Mag, Words, Eyebrow, Reveal, ease } from "../../../ui";
import { btnMotion } from "../../../btnMotion";

export default function FinalCta() {
  return (
    <section className="bg-white px-4 pb-8 pt-5 sm:px-5 sm:pb-10 sm:pt-6 md:px-10 md:pb-12 md:pt-8">
      <motion.div
        className="bg-red mx-auto flex max-w-[92rem] flex-col justify-between gap-6 rounded-br-[3rem] rounded-tl-[3rem] bg-cream px-6 py-10 text-navy sm:gap-8 sm:rounded-br-[4rem] sm:rounded-tl-[4rem] sm:px-8 sm:py-12 md:rounded-br-[6rem] md:rounded-tl-[6rem] md:px-12 md:py-16 lg:flex-row lg:items-center lg:rounded-br-[9rem] lg:rounded-tl-[9rem] lg:px-20 lg:py-20"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="lg:max-w-3xl">
          <Eyebrow className="uppercase tracking-[0.18em] !text-navy">For brands</Eyebrow>
          <h2 className="font-display !font-extrabold !tracking-tight">
            <Words text="Not just any talent. The" className="!inline-block text-white" />
            <Words text="right" className="!inline-block font-serif italic !font-normal text-[#92EEFF]" delay={0.3} />
            <Words text="talent for your brand." className="!inline-block text-white" delay={0.4} />
          </h2>
        </div>

        <Reveal delay={0.2} className="shrink-0">
          <Mag>
            {/* Same spring tilt as the other buttons */}
            <motion.div {...btnMotion} className="inline-block">
              <Link
                to="/brief"
                className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-base font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white sm:px-9 sm:py-5 sm:text-lg"
              >
                {/* Shimmer sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-[#92EEFF]/50 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[450%]"
                />
                <span className="relative">Submit a brief</span>
                {/* Arrow slides in */}
                <span className="relative inline-block -translate-x-2 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                  →
                </span>
              </Link>
            </motion.div>
          </Mag>
        </Reveal>
      </motion.div>
    </section>
  );
}