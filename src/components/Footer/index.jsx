import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { goTo } from "../../ui";

export default function Footer() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const go = (id) => (pathname === "/" ? goTo(id) : nav("/#" + id));

  return (
    <footer className="bg-cream px-5 py-12 border-t-black border-t-2 md:px-10  ">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <motion.img src="/logo-transparent.png" alt="The Right Talent Agency" className="w-80 h-50" whileHover={{ scale: 1.04, rotate: -1 }} />
            <p className="mt-4 max-w-sm font-display text-2xl">A research-led talent agency connecting brands with creators, influencers, models and actors.</p>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4 text-sm font-semibold text-sky">Agency</p>
            <ul className="space-y-2 text-sm">
              {[["Our method", "method"], ["Services", "services"], ["How we work", "how"], ["Talent", "talent"]].map(([l, id]) => (
                <li key={id}><button onClick={() => go(id)} className="hover:text-sky">{l}</button></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4 text-sm font-semibold text-sky">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>[YOUR EMAIL]</li>
              <li>[YOUR PHONE / WHATSAPP]</li>
              <li>[CITY], Pakistan</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4 text-sm font-semibold text-sky">Follow</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky">Instagram</a></li>
              <li><a href="#" className="hover:text-sky">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-cream/20 pt-6 text-xs text-cream/80">
          <p>© 2026 The Right Talent. All rights reserved.</p>
          <p className="mt-1">Sponsored content is disclosed in line with platform and market rules.</p>
        </div>
      </div>
    </footer>
  );
}
