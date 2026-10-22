import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Btn, goTo, ease } from "../../../ui";
import { HERO_LABELS } from "../../../data";
import HeroSlider from "../HeroSlider";
import { Link } from "react-router"; // Imported Link for the first button
import { btnMotion } from "../../../btnMotion";
const LINES = [
  { lead: "The right ", word: "talent." },
  { lead: "The right ", word: "message." },
  { lead: "The right ", word: "audience." },
];

const RED = "#92EEFF";
const NORMAL = "inherit";

export default function Hero({ready=true}) {
  const fade = (d) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay: d, ease },
  });

  const LINE_DELAY = 0.3;
  const LINE_STEP = 0.7;
  const REVEAL_DURATION = 0.9;

  const REVEAL_END = LINE_DELAY + (LINES.length - 1) * LINE_STEP + REVEAL_DURATION;

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!ready) return;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setActive((a) => (a + 1) % LINES.length);
      }, 500); 
      return () => clearInterval(interval);
    }, REVEAL_END * 1000);
    return () => clearTimeout(startDelay);
  }, [ready]);

  return (
    <section className="overflow-hidden bg-navy px-5 pb-8 pt-24 md:px-10 md:pt-28 lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto mt-4 grid w-full max-w-7xl items-top gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.p {...fade(0.1)} className="mb-4 text-base font-semibold text-[#92EEFF] md:text-lg">
            Research-led creative talent agency
          </motion.p>

          <h1
            aria-label="The right talent. The right message. The right audience."
            className="font-display text-white !text-3xl leading-[0.95] sm:!text-4xl xl:!text-5xl"
          >
            {LINES.map((line, i) => {
              const lineDelay = LINE_DELAY + i * LINE_STEP;
              const isActive = ready && active === i;

              return (
                <span
                  key={line.word}
                  aria-hidden
                  className="block overflow-hidden pb-[0.1em] -mb-[0.1em] text-white"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={ready ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: REVEAL_DURATION, delay: lineDelay, ease }}
                  >
                    {line.lead}
                    <motion.span
                      className="inline"
                      animate={{ color: isActive ? RED : NORMAL }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {line.word}
                    </motion.span>
                  </motion.span>
                </span>
              );
            })}
          </h1>

          <motion.p {...fade(2.4)} className="mt-5 max-w-xl text-lg leading-relaxed text-white">
            We research, recommend and direct the creators, influencers, models and actors best suited to your niche, your audience and your market, from Karachi and Lahore to New York and Canada.
          </motion.p>

          <motion.div {...fade(2.6)} className="mt-6 flex flex-wrap gap-3">
            
            {/* Button 1: White bg, navy text -> hover: sky blue bg, red text */}
            {/* Button 1 */}
<motion.span {...btnMotion} className="inline-block">
  <Link
    to="/brief"
    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-red transition-colors duration-300 hover:text-navy md:text-base"
  >
    Find your right talent
  </Link>
</motion.span>

{/* Button 2 */}
<motion.a
  {...btnMotion}
  href="#services"
  onClick={(e) => { e.preventDefault(); goTo("services"); }}
  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#92EEFF] hover:text-[#92EEFF] md:text-base"
>
  See packages
</motion.a>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-2">
            {HERO_LABELS.map(([n, l], i) => (
              <motion.span
                key={n}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ready ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.8 + i * 0.1, type: "spring", stiffness: 160, damping: 14 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-white/30 px-4 py-2 text-sm text-white"
              >
                <span className="mr-2 font-semibold text-[#92EEFF]">{n}</span>
                {l}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease }}
        >
          <HeroSlider/>
        </motion.div>
      </div>
    </section>
  );
}