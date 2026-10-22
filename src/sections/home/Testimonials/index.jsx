import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { Reveal, Eyebrow, H2, Sec, Img, Tilt } from "../../../ui"; // Removed u, IMG from here
import { u, IMG } from "../../../data"; // Added them here where they belong

// Dummy realistic data for the testimonials
const TESTIMONIALS = [
  {
    quote: "They didn't just find us creators; they found the exact demographic we were struggling to reach. Our conversion rate doubled in a month.",
    name: "Sarah Jenkins",
    role: "VP of Growth, Lumina",
    logo: ShieldCheck,
  },
  {
    quote: "The vetted roster is a game-changer. No more sifting through hundreds of applications. Every single profile they sent was a strong fit.",
    name: "Marcus Chen",
    role: "Head of Marketing, Nexus",
    logo: Star,
  },
  {
    quote: "Finally, a talent agency that actually understands data and audience geography. The reporting is transparent and incredibly detailed.",
    name: "Elena Rodriguez",
    role: "Founder, Vibe Studios",
    logo: Quote,
  },
  {
    quote: "We scaled our UGC campaign from zero to 50 assets a month without losing quality. The process is seamless.",
    name: "David Kim",
    role: "Brand Director, Aero",
    logo: ShieldCheck,
  },
  {
    quote: "Their honesty rule is real. They flagged a creator's audience location mismatch before we wasted any budget on the campaign.",
    name: "Rachel Foster",
    role: "CMO, Elevate",
    logo: Star,
  },
  {
    quote: "The fastest, most professional experience we've had with a talent partner. They really do prioritize the right fit over follower count.",
    name: "James Wilson",
    role: "Growth Lead, Horizon",
    logo: Quote,
  },
];

function TestimonialCard({ data, i }) {
  const reduce = useReducedMotion();
  
  // Cursor spotlight logic
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${mx}px ${my}px, rgba(146,238,255,0.15), transparent 80%)`;
  
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const LogoIcon = data.logo;

  return (
    <Reveal delay={(i % 3) * 0.1} className="h-full">
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => { mx.set(-300); my.set(-300); }}
        whileHover={reduce ? {} : { y: -6 }}
        className="h-full"
      >
        <Tilt className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-colors duration-500 hover:border-[#92EEFF]/40 hover:bg-white/[0.06]">
          
          {/* Spotlight Overlay */}
          <motion.div
            aria-hidden
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Top Row: User Info & Glowing Logo */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative rounded-full p-[2px] bg-gradient-to-tr from-[#92EEFF] to-purple-500">
                <Img 
                  src={u(IMG.hero[(i * 2) % 12], 200)} 
                  parallax={false} 
                  className="h-11 w-11 rounded-full border-2 border-navy object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{data.name}</p>
                <p className="text-xs text-white/50">{data.role}</p>
              </div>
            </div>
            
            {/* Glowing Brand Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#92EEFF] shadow-[0_0_15px_rgba(146,238,255,0.2)] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(146,238,255,0.4)] group-hover:bg-[#92EEFF]/10">
              <LogoIcon className="h-5 w-5" strokeWidth={2} />
            </div>
          </div>

          {/* Quote Text */}
          <div className="relative z-10 my-6">
            <p className="text-[15px] leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white">
              "{data.quote}"
            </p>
          </div>

          {/* Bottom Accent Line */}
          <span className="absolute bottom-0 left-0 z-10 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#92EEFF] to-purple-400 shadow-[0_-5px_10px_rgba(146,238,255,0.5)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </Tilt>
      </motion.div>
    </Reveal>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <Sec bg="bg-navy" className="relative overflow-hidden">
      {/* Glowing Background Orbs */}
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
          <Eyebrow className="text-[14px] !text-[#92EEFF]">Client Stories</Eyebrow>
          <H2 className="mx-auto !text-white">Trusted by brands that demand the right fit.</H2>
          
         
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((data, i) => (
            <TestimonialCard key={data.name} data={data} i={i} />
          ))}
        </div>
      </div>
    </Sec>
  );
}