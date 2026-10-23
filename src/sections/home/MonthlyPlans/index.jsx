import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router";
import { Mag, Reveal, ease } from "../../../ui";
import { RET } from "../../../data";
import { btnMotion } from "../../../btnMotion";

/* Colors chosen for a navy background */
const RULE = ["bg-[#92EEFF]", "bg-white", "bg-red"];
const GLOW = ["rgba(146,238,255,0.25)", "rgba(255,255,255,0.18)", "rgba(255,90,90,0.22)"];

export default function MonthlyPlans() {
  const reduce = useReducedMotion();

  // NEW: cursor-following spotlight across the whole section
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(146,238,255,0.12), transparent 70%)`;
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      className="group relative mt-8 overflow-hidden rounded-bl-[2.5rem] rounded-tr-[2.5rem] border-[1.5px] border-navy bg-navy p-5 shadow-2xl shadow-navy/30 sm:mt-10 sm:rounded-bl-[4rem] sm:rounded-tr-[4rem] sm:p-8 md:mt-12 md:rounded-bl-[5rem] md:rounded-tr-[5rem] md:p-10 lg:rounded-bl-[6rem] lg:rounded-tr-[6rem] lg:p-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease }}
    >
      {/* NEW: cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* NEW: drifting glow blobs */}
      {!reduce && (
        <>
          <motion.span
            aria-hidden
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#92EEFF]/20 blur-3xl sm:-right-20 sm:-top-20 md:h-72 md:w-72"
          />
          <motion.span
            aria-hidden
            animate={{ y: [0, -30, 0], x: [0, 24, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-sky/25 blur-3xl sm:-bottom-24 sm:-left-16 md:h-72 md:w-72"
          />
        </>
      )}

      {/* NEW: slow shimmer sweep across the whole panel */}
      {!reduce && (
        <motion.span
          aria-hidden
          initial={{ x: "-150%" }}
          animate={{ x: "450%" }}
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}

      <div className="relative z-10">
        <h3 className="font-display text-[#92EEFF] !text-2xl !font-extrabold sm:!text-3xl md:!text-4xl">
          We also work on a monthly basis
        </h3>

        

        <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90 sm:mt-4 sm:text-lg">
          For brands with a steady flow of briefs. Defined monthly scope, regular planning, one team that knows your brand.
        </p>

        <div className="mt-5 sm:mt-6">
          <Mag>
            {/* Same spring tilt button animation as the rest of the site */}
            <motion.div {...btnMotion} className="inline-block max-w-full">
              <Link
                to="/brief"
                className="group/btn relative inline-flex max-w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#92EEFF] bg-transparent px-5 py-3 text-center text-sm font-semibold text-[#92EEFF] transition-colors duration-300 hover:bg-[#92EEFF] hover:text-navy sm:px-8 sm:py-4 sm:text-base"
              >
                {/* NEW: shimmer sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[450%]"
                />
                <span className="relative">Discuss a monthly partnership</span>
                {/* NEW: arrow slides in */}
                <span className="relative inline-block">
                  →
                </span>
              </Link>
            </motion.div>
          </Mag>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-5 md:mt-10 md:grid-cols-3 md:gap-4 lg:gap-6">
          {RET.map((r, i) => (
            <Reveal key={r[0]} delay={i * 0.12}>
              {/* NEW: glass card with lift, border glow and corner glow on hover */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group/card relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-500 hover:border-[#92EEFF]/50 hover:bg-white/10 lg:p-6"
              >
                {/* NEW: corner glow that fades in on hover */}
                <span
                  aria-hidden
                  style={{ background: `radial-gradient(circle, ${GLOW[i % 3]}, transparent 70%)` }}
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                />

                {/* ORIGINAL rule that draws in (now visible on navy) */}
                <motion.div
                  className={`h-1 origin-left ${RULE[i % 3]}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease }}
                />

                {/* NEW: number badge that spins on hover */}
                <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#92EEFF]/50 text-[11px] font-bold text-[#92EEFF] transition-transform duration-700 group-hover/card:rotate-[360deg] sm:mt-5 sm:h-9 sm:w-9 sm:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h4 className="mt-3 font-display !text-lg !font-semibold text-white transition-transform duration-300 group-hover/card:translate-x-1 sm:mt-4 sm:!text-xl lg:!text-2xl">
                  {r[0]}
                </h4>
                <p className="mt-1 text-base font-semibold text-[#92EEFF] sm:text-lg lg:text-xl">Monthly retainer</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:mt-3 sm:text-base">{r[1]}</p>

                {/* NEW: accent bar draws along the bottom on hover */}
                <span
                  aria-hidden
                  className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/card:scale-x-100 ${RULE[i % 3]}`}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.div>
  );
}