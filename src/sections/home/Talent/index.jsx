import { motion } from "framer-motion";
import { Reveal, Eyebrow, H2, Sec, Img, ease } from "../../../ui";
import { TALENT, u, IMG } from "../../../data";

const SP = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function Talent() {
  return (
    <Sec id="talent" className="overflow-hidden">
      {/* HEADER */}
      <div className="grid items-end gap-3 sm:gap-4 md:grid-cols-2 md:gap-12">
        <div>
          <Eyebrow className="text-[14px] text-red">Our talent</Eyebrow>
          <H2 className="text-navy">A curated, vetted roster.</H2>
        </div>
        <Reveal>
          <p className="text-sm text-navy/70 sm:text-base md:text-lg">
            Every profile is reviewed before it's listed. We'd rather recommend five right people than fifty available ones.
          </p>
        </Reveal>
      </div>

      {/* GRID */}
      <div className="mt-8 grid gap-x-4 gap-y-6 sm:mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-12">
        {TALENT.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 0.1} className={SP[i % SP.length]}>
            <motion.div whileHover="h" className="group flex flex-col">
              
              {/* Image Container - RESTRICTED HEIGHT */}
              <motion.div 
                className="relative h-52 w-full overflow-hidden rounded-2xl bg-navy/5 shadow-sm sm:h-60 md:h-64 lg:h-72" 
                initial={{ clipPath: "inset(100% 0 0 0)" }} 
                whileInView={{ clipPath: "inset(0% 0 0 0)" }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, ease }}
              >
                <Img 
                  src={u(IMG.talent[i], 800)} 
                  alt={t} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Glassmorphic Badge */}
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[11px]">
                  {t}
                </span>

                {/* Subtle bottom gradient for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>

              {/* Text Content */}
              <div className="mt-3 flex flex-col px-1 sm:mt-4">
                <h3 className="font-display text-lg text-navy transition-colors duration-300 group-hover:text-red sm:text-xl">
                  {t}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-navy/70 sm:mt-1.5 sm:text-sm">
                  {d}
                </p>
              </div>

            </motion.div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}