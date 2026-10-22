import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Eyebrow, H2, Sec, Img } from "../../../ui";
import { CLIENTS, u, IMG } from "../../../data";

export default function WhoWeWork() {
  const reduce = useReducedMotion();

  return (
    <Sec bg="bg-navy" className="relative overflow-hidden">
      
      {/* Background glowing orbs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-[#92EEFF]/15 blur-[100px]"
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-purple-600/15 blur-[100px]"
          />
        </>
      )}

      <div className="relative z-10">
        <div className="text-center">
          <Eyebrow className="text-[14px] !text-[#92EEFF]">Who we work with</Eyebrow>
          <H2 className="mx-auto !text-white">Brands and agencies, in Pakistan and beyond.</H2>
          
  
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.08}>
              <motion.div 
                whileHover={reduce ? {} : { y: -8, scale: 1.02 }} 
                // INCREASED DURATION: The card now floats up smoothly over 0.7s
                className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-700 ease-out hover:border-[#92EEFF]/40 hover:shadow-[0_20px_40px_-10px_rgba(146,238,255,0.25)]"
              >
                {/* Background Image */}
                <Img 
                  src={u(IMG.clients[i], 800)} 
                  alt={t} 
                  // INCREASED DURATION: Image scales up smoothly
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/20 transition-colors duration-700 ease-out group-hover:from-[#0a1120] group-hover:via-navy/90" />
                
                {/* Glowing Inner Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-700 ease-out group-hover:border-white/20 group-hover:shadow-[inset_0_0_20px_rgba(146,238,255,0.2)]" />

                {/* Text Content */}
                {/* INCREASED DURATION: Text floats up over 0.7s */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                  <h3 className="font-display text-xl text-white transition-colors duration-300 group-hover:text-[#92EEFF]">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {d}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Sec>
  );
}