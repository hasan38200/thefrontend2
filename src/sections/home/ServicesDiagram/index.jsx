import { motion } from "framer-motion";
import { User, Play, Star, Camera, Radio, Video } from "lucide-react";
import { goTo, ease } from "../../../ui";

// Pill styles taken from the screenshot
const STYLE = {
  navy: "bg-navy text-white border border-navy",
  cyan: "bg-[#7DD3FC] text-navy border border-[#7DD3FC]",
  outline: "bg-white text-navy border border-navy",
  red: "bg-red text-white border border-red",
  outlineRed: "bg-white text-red border border-red",
};

// Rows exactly as in the screenshot
const ROWS = [
  [["UGC creators", "navy"], ["Influencers", "cyan"], ["Models", "outline"]],
  [["Actors & presenters", "red"]],
  [["Photographers & videographers", "navy"]],
  [["Hosts & anchors", "cyan"], ["Voice-over artists", "outlineRed"]],
  [["Celebrities & brand ambassadors", "cyan"]],
];

const CREATIONS = [
  { icon: Play, label: "Reels & short video" },
  { icon: User, label: "UGC for ads" },
  { icon: Star, label: "Product reviews" },
  { icon: Camera, label: "Photoshoots" },
  { icon: Radio, label: "Live sessions" },
  { icon: Video, label: "Brand films & TVCs" },
];

export default function ServicesDiagram() {
  let n = 0;
  return (
    <div className="mt-8 grid items-center gap-10 md:mt-10 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-8">

      {/* LEFT: pills in the same rows as the design */}
      <div className="flex flex-col items-center gap-2 lg:items-start">
        {ROWS.map((row, r) => (
          <div key={r} className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {row.map(([label, style]) => {
              const i = n++;
              return (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: i * 0.08 }}
                >
                  <motion.button
                    type="button"
                    onClick={() => goTo("talent")}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-lg px-3 py-1.5 text-[11px] font-semibold sm:px-4 sm:py-2 sm:text-xs ${STYLE[style]}`}
                  >
                    {label}
                  </motion.button>
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>

      {/* CENTER: logo with the original pulse animation */}
      <div className="relative mx-auto flex h-[240px] w-[240px] shrink-0 items-center justify-center">

     
        {/* 3 pulsing rings */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute h-[180px] w-[180px] rounded-full border border-[#7DD3FC]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.4],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Logo */}
        <motion.img
          src="/logo-navy.png"
          alt="The Right Talent"
          className="relative w-28 object-contain sm:w-32"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          animate={{ y: [0, -10, 0] }}
          whileHover={{ scale: 1.12, rotate: 4 }}
        />
      </div>

      {/* RIGHT: label + 3x2 icon grid */}
      <div className="flex flex-col items-center">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-navy/60 sm:mb-6">
          What they create for you
        </p>

        <div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8">
          {CREATIONS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease }}
              whileHover={{ scale: 1.06 }}
              className="flex w-[84px] flex-col items-center gap-2.5 text-center sm:w-[96px]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-[#7DD3FC] bg-white text-navy transition-colors duration-300 hover:bg-[#7DD3FC]/15 sm:h-16 sm:w-16">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </span>
              <span className="text-[10px] font-semibold leading-tight text-navy sm:text-[11px]">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}