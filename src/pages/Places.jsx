import { Link } from "react-router";
import { motion } from "framer-motion";
import { PLACES } from "../data";
import { Reveal, Sec, ease } from "../ui";

export default function Places() {
  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pt-[10%] pb-20 md:px-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-5xl font-semibold text-navy md:text-6xl lg:text-7xl"
        >
          Places
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 max-w-2xl text-lg text-navy/70 md:text-xl"
        >
          Local knowledge, global reach. Meet the trusted voices shaping
          conversations across Pakistan, the UK and the United States.
        </motion.p>

        {/* Country Sections */}
        <div className="mt-24 space-y-28">
          {PLACES.map((place, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={place.country}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                {/* Country Image */}
                <Reveal
                  delay={0.1}
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                    whileHover={{ scale: 1.03 }}
                    className="aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-3xl bg-navy/10"
                  >
                    <motion.img
                      src={place.image}
                      alt={place.country}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </Reveal>

                {/* Country + City Pills */}
                <Reveal
                  delay={0.2}
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                  >
                    <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl lg:text-6xl">
                      {place.country}
                    </h2>

                    {/* Pills — wrap on mobile, single line on desktop */}
                    <div className="mt-8 flex flex-wrap gap-3 lg:flex-nowrap">
                      {place.cities.map((city, i) => (
                        <motion.div
                          key={city}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link
                            to={`/city?city=${encodeURIComponent(city)}`}
                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-red bg-transparent px-6 py-3 text-sm font-semibold text-red transition-colors hover:bg-red hover:text-cream"
                          >
                            {city}
                            <span className="text-xs">→</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </Sec>
  );
}