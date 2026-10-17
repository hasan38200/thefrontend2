import { motion } from "framer-motion";
import { Link } from "react-router";
import { Reveal } from "../../../ui";
import { PKGS } from "../../../data";

const ST = [
  { box: "bg-navy text-cream rounded-tr-[5rem]", eye: "text-sky", btn: "bg-cream text-navy hover:bg-red hover:text-cream" },
  { box: "bg-red text-cream", eye: "text-cream", btn: "bg-cream text-navy hover:bg-navy hover:text-cream" },
  { box: "bg-sky text-navy rounded-tl-[5rem]", eye: "text-navy", btn: "bg-navy text-cream hover:bg-red" },
];

export default function PackageCards() {
  return (
    <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
      {PKGS.map((p, i) => (
        <Reveal key={p.n} delay={i * 0.12} className="h-full">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex h-full flex-col p-8 md:p-10 ${ST[i].box}`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${ST[i].eye}`}>{p.tag}</p>
              {p.best && (
                <motion.span
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
                  className="shrink-0 rounded-full bg-cream px-4 py-2 text-center text-sm font-semibold leading-tight text-navy"
                >
                  {p.best}
                </motion.span>
              )}
            </div>

            <h3 className="font-display !text-3xl !font-extrabold md:!text-4xl">{p.n}</h3>
            <p className="mt-4 text-lg leading-relaxed opacity-90">{p.d}</p>

            <ul className="mb-8 mt-6 flex-1 space-y-2.5">
              {p.f.map((f, j) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.25 + j * 0.07, duration: 0.5 }}
                >
                  — {f}
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/brief"
                className={`block w-full rounded-full py-5 text-center text-lg font-semibold transition-colors ${ST[i].btn}`}
              >
                {p.cta}
              </Link>
            </motion.div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}