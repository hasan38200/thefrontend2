import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const AGENCY = [
  ["About us", "/about-us"],
  ["Expertise", "/what-we-do"],
  ["Careers", "/careers"],
  ["Blogs", "/blog"],
  ["Reports", "/reports"],
];

const linkClass = "transition-colors hover:text-red";
const headClass = "mb-4 text-[11px] font-bold uppercase tracking-widest text-navy/50 sm:text-xs";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white px-4 py-12 text-navy sm:px-8 md:px-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Logo & tagline: far left */}
          <div className="max-w-xs">
            <Link to="/" className="inline-block">
              <motion.img
                src="/logo.png"
                alt="The Right Talent"
                className="h-auto w-28 sm:w-32 md:w-36"
                whileHover={{ scale: 1.04, rotate: -1 }}
              />
            </Link>
            <p className="mt-5 text-xs leading-relaxed text-navy/70 sm:text-sm">
              A research-led talent and media agency: talent &amp; PR, social media, paid media and shoots, in Pakistan and beyond.
            </p>
          </div>

          {/* Link columns: far right, spread out */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16">
            
            {/* Agency */}
            <div className="min-w-0">
              <p className={headClass}>Agency</p>
              <ul className="space-y-3 text-[13px] font-medium text-navy sm:text-sm">
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
              <ul className="space-y-3 text-[13px] font-medium text-navy sm:text-sm">
                <li>
                  <a href="mailto:teamrightalent@gmail.com" className={linkClass}>
                    teamrightalent@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923067928220" className={linkClass}>
                    0306 792 8220
                  </a>
                </li>
                <li className="text-navy/70">Hyderabad, Pakistan</li>
              </ul>
            </div>

            {/* Follow */}
            <div className="min-w-0">
              <p className={headClass}>Follow</p>
              <div className="mt-1 flex  gap-2">
                <motion.a 
                  href="https://www.instagram.com/therightalent/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors hover:bg-red hover:text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/therightalent/posts/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors hover:bg-red hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/therightalent/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors hover:bg-red hover:text-white"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-navy/10 pt-6 text-[11px] text-navy/50 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© {new Date().getFullYear()} The Right Talent. All rights reserved.</p>
          <p className="sm:text-right">
            Sponsored content is disclosed in line with platform and market rules.
          </p>
        </div>
      </div>
    </footer>
  );
}