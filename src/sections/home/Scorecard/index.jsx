import { motion } from "framer-motion";
import { useRef } from "react";
import { Reveal, Words, Btn, Count, Eyebrow, H2, Rule, Sec, Tilt, ScrubText, Img, goTo, ease } from "../../../ui";
import { CATS, METHOD, SCORE, STEPS, DIFF, TALENT, CLIENTS, u, IMG } from "../../../data";

export default function Scorecard() {
  return (
    <Sec bg="bg-navy">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Left column ---------- */}
        <div>
          <Eyebrow dark className="text-[14px] !text-[#92EEFF]">
            The scorecard
          </Eyebrow>

          <H2 className="!text-white">Every creator, scored the same way.</H2>

          <Reveal>
            <p className="mt-5 max-w-md text-lg text-white">
              A consistent, weighted model means our recommendations are explainable. Not gut feel, and never
              follower count on its own.
            </p>

            <div className="mt-8 rounded-3xl rounded-tr-[4rem] bg-white p-7 text-navy">
              <p className="font-semibold text-[#92EEFF]">Our honesty rule</p>
              <p className="mt-2 leading-relaxed">
                Creator location is not proof of audience location. Where geography matters, we ask for platform
                insights, and mark anything we can't verify as unverified.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------- Right column: score bars ---------- */}
        <div className="space-y-5">
          {SCORE.map(([c, w], i) => (
            <Reveal key={c} delay={i * 0.05}>
              {/* text-white added so labels + counts are visible on navy */}
              <div className="flex justify-between gap-4 text-white">
                <span>{c}</span>
                <span className="font-semibold">
                  <Count to={w} />
                </span>
              </div>

              {/* track: subtle white-glass instead of sky/25 for better contrast on navy */}
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                {/* fill: bright cyan to match #92EEFF accent used elsewhere */}
                <motion.div
                  className="h-full rounded-full bg-[#92EEFF]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(w / 25) * 100}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Sec>
  );
}