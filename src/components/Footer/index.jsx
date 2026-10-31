import { Link } from "react-router";
import { motion } from "framer-motion";

const AGENCY = [
  ["About us", "/about-us"],
  ["What we do", "/what-we-do"],
  ["Portfolio", "/what-we-do#our-work"],
  ["Careers", "/careers"],
  ["Blogs", "/blog"],
  ["Reports", "/reports"],
];

const linkClass = "transition-colors hover:text-red";
const headClass = "mb-3 text-[11px] font-bold text-navy sm:text-xs md:mb-4";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white px-4 py-8 text-navy sm:px-5 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">

          {/* Logo & tagline: far left */}
          <div className="max-w-xs">
            <Link to="/" className="inline-block">
              <motion.img
                src="/logo.png"
                alt="The Right Talent"
                className="h-auto w-24 sm:w-28 md:w-32"
                whileHover={{ scale: 1.04, rotate: -1 }}
              />
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-navy/80 sm:text-sm">
              A research-led talent and media agency: talent &amp; PR, social media, paid media and shoots, in Pakistan and beyond.
            </p>
          </div>

          {/* Link columns: far right, spread out, always on one line */}
          <div className="grid grid-cols-3 ">
            {/* Agency */}
            <div className="min-w-0">
              <p className={headClass}>Agency</p>
              <ul className="space-y-2 text-xs text-navy sm:text-sm">
                {AGENCY.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className={linkClass}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <p className={headClass}>Contact</p>
              <ul className="space-y-2 text-xs text-navy sm:text-sm">
                <li className="break-words">[YOUR EMAIL]</li>
                <li className="break-words">[YOUR PHONE / WHATSAPP]</li>
                <li className="break-words">[CITY], Pakistan</li>
              </ul>
            </div>

            {/* Follow */}
            <div className="min-w-0">
              <p className={headClass}>Follow</p>
              <ul className="space-y-2 text-xs text-navy sm:text-sm">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-navy/10 pt-5 text-[11px] text-navy/70 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© {new Date().getFullYear()} The Right Talent. All rights reserved.</p>
          <p className="sm:text-right">
            Sponsored content is disclosed in line with platform and market rules.
          </p>
        </div>
      </div>
    </footer>
  );
}