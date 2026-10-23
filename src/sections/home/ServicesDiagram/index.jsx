import { motion } from "framer-motion";
import { Target, UserRoundGroup, Globe, Users } from "lucide-react";
import { Img, goTo, ease } from "../../../ui";
import { CATS, HERO_LABELS, u, IMG } from "../../../data";

const CH = [
  "bg-navy text-white border border-[#92EEFF]/40",
  "bg-[#92EEFF] text-white border border-[#92EEFF]",
  "bg-transparent text-navy border border-navy",
  "bg-red text-white border border-red/40",
];

const ICONS = [Target, UserRoundGroup, Globe, Users];

export default function ServicesDiagram() {
  return (
    <div className="mt-5 grid items-center gap-5 sm:mt-6 sm:gap-6 md:grid-cols-[1.2fr_auto_1fr]">
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:justify-start">
        {CATS.map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: i * 0.08 }}
          >
            <motion.button
              type="button"
              onClick={() => goTo("talent")}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm ${CH[i % 4]}`}
            >
              {c}
            </motion.button>
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto grid h-40 w-40 place-items-center sm:h-48 sm:w-48 md:h-56 md:w-56">
        {/* Rings */}
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute h-28 w-28 rounded-full border-2 border-sky sm:h-36 sm:w-36 md:h-44 md:w-44"
            animate={{ scale: [0.8, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
          />
        ))}

        {/* Logo: no background circle; mix-blend-multiply hides any white box in the PNG */}
        <motion.img
          src="/logo-navy.png"
          alt="The Right Talent"
          className="relative w-24 object-contain mix-blend-multiply sm:w-28 md:w-36"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          animate={{ y: [0, -10, 0] }}
          whileHover={{ scale: 1.12, rotate: 4 }}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {HERO_LABELS.map(([n, l], i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease }}
              whileHover={{ scale: 1.06 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-[#92EEFF] bg-transparent text-navy sm:h-20 sm:w-20 md:h-24 md:w-24">
                <Icon className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11" strokeWidth={1.6} />
              </span>
              <span className="rounded-full border border-[#92EEFF] bg-transparent px-2.5 py-1 text-[11px] font-semibold sm:px-3 sm:text-xs">
                <span className="mr-1 text-sky">{n}</span>
                {l}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}