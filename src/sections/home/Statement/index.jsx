import { motion, useScroll, useTransform } from "framer-motion";
import { Words } from "../../../ui";

export default function Statement() {
  const { scrollYProgress: p } = useScroll();
  const a = useTransform(p, [0, 1], [0, -260]);
  const b = useTransform(p, [0, 1], [0, 200]);
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-14 text-center text-cream md:py-24">
      <motion.div style={{ y: a }} className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-red md:h-40 md:w-40" />
      <motion.div style={{ y: b }} className="absolute -right-10 bottom-10 h-28 w-28 rounded-tl-[4rem] bg-sky md:h-44 md:w-44" />
      <h2 className="relative mx-auto max-w-5xl font-display text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
        <Words text="Research-led creative talent agency" />
      </h2>
    </section>
  );
}
