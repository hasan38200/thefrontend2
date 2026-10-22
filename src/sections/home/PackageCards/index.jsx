import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router";
import { Reveal } from "../../../ui";
import { PKGS } from "../../../data";
import { btnMotion } from "../../../btnMotion";

/* Colors designed for a white background */
const ST = [
  {
    box: "bg-white border border-navy/15 text-navy rounded-tr-[5rem] shadow-sm hover:shadow-2xl hover:shadow-navy/10",
    dark: false,
    eye: "text-[#92EEFF]",
    dash: "text-red",
    glow: "rgba(102,155,187,0.25)",
    accent: "bg-red",
    btn: "bg-navy text-white hover:bg-red",
    blob: "bg-sky/25",
  },
  {
    box: "bg-gradient-to-br from-navy to-[#1d4e68] text-white shadow-xl shadow-navy/25",
    dark: true,
    eye: "text-[#92EEFF]",
    dash: "text-[#92EEFF]",
    glow: "rgba(146,238,255,0.22)",
    accent: "bg-[#92EEFF]",
    btn: "bg-white text-navy hover:bg-[#92EEFF]",
    blob: "bg-[#92EEFF]/20",
  },
  {
    box: "bg-sky/10 border border-sky/30 text-navy rounded-tl-[5rem] hover:shadow-2xl hover:shadow-sky/20",
    dark: false,
    eye: "text-[#92EEFF]",
    dash: "text-sky",
    glow: "rgba(146,238,255,0.35)",
    accent: "bg-navy",
    btn: "bg-red text-white hover:bg-navy",
    blob: "bg-[#92EEFF]/30",
  },
];

function PackageCard({ p, i }) {
  const s = ST[i % ST.length];
  const reduce = useReducedMotion();

  // NEW: cursor-following spotlight
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, ${s.glow}, transparent 70%)`;
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <Reveal delay={i * 0.12} className="h-full">
      <motion.div
        onMouseMove={onMove}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`group relative flex h-full flex-col overflow-hidden p-8 transition-shadow duration-500 md:p-10 ${s.box}`}
      >
        {/* NEW: spotlight */}
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* NEW: card shimmer sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[450%]"
        />

        {/* NEW: floating glow blob */}
        {!reduce && (
          <motion.span
            aria-hidden
            animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
            transition={{ duration: 7 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl ${s.blob}`}
          />
        )}

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${s.eye}`}>{p.tag}</p>

            {p.best && (
              <motion.span
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
                className="relative shrink-0"
              >
                {/* NEW: gentle bobbing + pulse ring around the badge */}
                <motion.span
                  animate={reduce ? undefined : { y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative block rounded-full bg-transparent border border[#92EEFF] px-4 py-2 text-center text-sm font-semibold leading-tight text-[#92EEFF]"
                >
                  {!reduce && (
                    <motion.span
                      aria-hidden
                      animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border-2 border-[#92EEFF]"
                    />
                  )}
                  {p.best}
                </motion.span>
              </motion.span>
            )}
          </div>

          <h3 className="font-display !text-3xl !font-extrabold md:!text-4xl">{p.n}</h3>
          <p className={`mt-4 text-lg leading-relaxed ${s.dark ? "text-white/85" : "text-navy/75"}`}>{p.d}</p>

          <ul className="mb-8 mt-6 flex-1 space-y-2.5">
            {p.f.map((f, j) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.25 + j * 0.07, duration: 0.5 }}
                className="transition-transform duration-300 hover:translate-x-1.5"
              >
                <span className={`mr-1 font-bold ${s.dash}`}>—</span> {f}
              </motion.li>
            ))}
          </ul>

          {/* Button: same spring tilt as the rest of the site (includes scale + tap) */}
          <motion.div {...btnMotion}>
            <Link
              to="/brief"
              className={`group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full py-5 text-center text-lg font-semibold transition-colors duration-300 ${s.btn}`}
            >
              {/* NEW: shimmer sweep across the button */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[450%]"
              />
              <span className="relative">{p.cta}</span>
              {/* NEW: arrow slides in */}
              <span className="relative inline-block -translate-x-2 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* NEW: accent bar draws in along the bottom */}
        <span
          aria-hidden
          className={`absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${s.accent}`}
        />
      </motion.div>
    </Reveal>
  );
}

export default function PackageCards() {
  return (
    <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
      {PKGS.map((p, i) => (
        <PackageCard key={p.n} p={p} i={i} />
      ))}
    </div>
  );
}