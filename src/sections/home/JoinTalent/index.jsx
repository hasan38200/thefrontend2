import { motion } from "framer-motion";
import { Mag, Words, Eyebrow, Reveal, ease } from "../../../ui";
import { btnMotion } from "../../../btnMotion";

export default function JoinTalent() {
  return (
    <section id="join" className="bg-white px-5 pt-6 md:px-10 md:pt-8">
      <motion.div
        className="mx-auto flex max-w-[92rem] flex-col justify-between gap-8 rounded-bl-[5rem] rounded-tr-[5rem] bg-navy px-7 py-12 text-cream md:flex-row md:items-center md:rounded-bl-[9rem] md:rounded-tr-[9rem] md:px-20 md:py-20"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="md:max-w-3xl">
          <Eyebrow dark className="uppercase tracking-[0.18em] !text-[#92EEFF]">For creators</Eyebrow>
          <h2 className="font-display !font-extrabold !tracking-tight text-white">
            <Words text="Are you the" className="!inline-block" />
            <Words text="right" className="!inline-block font-serif italic !font-normal text-[#92EEFF]" delay={0.2} />
            <Words text="talent?" className="!inline-block" delay={0.3} />
          </h2>
          <Reveal>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white">
              UGC creators, influencers, models, actors and presenters: apply to join our roster. We vet every application and match you only with brands that genuinely fit your niche and audience.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="shrink-0">
          <Mag>
            {/* Same spring tilt as the other buttons */}
            <motion.div {...btnMotion} className="inline-block">
              <a
                href="mailto:[YOUR EMAIL]"
                className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white border px-9 py-5 text-lg font-semibold text-navy transition-colors duration-300 hover:bg-cream hover:text-navy"
              >
                {/* Shimmer sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[450%]"
                />
                <span className="relative">Apply to join</span>
                {/* Arrow slides in */}
                <span className="relative inline-block -translate-x-2 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 ">
                  →
                </span>
              </a>
            </motion.div>
          </Mag>
        </Reveal>
      </motion.div>
    </section>
  );
}