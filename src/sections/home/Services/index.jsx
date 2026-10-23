import { motion } from "framer-motion";
import { H2, Sec, ease } from "../../../ui";
import ServicesDiagram from "../ServicesDiagram";
import PackageCards from "../PackageCards";
import MonthlyPlans from "../MonthlyPlans";

function AnimatedLine() {
  return (
    <motion.div
      className="relative mt-6 h-[3px] w-full origin-center overflow-hidden rounded-full bg-cream sm:mt-8"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 1.2, ease }}
    >
      <motion.span
        className="absolute inset-y-0 left-0 w-1/4 rounded-full bg-[#92EEFF]"
        animate={{ x: ["-100%", "400%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <Sec id="services">
      <H2 className="mx-auto text-center text-red">Start with research. Scale to a full campaign.</H2>
      <ServicesDiagram />

      <AnimatedLine />

      <PackageCards />

      <MonthlyPlans />
    </Sec>
  );
}