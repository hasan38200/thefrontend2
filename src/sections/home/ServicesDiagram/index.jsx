import { motion } from "framer-motion";
import { Img, goTo, ease } from "../../../ui";
import { CATS, HERO_LABELS, u, IMG } from "../../../data";

const CH = ["bg-navy text-cream", "bg-sky text-navy", "border border-navy", "bg-red text-cream"];

export default function ServicesDiagram() {
  return (
    <div className="mt-6 grid items-center gap-6 md:grid-cols-[1.2fr_auto_1fr]">
      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
        {CATS.map((c, i) => (
          <motion.span key={c} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }} transition={{ type: "spring", stiffness: 200, damping: 14, delay: i * 0.08 }}>
            <motion.button type="button" onClick={() => goTo("talent")}
              animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className={`rounded-xl px-4 py-2 text-sm font-semibold ${CH[i % 4]}`}>
              {c}
            </motion.button>
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto grid h-48 w-48 place-items-center md:h-56 md:w-56">
        {[0, 1].map((i) => (
          <motion.span key={i} aria-hidden className="absolute h-36 w-36 rounded-full border-2 border-sky md:h-44 md:w-44"
            animate={{ scale: [0.8, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }} />
        ))}
        <motion.img src="/logo-mark.png" alt="The Right Talent" className="relative w-28 md:w-36"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false }} transition={{ type: "spring", stiffness: 120, damping: 12 }}
          animate={{ y: [0, -10, 0] }} whileHover={{ scale: 1.12, rotate: 4 }} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {HERO_LABELS.map(([n, l], i) => (
          <motion.div key={n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease }}
            whileHover={{ scale: 1.06 }} className="flex flex-col items-center gap-2 text-center">
            <Img src={u(IMG.hero[(i * 3 + 1) % 12], 300)} parallax={false} className="h-20 w-20 rounded-full md:h-24 md:w-24" />
            <span className="rounded-full bg-sky px-3 py-1 text-xs font-semibold">
              <span className="mr-1 text-red">{n}</span>{l}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
