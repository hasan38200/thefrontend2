import { Link } from "react-router";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../data";
import { Reveal, Sec } from "../ui";

export default function Industries() {
  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pt-[10%] pb-20 md:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between">
          <h1 className="font-display text-5xl font-semibold text-navy md:text-6xl lg:text-7xl">
            Industries
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-red">
            {INDUSTRIES.length} Industries
          </p>
        </div>

        {/* Grid of Industries with images */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to={`/influencers?industry=${encodeURIComponent(industry.name)}`}
                  className="group block"
                >
                  {/* Card image — scales on hover */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-navy/5"
                  >
                    <motion.img
                      src={industry.image}
                      alt={industry.name}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy transition-colors group-hover:text-red md:text-2xl">
                    {industry.name}
                  </h3>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Sec>
  );
}