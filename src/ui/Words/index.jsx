import { motion } from "framer-motion";
import { ease } from "../utils";

export default function Words({ text, className = "", go, delay = 0, red = false }) {
  const t =
    go === undefined
      ? { whileInView: "show", viewport: { once: false, amount: 0.2 } }
      : { animate: go ? "show" : "hide" };

  return (
    <motion.span className={`block ${className}`} aria-label={text} initial="hide" {...t}>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="mr-[.26em] inline-block overflow-hidden pb-[0.3em] -mb-[0.25em] align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hide: { y: "115%", rotate: 4, color: red ? "#0F344E" : "inherit" },
              show: { y: 0, rotate: 0, color: red ? "#BE1D23" : "inherit" },
            }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}