import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { goTo } from "../../ui";

export default function Footer() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const go = (id) => (pathname === "/" ? goTo(id) : nav("/#" + id));

  return (
    <footer className="border-t-2 border-red bg-cream px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-[10%] md:grid-cols-12 ">
          
          {/* Logo & Tagline - Reduced sizes */}
          <div className="md:col-span-6 lg:col-span-5">
            <motion.img 
              src="/logo-transparent.png" 
              alt="The Right Talent Agency" 
              className="w-32 h-auto sm:w-40 md:w-48 lg:w-56" // Much smaller logo
              whileHover={{ scale: 1.04, rotate: -1 }} 
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy md:text-base">
              A research-led talent agency connecting brands with creators, influencers, models and actors.
            </p>
          </div>

          {/* Agency Links */}
          <div className="md:col-span-2 ">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-red">Agency</p>
            <ul className="space-y-2 text-sm text-navy">
              {[["Our method", "method"], ["Services", "services"], ["How we work", "how"], ["Talent", "talent"]].map(([l, id]) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="transition-colors hover:text-red">{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-red">Contact</p>
            <ul className="space-y-2 text-sm text-navy/80">
              <li>hello@therighttalent.com</li>
              <li>+92 300 1234567</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>

          {/* Follow Links */}
          <div className="md:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-red">Follow</p>
            <ul className="space-y-2 text-sm text-navy">
              <li><a href="#" className="transition-colors hover:text-red">Instagram</a></li>
              <li><a href="#" className="transition-colors hover:text-red">LinkedIn</a></li>
            </ul>
          </div>
        </div>

      
      </div>
    </footer>
  );
}