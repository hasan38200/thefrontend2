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

/* ---------- Exact Card Grid & Styling from your UI ---------- */
const SPECS = [
  // 0 — Image Placeholder
  { 
    span: "lg:col-span-3 lg:row-span-2", 
    cls: "bg-[#E5E9EC] border border-transparent p-0", 
    isImage: true 
  },
  // 1 — Geographic fit (Navy)
  { 
    span: "lg:col-span-3", 
    cls: "bg-[#10334A] border border-[#10334A] shadow-sm", 
    textCls: "text-white", 
    pCls: "text-white/80",
    badge: "bg-white text-[#10334A]" 
  },
  // 2 — Niche fit (Navy)
  { 
    span: "lg:col-span-3", 
    cls: "bg-[#10334A] border border-[#10334A] shadow-sm", 
    textCls: "text-white", 
    pCls: "text-white/80",
    badge: "bg-white text-[#10334A]" 
  },
  // 3 — Audience fit (White / Tall)
  { 
    span: "lg:col-span-3 lg:row-span-2", 
    cls: "bg-white border border-navy/10 shadow-sm", 
    textCls: "text-navy", 
    pCls: "text-navy/70",
    badge: "bg-[#10334A] text-white" 
  },
  // 4 — Brand fit (White)
  { 
    span: "lg:col-span-3", 
    cls: "bg-white border border-navy/10 shadow-sm", 
    textCls: "text-navy", 
    pCls: "text-navy/70",
    badge: "bg-white border border-navy/20 text-[#10334A]" 
  },
  // 5 — Campaign fit (White)
  { 
    span: "lg:col-span-3", 
    cls: "bg-white border border-navy/10 shadow-sm", 
    textCls: "text-navy", 
    pCls: "text-navy/70",
    badge: "bg-white border border-navy/20 text-[#10334A]" 
  },
  // 6 — Creative direction (Navy)
  { 
    span: "lg:col-span-3", 
    cls: "bg-[#10334A] border border-[#10334A] shadow-sm", 
    textCls: "text-white", 
    pCls: "text-white/80",
    badge: "bg-white text-[#10334A]" 
  },
];

/* ---------- Parallax Image ---------- */
function ParallaxImage() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-20, 20]);

  return (
    <div ref={ref} className="relative h-full w-full min-h-[300px] overflow-hidden rounded-[1.25rem]">
      <motion.div style={{ y, scale: 1.05 }} className="h-full w-full">
        <Img src={u(IMG.method, 900)} className="h-full w-full object-cover" />
      </motion.div>
      
      {/* Subtle dark overlay for depth, fades out on hover */}
      <div className="absolute inset-0 bg-navy/10 transition-opacity duration-500 group-hover:opacity-0" />
    </div>
  );
}

/* ---------- Single Card ---------- */
function Card({ i, title, text }) {
  const s = SPECS[i % SPECS.length];
  const reduce = useReducedMotion();

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(255,255,255,0.1), transparent 70%)`;
  
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <Reveal delay={(i % 3) * 0.08} className={`${s.span} h-full`}>
      <motion.div
        onMouseMove={onMove}
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="h-full"
      >
        <Tilt
          className={`group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] transition-shadow duration-500 hover:shadow-lg ${s.cls}`}
        >
          {/* Spotlight (only on dark cards) */}
          {!s.isImage && s.textCls === "text-white" && (
            <motion.div
              aria-hidden
              style={{ background: spotlight }}
              className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}

          {s.isImage ? (
            <div className="h-full w-full">
              <ParallaxImage />
            </div>
          ) : (
            <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
              
              <div>
                {/* Number Badge */}
                <span
                  className={`mb-5 inline-flex h-[28px] w-[28px] items-center justify-center rounded-full text-[11px] font-bold ${s.badge}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className={`font-display text-[19px] font-medium leading-[1.3] tracking-tight sm:text-[20px] ${s.textCls}`}>
                  {title}
                </h3>
                
                {/* Paragraph */}
                <p className={`mt-3 text-[13px] leading-[1.65] sm:text-[13.5px] ${s.pCls}`}>
                  {text}
                </p>
              </div>

            </div>
          )}

          {/* Animated bottom accent bar */}
          {!s.isImage && (
            <span
              aria-hidden
              className={`absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${s.textCls === "text-white" ? "bg-white" : "bg-navy"}`}
            />
          )}
        </Tilt>
      </motion.div>
    </Reveal>
  );
}

/* ---------- Section ---------- */
export default function Method() {
  const reduce = useReducedMotion();

  return (
    <Sec id="method" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="relative">
        
        {/* Header */}
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow className="text-[11px] font-bold uppercase tracking-[0.15em] text-red">
              Our method
            </Eyebrow>

            <H2 className="mt-4 text-navy text-[2.1rem] sm:text-[2.75rem] leading-[1.1] tracking-tight max-w-md">
              Six kinds of fit, checked before we recommend anyone.
            </H2>
          </div>

          <Reveal>
            <p className="text-[14px] leading-[1.7] text-navy/70 sm:text-[15px] md:max-w-[340px] md:ml-auto md:pb-1">
              Every shortlist comes with a written rationale, profile links, indicative rates and clear notes on
              what data is verified, and what isn't.
            </p>
          </Reveal>
        </div>

        {/* 12-Column Grid exactly matching the UI layout */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(210px,auto)]">
          {METHOD.map(([t, d], i) => (
            <Card key={t} i={i} title={t} text={d} />
          ))}
        </div>
      </div>
    </Sec>
  );
}