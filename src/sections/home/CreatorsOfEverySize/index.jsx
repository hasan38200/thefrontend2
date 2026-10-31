import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { ease } from "../../../ui";
import { btnMotion } from "../../../btnMotion";

const TIERS = [
  {
    name: "Nano",
    followers: "1k-10k followers",
    desc: "Close, trusting communities. Many voices on a small budget.",
    color: "bg-[#7DD3FC]", 
    size: "h-3.5 w-3.5", 
  },
  {
    name: "Micro",
    followers: "10k-50k followers",
    desc: "Niche audiences that listen. Great for honest reviews.",
    color: "bg-[#B91C1C]", 
    size: "h-5 w-5", 
  },
  {
    name: "Mid-tier",
    followers: "50k-500k followers",
    desc: "Real reach that still feels personal.",
    color: "bg-[#0F2C3D]", 
    size: "h-7 w-7", 
  },
  {
    name: "Macro",
    followers: "500k-1M followers",
    desc: "Big reach for launches and sales.",
    color: "bg-[#67E8F9]", 
    size: "h-10 w-10", 
  },
  {
    name: "Mega",
    followers: "1M+ followers",
    desc: "Household names for maximum visibility.",
    color: "bg-[#B91C1C]", 
    size: "h-12 w-12", 
  },
];

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: custom * 0.1 }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

export default function CreatorsOfEverySize() {
  const reduce = useReducedMotion();

  return (
    <section id="creators-size" className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        
        {/* TOP SECTION: Heading & Copy */}
        <div className="grid items-end gap-6 md:grid-cols-[1fr_1fr] md:gap-12 mb-12">
          <div>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUpVariant}
              custom={0}
              className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]"
            >
              Creators of every size
            </motion.p>

            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUpVariant}
              custom={1}
              className="mt-3 text-[#0F2C3D] font-display text-[2.5rem] sm:text-[3.2rem] leading-[1.05] tracking-tight"
            >
              Bigger isn't always <span className="font-serif italic text-[#C82333] font-normal">better</span>.
            </motion.h2>
          </div>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUpVariant}
            custom={2}
            className="text-[14px] leading-[1.6] text-[#0F2C3D]/70 sm:text-[15px] md:max-w-[380px] md:ml-auto md:pb-2"
          >
            We research your product, goal and budget, then recommend the size, or the mix of sizes, that will actually work for your brand.
          </motion.p>
        </div>

        {/* MIDDLE SECTION: The 5 Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10"
        >
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={cardVariant}
              whileHover={reduce ? {} : { y: -6, boxShadow: "0 10px 25px -5px rgba(15, 44, 61, 0.08)" }}
              className={`flex flex-col rounded-[1.25rem] bg-[#F4F5F7] p-6 shadow-sm transition-all duration-300 border border-transparent hover:border-[#0F2C3D]/5 ${
                i === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Circle Container */}
              <div className="mb-6 flex h-12 items-center">
                <motion.span 
                  animate={reduce ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className={`block rounded-full ${tier.color} ${tier.size}`} 
                />
              </div>
              
              <h3 className="text-[18px] font-bold text-[#0F2C3D] tracking-tight">{tier.name}</h3>
              
              <p className="mt-1 text-[12px] font-semibold text-[#0F2C3D]/90">
                {tier.followers}
              </p>
              
              <p className="mt-3 text-[12px] leading-[1.5] text-[#0F2C3D]/60">
                {tier.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM SECTION: Links & Button */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUpVariant}
          custom={4}
          className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[13px] text-[#0F2C3D]/80">
              Want many trusted voices posting at once? <a href="#research" className="font-bold text-[#0F2C3D] underline decoration-[#0F2C3D]/30 underline-offset-4 transition-colors hover:text-[#C82333] hover:decoration-[#C82333]">Plan a research-led nano & micro campaign →</a>
            </p>
            <p className="mt-2 text-[13px] text-[#0F2C3D]/60">
              Not sure which size fits? <a href="#research" className="font-bold text-[#0F2C3D] underline decoration-[#0F2C3D]/30 underline-offset-4 transition-colors hover:text-[#C82333] hover:decoration-[#C82333]">Let our research decide →</a>
            </p>
          </div>

          {/* CTA Button Aligned Right */}
          <motion.div {...btnMotion} className="inline-block shrink-0">
            <Link
              to="/brief"
              className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#0F2C3D] bg-transparent px-6 py-3 text-sm font-semibold text-[#0F2C3D] transition-colors duration-300 hover:bg-[#0F2C3D] hover:text-white"
            >
              {/* Shimmer sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[450%]"
              />
              <span className="relative">Discuss a monthly partnership</span>
              <span className="relative transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}