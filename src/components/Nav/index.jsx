import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Btn, goTo } from "../../ui";
import { NAV, INDUSTRIES, PLACES } from "../../data";
import MobileMenu from "./MobileMenu";

const WHAT_WE_DO = [
  { label: "PR", to: "/what-we-do#talent-pr" },
  { label: "Social Media", to: "/what-we-do#social-media" },
  { label: "Paid media", to: "/what-we-do#paid-media" },
  { label: "Shoots & production", to: "/what-we-do#shoots-production" },
  { label: "Our Work", to: "/what-we-do#our-work" },
];

const WHO_WE_ARE = [
  { label: "About us", to: "/about-us" },
  { label: "Our Careers", to: "/careers" },
];

const LATEST = [
  { label: "Blog", to: "/blog" },
  { label: "Reports", to: "/reports" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);
  const [latestOpen, setLatestOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const prog = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const go = (id) => {
    setOpen(false);
    pathname === "/" ? goTo(id) : nav("/#" + id);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToWhatWeDo = (hash) => {
    setWhatWeDoOpen(false);
    setOpen(false);
    if (pathname === "/what-we-do") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      nav(`/what-we-do${hash ? "#" + hash : ""}`);
    }
  };

  const otherNavItems = NAV.filter((item) => item.label !== "Expertise");

  const closeAllExcept = (current) => {
    if (current !== "whatWeDo") setWhatWeDoOpen(false);
    if (current !== "whoWeAre") setWhoWeAreOpen(false);
    if (current !== "industries") setIndustriesOpen(false);
    if (current !== "places") setPlacesOpen(false);
    if (current !== "latest") setLatestOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur">
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-red"
          style={{ scaleX: prog }}
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-10">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src="/logo-mark.png"
              alt="The Right Talent Agency"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            
            {/* Right Location (formerly Places) - Moved to first position */}
            <div
              className="relative"
              onMouseEnter={() => { setPlacesOpen(true); closeAllExcept("places"); }}
              onMouseLeave={() => setPlacesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  placesOpen ? "text-navy/40" : "text-navy hover:text-red"
                }`}
              >
                Right location
                <motion.span animate={{ rotate: placesOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="text-[11px]">
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {placesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 mt-3 w-[820px] max-w-[95vw] rounded-3xl border border-navy/10 bg-cream p-8 shadow-2xl"
                  >
                    <div className="mb-6 flex items-baseline justify-between border-b border-navy/15 pb-4">
                      <h3 className="font-display text-3xl font-semibold text-navy">Right location</h3>
                      <Link to="/places" onClick={() => setPlacesOpen(false)} className="text-xs font-semibold uppercase tracking-widest text-red hover:underline">
                        View All →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      {PLACES.map((place) => (
                        <div key={place.country}>
                          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
                            {place.country}
                          </p>
                          <div className="flex flex-col gap-1">
                            {place.cities.map((city) => (
                              <Link
                                key={city}
                                to={`/city?city=${encodeURIComponent(city)}`}
                                onClick={() => setPlacesOpen(false)}
                                className="border-b border-navy/15 py-2 text-sm font-medium text-navy transition-colors hover:border-red hover:text-red"
                              >
                                {city}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Industries (formerly Industries) - Moved to second position */}
            <div
              className="relative"
              onMouseEnter={() => { setIndustriesOpen(true); closeAllExcept("industries"); }}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  industriesOpen ? "text-navy/40" : "text-navy hover:text-red"
                }`}
              >
                Right industries
                <motion.span animate={{ rotate: industriesOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="text-[11px]">
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 mt-3 w-[820px] max-w-[95vw] rounded-3xl border border-navy/10 bg-cream p-8 shadow-2xl"
                  >
                    <div className="mb-6 flex items-baseline justify-between border-b border-navy/15 pb-4">
                      <h3 className="font-display text-3xl font-semibold text-navy">Right industries</h3>
                      <Link to="/industries" onClick={() => setIndustriesOpen(false)} className="text-xs font-semibold uppercase tracking-widest text-red hover:underline">
                        View All →
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-x-8 gap-y-1">
                      {INDUSTRIES.map((industry) => (
                        <Link
                          key={industry.name}
                          to={`/influencers?industry=${encodeURIComponent(industry.name)}`}
                          onClick={() => setIndustriesOpen(false)}
                          className="border-b border-navy/15 py-2.5 text-sm text-navy transition-colors hover:border-red hover:text-red"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Expertise Dropdown (formerly What We Do) */}
            <div
              className="relative"
              onMouseEnter={() => { setWhatWeDoOpen(true); closeAllExcept("whatWeDo"); }}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  whatWeDoOpen ? "text-navy/40" : "text-navy hover:text-red"
                }`}
              >
                Expertise
                <motion.span animate={{ rotate: whatWeDoOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="text-[11px]">
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {whatWeDoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 mt-3 w-[360px] rounded-3xl border border-navy/10 bg-cream p-6 shadow-2xl"
                  >
                    <div className="mb-4 flex items-baseline justify-between border-b border-navy/15 pb-4">
                      <h3 className="font-display text-3xl font-semibold text-navy">What We Do</h3>
                      <button onClick={() => goToWhatWeDo(null)} className="text-xs font-semibold uppercase tracking-widest text-red hover:underline">
                        View All →
                      </button>
                    </div>
                    <div className="flex flex-col">
                      {WHAT_WE_DO.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => goToWhatWeDo(item.to.split("#")[1])}
                          className="border-b border-navy/15 py-3 text-left font-display text-base font-semibold text-navy transition-colors hover:text-red last:border-b-0"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Agency Dropdown (formerly Who We Are) */}
            <div
              className="relative"
              onMouseEnter={() => { setWhoWeAreOpen(true); closeAllExcept("whoWeAre"); }}
              onMouseLeave={() => setWhoWeAreOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  whoWeAreOpen ? "text-navy/40" : "text-navy hover:text-red"
                }`}
              >
                Agency
                <motion.span animate={{ rotate: whoWeAreOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="text-[11px]">
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {whoWeAreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 mt-3 w-[360px] rounded-3xl border border-navy/10 bg-cream p-6 shadow-2xl"
                  >
                    <div className="mb-4 flex items-baseline justify-between border-b border-navy/15 pb-4">
                      <h3 className="font-display text-3xl font-semibold text-navy">Who We Are</h3>
                    </div>
                    <div className="flex flex-col">
                      {WHO_WE_ARE.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setWhoWeAreOpen(false)}
                          className="border-b border-navy/15 py-3 text-left font-display text-base font-semibold text-navy transition-colors hover:text-red last:border-b-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Workflow (formerly How we work) */}
            {otherNavItems.map((item) =>
              item.children ? (
                <button key={item.label} onClick={() => item.children[0] && go(item.children[0].to)} className="text-[15px] font-semibold text-navy transition-colors hover:text-red">
                  Workflow
                </button>
              ) : (
                <button key={item.label} onClick={() => go(item.to)} className="text-[15px] font-semibold text-navy transition-colors hover:text-red">
                  Workflow
                </button>
              )
            )}

            {/* Latest Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setLatestOpen(true); closeAllExcept("latest"); }}
              onMouseLeave={() => setLatestOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  latestOpen ? "text-navy/40" : "text-navy hover:text-red"
                }`}
              >
                Latest
                <motion.span animate={{ rotate: latestOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="text-[11px]">
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {latestOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute right-0 top-full z-50 mt-3 w-[360px] rounded-3xl border border-navy/10 bg-cream p-6 shadow-2xl"
                  >
                    <div className="mb-4 flex items-baseline justify-between border-b border-navy/15 pb-4">
                      <h3 className="font-display text-3xl font-semibold text-navy">Latest</h3>
                    </div>
                    <div className="flex flex-col">
                      {LATEST.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setLatestOpen(false)}
                          className="border-b border-navy/15 py-3 text-left font-display text-base font-semibold text-navy transition-colors hover:text-red last:border-b-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/brief"
              className="rounded-full bg-red px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-red/90"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`absolute h-0.5 w-6 rounded-full bg-navy transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
            <span className={`absolute h-0.5 w-6 rounded-full bg-navy transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-0.5 w-6 rounded-full bg-navy transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
          </button>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} go={go} />
    </>
  );
}