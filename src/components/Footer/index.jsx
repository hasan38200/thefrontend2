import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { goTo } from "../../ui";

export default function Footer() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const go = (id) => (pathname === "/" ? goTo(id) : nav("/#" + id));

  return (
    <footer className="border-t-2 bg-navy px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-8">

          {/* Logo & Tagline */}
          <div className="col-span-3 md:col-span-12 lg:col-span-5">
            <motion.img
              src="/logo-transparent.png"
              alt="The Right Talent Agency"
              className="h-auto w-32 sm:w-40 md:w-48 lg:w-56"
              whileHover={{ scale: 1.04, rotate: -1 }}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white md:text-base">
              A research-led talent agency connecting brands with creators, influencers, models and actors.
            </p>
          </div>

          {/* Agency Links */}
          <div className="min-w-0 md:col-span-4 lg:col-span-2">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#92EEFF] sm:text-xs md:mb-4">Agency</p>
            <ul className="space-y-2 text-xs text-white sm:text-sm">
              {[["Our method", "method"], ["Services", "services"], ["How we work", "how"], ["Talent", "talent"]].map(([l, id]) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="text-left transition-colors hover:text-red">{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="min-w-0 md:col-span-4 lg:col-span-3">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#92EEFF] sm:text-xs md:mb-4">Contact</p>
            <ul className="space-y-2 text-xs text-white sm:text-sm">
              <li className="break-words">hello@therighttalent.com</li>
              <li>+92 300 1234567</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>

          {/* Follow Links */}
          <div className="min-w-0 md:col-span-4 lg:col-span-2">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#92EEFF] sm:text-xs md:mb-4">Follow</p>
            <ul className="space-y-2 text-xs text-white sm:text-sm">
              <li><a href="#" className="transition-colors hover:text-red">Instagram</a></li>
              <li><a href="#" className="transition-colors hover:text-red">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}