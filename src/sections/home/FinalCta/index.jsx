import { motion } from "framer-motion";
import { Link } from "react-router";
import { Mag, Words, Eyebrow, Reveal, ease } from "../../../ui";
import { btnMotion } from "../../../btnMotion";

export default function FinalCta() {
  return (
    <section className="bg-white px-4 pb-8 pt-5 sm:px-5 sm:pb-10 sm:pt-6 md:px-10 md:pb-12 md:pt-8">
      <motion.div
        // FIXED: Changed bg-red + bg-cream conflict to just bg-[#C82333] (the red from your screenshot)
        className="mx-auto flex max-w-[92rem] flex-col justify-between gap-6 rounded-br-[3rem] rounded-tl-[3rem] bg-[#C82333] px-6 py-10 text-white sm:gap-8 sm:rounded-br-[4rem] sm:rounded-tl-[4rem] sm:px-8 sm:py-12 md:rounded-br-[6rem] md:rounded-tl-[6rem] md:px-12 md:py-16 lg:flex-row lg:items-center lg:rounded-br-[9rem] lg:rounded-tl-[9rem] lg:px-20 lg:py-20"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="lg:max-w-3xl">
          <Eyebrow className="uppercase tracking-[0.18em] !text-[#0F2C3D]">For brands</Eyebrow>
          
          {/* FIXED: Added !pt-2 !pb-2 to the h2 to prevent line clipping */}
          <h2 className="font-display !font-extrabold !tracking-tight !pt-2 !pb-2">
            <Words text="Not just any talent. The" className="!inline-block text-white" />
            {/* FIXED: Added !pb-2 !pr-1 to the italic word */}
            <Words text="right" className="!inline-block font-serif italic !font-normal text-[#92EEFF] !pb-2 !pr-1" delay={0.3} />
            <Words text="talent for your brand." className="!inline-block text-white" delay={0.4} />
          </h2>
        </div>

        <Reveal delay={0.2} className="shrink-0">
          <Mag>
            <motion.div {...btnMotion} className="inline-block">
              <Link
                to="/brief"
                className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-base font-semibold text-[#C82333] transition-colors duration-300 hover:bg-[#0F2C3D] hover:text-white sm:px-9 sm:py-5 sm:text-lg"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-[#92EEFF]/50 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[450%]"
                />
                <span className="relative">Submit a brief</span>
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