import { motion } from "framer-motion";
import { Mag, Words, Eyebrow, Reveal, ease } from "../../../ui";

export default function JoinTalent() {
  return (
    <section id="join" className="bg-cream px-5 pt-6 md:px-10 md:pt-8">
      <motion.div
        className="mx-auto flex max-w-[92rem] flex-col justify-between gap-8 rounded-bl-[5rem] rounded-tr-[5rem] bg-navy px-7 py-12 text-cream md:flex-row md:items-center md:rounded-bl-[9rem] md:rounded-tr-[9rem] md:px-20 md:py-20"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="md:max-w-3xl">
          <Eyebrow dark className="uppercase tracking-[0.18em]">For creators</Eyebrow>
          <h2 className="font-display !font-extrabold !tracking-tight">
            <Words text="Are you the" className="!inline-block" />
            <Words text="right" className="!inline-block font-serif italic !font-normal text-sky" delay={0.2} />
            <Words text="talent?" className="!inline-block" delay={0.3} />
          </h2>
          <Reveal>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/85">
              UGC creators, influencers, models, actors and presenters: apply to join our roster. We vet every application and match you only with brands that genuinely fit your niche and audience.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="shrink-0">
          <Mag>
            <a
              href="mailto:[YOUR EMAIL]"
              className="inline-block rounded-full bg-red px-9 py-5 text-lg font-semibold text-cream transition-colors hover:bg-cream hover:text-navy"
            >
              Apply to join
            </a>
          </Mag>
        </Reveal>
      </motion.div>
    </section>
  );
}