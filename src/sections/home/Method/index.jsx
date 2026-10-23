import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { Reveal, Eyebrow, H2, Tilt, Sec, Img, ease } from "../../../ui";
import { METHOD, u, IMG } from "../../../data";

/* ---------- Card styles (same bento layout, new palette) ---------- */
const SPECS = [
  // 0 — navy hero card
  { span: "lg:col-span-5 lg:row-span-2", cls: "bg-navy text-white shadow-xl shadow-navy/20", dark: true, text: "text-white/80", glow: "rgba(146,238,255,0.22)", accent: "bg-[#92EEFF]", badge: "border-white/30 text-[#92EEFF]" },
  // 1 — navy + cyan text (YOUR CHANGE)
  { span: "lg:col-span-7", cls: "bg-navy text-[#92EEFF] border border-sky/40 shadow-xl shadow-navy/20", dark: true, text: "text-[#92EEFF]/80", glow: "rgba(146,238,255,0.28)", accent: "bg-[#92EEFF]", badge: "border-[#92EEFF]/40 text-[#92EEFF]" },
  // 2 — white card
  { span: "lg:col-span-4", cls: "bg-white text-navy border border-navy/10 shadow-sm", text: "text-navy/70", glow: "rgba(102,155,187,0.22)", accent: "bg-red", badge: "border-navy/20 text-red" },
  // 3 — red card
  { span: "lg:col-span-3", cls: "bg-white text-navy border border-navy/10 shadow-sm", text: "text-navy/70", glow: "rgba(146,238,255,0.35)", accent: "bg-sky", badge: "border-navy/20 text-red" },
  // 4 — white card
  { span: "lg:col-span-5", cls: "bg-white text-navy border border-navy/10 shadow-sm", text: "text-navy/70", glow: "rgba(146,238,255,0.35)", accent: "bg-sky", badge: "border-navy/20 text-red" },
  // 5 — navy gradient card
  { span: "lg:col-span-7", cls: "bg-gradient-to-br from-navy to-[#1d4e68] text-white shadow-xl shadow-navy/20", dark: true, text: "text-white/80", glow: "rgba(146,238,255,0.22)", accent: "bg-[#92EEFF]", badge: "border-white/30 text-[#92EEFF]" },
];

/* ---------- Parallax image (first card) ---------- */
function ParallaxImage() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-24, 24]);

  return (
    <div ref={ref} className="relative h-40 overflow-hidden sm:h-48 md:h-52">
      <motion.div style={{ y, scale: 1.15 }} className="h-full w-full">
        <Img src={u(IMG.method, 900)} className="h-full w-full object-cover" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
    </div>
  );
}

/* ---------- Single card ---------- */
function Card({ i, title, text }) {
  const s = SPECS[i % SPECS.length];
  const reduce = useReducedMotion();

  // Mouse-follow spotlight
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, ${s.glow}, transparent 70%)`;
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    // ORIGINAL: Reveal with the same stagger delay and grid span
    <Reveal delay={(i % 3) * 0.08} className={s.span}>
      {/* NEW: spring lift + cursor tracking (outside Tilt so they don't conflict) */}
      <motion.div
        onMouseMove={onMove}
        whileHover={reduce ? undefined : { y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        {/* ORIGINAL: Tilt */}
        <Tilt
          className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-2xl sm:rounded-3xl ${s.cls}`}
        >
          {/* NEW: cursor spotlight */}
          <motion.div
            aria-hidden
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* NEW: shimmer sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/2 z-[1] w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[450%]"
          />

          {/* NEW: floating glow on dark cards */}
          {s.dark && !reduce && (
            <motion.span
              aria-hidden
              animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl sm:h-40 sm:w-40"
            />
          )}

          {/* ORIGINAL image on the first card, now with parallax */}
          {i === 0 && <ParallaxImage />}

          <div className="relative z-10 p-4 sm:p-5 md:p-6">
            {/* NEW: number badge that spins on hover */}
            <span
              className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-bold transition-transform duration-700 group-hover:rotate-[360deg] sm:mb-4 sm:h-10 sm:w-10 sm:text-xs ${s.badge}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="font-display text-lg transition-transform duration-300 group-hover:translate-x-1 sm:text-xl md:text-2xl">
              {title}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed sm:text-base ${s.text}`}>{text}</p>
          </div>

          {/* NEW: accent bar that draws in on hover */}
          <span
            aria-hidden
            className={`absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${s.accent}`}
          />
        </Tilt>
      </motion.div>
    </Reveal>
  );
}

/* ---------- Section ---------- */
export default function Method() {
  const reduce = useReducedMotion();

  return (
    <Sec id="method" className="relative overflow-hidden bg-white">
      {/* NEW: soft floating background glows */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#92EEFF]/25 blur-3xl md:h-80 md:w-80"
          />
          <motion.div
            aria-hidden
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-sky/20 blur-3xl md:h-72 md:w-72"
          />
        </>
      )}

      <div className="relative">
        {/* Header (original Eyebrow, H2 and Reveal kept) */}
        <div className="grid items-end gap-3 sm:gap-4 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Eyebrow className="text-[14px] text-red">Our method</Eyebrow>
            </div>

            <H2 className="text-navy">Six kinds of fit, checked before we recommend anyone.</H2>

            {/* NEW: animated gradient line under the heading */}
            <motion.span
              aria-hidden
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              animate={reduce ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              style={{ backgroundSize: "200% 100%" }}
              className="mt-3 block h-1 rounded-full bg-gradient-to-r from-navy via-sky to-red sm:mt-4"
            />
          </div>

          <Reveal>
            <p className="text-base text-navy/70 sm:text-lg">
              Every shortlist comes with a written rationale, profile links, indicative rates and clear notes on
              what data is verified, and what isn't.
            </p>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-12">
          {METHOD.map(([t, d], i) => (
            <Card key={t} i={i} title={t} text={d} />
          ))}
        </div>
      </div>
    </Sec>
  );
}