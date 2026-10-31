import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { Reveal, Eyebrow, H2, Sec, Img } from "../../../ui";
import { CLIENTS, u, IMG } from "../../../data";

export default function WhoWeWork() {
  const reduce = useReducedMotion();

  return (
    <Sec bg="bg-navy" className="relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center">
          <Eyebrow className="text-[12px] !text-[#92EEFF] sm:text-[13px]">Who we work with</Eyebrow>
          <H2 className="mx-auto !text-white">Brands and agencies, in Pakistan and beyond.</H2>
        </div>

        {/* 3 cards, as in the design */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CLIENTS.slice(0, 3).map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={reduce ? {} : { y: -8 }}
                className="group relative h-56 w-full overflow-hidden rounded-2xl border border-white/15 bg-[#2a5a7e] shadow-lg transition-all duration-700 ease-out hover:border-[#92EEFF]/40 hover:shadow-[0_20px_40px_-10px_rgba(146,238,255,0.25)] sm:h-60 lg:h-64"
              >
                {/* Photo */}
                <Img
                  src={u(IMG.clients[i], 800)}
                  alt={t}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Blue tint: lighter at the top, deep navy at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3d6d92]/70 via-[#24506f]/80 to-[#12324f]" />

                {/* Text, bottom-left */}
                <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 sm:p-6">
                  <h3 className="font-display text-xl text-white transition-colors duration-300 group-hover:text-[#92EEFF] sm:text-2xl">
                    {t}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm">
                    {d}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Link under the cards */}
        <Reveal delay={0.2}>
          <div className="mt-8 text-center sm:mt-10">
            <Link
              to="/industries"
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-[#92EEFF] underline underline-offset-4 transition-colors hover:text-white"
            >
              See all industries
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </Sec>
  );
}