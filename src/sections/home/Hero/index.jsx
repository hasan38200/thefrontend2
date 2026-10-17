import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Btn, goTo, ease } from "../../../ui";
import { HERO_LABELS } from "../../../data";
import HeroSlider from "../HeroSlider";

const LINES = [
  { lead: "The right ", word: "talent." },
  { lead: "The right ", word: "message." },
  { lead: "The right ", word: "audience." },
];

const RED = "#BE1D23";
const NORMAL = "inherit"; // keeps the natural heading color when not active

export default function Hero({ ready }) {
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
      }, 500); // ← faster: 1.2 seconds per word
      return () => clearInterval(interval);
    }, REVEAL_END * 1000);
    return () => clearTimeout(startDelay);
  }, [ready]);

  return (
    <section className="overflow-hidden bg-cream px-5 pb-8 pt-24 md:px-10 md:pt-28 lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.p {...fade(0.1)} className="mb-4 text-base font-semibold text-red md:text-lg">
            Research-led creative talent agency
          </motion.p>

          <h1
            aria-label="The right talent. The right message. The right audience."
            className="font-display !text-3xl leading-[0.95] sm:!text-4xl xl:!text-5xl"
          >
            {LINES.map((line, i) => {
              const lineDelay = LINE_DELAY + i * LINE_STEP;
              const isActive = ready && active === i;

              return (
                <span
                  key={line.word}
                  aria-hidden
                  className="block overflow-hidden pb-[0.1em] -mb-[0.1em]"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={ready ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: REVEAL_DURATION, delay: lineDelay, ease }}
                  >
                    {line.lead}
                    {/* Last word: only red highlight when active, natural color otherwise */}
                    <motion.span
                      className="inline"
                      animate={{ color: isActive ? RED : NORMAL }}
                      transition={{ duration: 0.5, ease: "easeInOut" }} // ← faster fade
                    >
                      {line.word}
                    </motion.span>
                  </motion.span>
                </span>
              );
            })}
          </h1>

          <motion.p {...fade(2.4)} className="mt-5 max-w-xl text-lg leading-relaxed">
            We research, recommend and direct the creators, influencers, models and actors best suited to your niche, your audience and your market, from Karachi and Lahore to New York and Canada.
          </motion.p>

          <motion.div {...fade(2.6)} className="mt-6 flex flex-wrap gap-3">
            <Btn to="/brief">Find your right talent</Btn>
            <Btn v="ghost" onClick={() => goTo("services")}>See packages</Btn>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-2">
            {HERO_LABELS.map(([n, l], i) => (
              <motion.span
                key={n}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ready ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.8 + i * 0.1, type: "spring", stiffness: 160, damping: 14 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-navy/30 px-4 py-2 text-sm"
              >
                <span className="mr-2 font-semibold text-red">{n}</span>
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
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  );
}