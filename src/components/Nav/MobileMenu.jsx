import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { NAV, INDUSTRIES, PLACES } from "../../data";

const ease = [0.22, 1, 0.36, 1];

const SIZE = {
  lg: "text-[clamp(1.6rem,5.4vh,2.9rem)]",
  md: "text-[clamp(1.4rem,4.6vh,2.4rem)]",
  sm: "text-[clamp(1.05rem,3.2vh,1.6rem)]",
  xs: "text-[clamp(0.85rem,2.4vh,1.15rem)]",
};

const Chevron = ({ dir = "right" }) => (
  <svg
    className="h-[3.4vh] w-[3.4vh] min-h-5 min-w-5 max-h-7 max-w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={dir === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
  </svg>
);

const panel = {
  enter: (d) => ({ x: d > 0 ? "100%" : "-30%", opacity: d > 0 ? 1 : 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? "-30%" : "100%", opacity: d > 0 ? 0 : 1 }),
};

function Row({ i = 0, to, onClick, chevron, size = "lg", span, children }) {
  const pad = size === "xs" ? "py-[0.7vh]" : "py-[1.2vh]";
  const cls = `group flex w-full items-center justify-between gap-3 ${pad} text-left font-display font-extrabold leading-[1.1] text-white transition-colors hover:text-red active:text-red ${SIZE[size]}`;
  const inner = (
    <>
      <span>{children}</span>
      {chevron && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5">
          <Chevron />
        </span>
      )}
    </>
  );
  return (
    <motion.li
      className={span ? "col-span-2" : ""}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 + Math.min(i, 12) * 0.04, duration: 0.5, ease }}
    >
      {to ? (
        <Link to={to} onClick={onClick} className={cls}>{inner}</Link>
      ) : (
        <button type="button" onClick={onClick} className={cls}>{inner}</button>
      )}
    </motion.li>
  );
}

const List = ({ many, center, children }) => (
  <ul className={many ? "grid grid-cols-2 gap-x-5" : `flex flex-col ${center ? "flex-1 justify-center" : ""}`}>
    {children}
  </ul>
);

export default function MobileMenu({ open, setOpen, go }) {
  const [stack, setStack] = useState(["main"]);
  const [dir, setDir] = useState(1);
  const view = stack[stack.length - 1];

  const close = () => setOpen(false);
  const push = (v) => { setDir(1); setStack((s) => [...s, v]); };
  const back = () => { setDir(-1); setStack((s) => s.slice(0, -1)); };
  const unlock = () => {
    window.__lenis?.start();
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };
  const goAndClose = (target) => { unlock(); go(target); };

  useEffect(() => {
    if (open) {
      setStack(["main"]);
      setDir(1);
      window.__lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else unlock();
    return unlock;
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [setOpen]);

  // Filter out "Expertise" from NAV since we render it manually below
  const otherNavItems = NAV.filter((item) => item.label !== "Expertise" && item.label !== "What We Do");

  let title = null;
  let list;

  if (view === "main") {
    list = (
      <List center>
        {/* Right location */}
        <Row i={0} chevron onClick={() => push("places")}>Right location</Row>
        
        {/* Right industries */}
        <Row i={1} chevron onClick={() => push("industries")}>Right industries</Row>

        {/* Expertise */}
        <Row i={2} chevron onClick={() => push("what-we-do")}>Expertise</Row>

        {/* Agency */}
        <Row i={3} chevron onClick={() => push("who-we-are")}>Agency</Row>

        {/* Workflow (from NAV data) */}
        {otherNavItems.map((item, i) =>
          item.children ? (
            <Row key={item.label} i={i + 4} chevron onClick={() => push("nav:" + item.label)}>
              Workflow
            </Row>
          ) : (
            <Row key={item.label} i={i + 4} onClick={() => goAndClose(item.to)}>
              Workflow
            </Row>
          )
        )}

        {/* Latest */}
        <Row i={NAV.length + 4} chevron onClick={() => push("latest")}>Latest</Row>
      </List>
    );
  } else if (view === "what-we-do") {
    title = "Expertise";
    list = (
      <List>
        <Row i={0} size="md" to="/what-we-do#talent-pr" onClick={close}>PR</Row>
        <Row i={1} size="md" to="/what-we-do#social-media" onClick={close}>Social Media</Row>
        <Row i={2} size="md" to="/what-we-do#paid-media" onClick={close}>Paid media</Row>
        <Row i={3} size="md" to="/what-we-do#shoots-production" onClick={close}>Shoots & production</Row>
        <Row i={4} size="md" to="/what-we-do#our-work" onClick={close}>Our Work</Row>
      </List>
    );
  } else if (view === "who-we-are") {
    title = "Agency";
    list = (
      <List>
        <Row i={0} size="md" to="/about-us" onClick={close}>About us</Row>
        <Row i={1} size="md" to="/careers" onClick={close}>Our Careers</Row>
      </List>
    );
  } else if (view === "latest") {
    title = "Latest";
    list = (
      <List>
        <Row i={0} size="md" to="/blog" onClick={close}>Blog</Row>
        <Row i={1} size="md" to="/reports" onClick={close}>Reports</Row>
      </List>
    );
  } else if (view.startsWith("nav:")) {
    const item = NAV.find((n) => n.label === view.slice(4));
    title = item?.label;
    list = (
      <List>
        {(item?.children || []).map((c, i) =>
          c.to.startsWith("/") ? (
            <Row key={c.name} i={i} size="md" to={c.to} onClick={close}>{c.name}</Row>
          ) : (
            <Row key={c.name} i={i} size="md" onClick={() => goAndClose(c.to)}>{c.name}</Row>
          )
        )}
      </List>
    );
  } else if (view === "industries") {
    title = "Right industries";
    const many = INDUSTRIES.length > 7;
    list = (
      <List many={many}>
        {INDUSTRIES.map((x, i) => (
          <Row key={x.name} i={i} size={many ? "xs" : "md"} to={`/influencers?industry=${encodeURIComponent(x.name)}`} onClick={close}>
            {x.name}
          </Row>
        ))}
        <Row i={INDUSTRIES.length} size={many ? "xs" : "md"} span to="/industries" onClick={close}>
          <span className="text-red">View all →</span>
        </Row>
      </List>
    );
  } else if (view === "places") {
    title = "Right location";
    list = (
      <List>
        {PLACES.map((p, i) => (
          <Row key={p.country} i={i} size="md" chevron onClick={() => push("place:" + p.country)}>
            {p.country}
          </Row>
        ))}
        <Row i={PLACES.length} size="md" to="/places" onClick={close}>
          <span className="text-red">View all →</span>
        </Row>
      </List>
    );
  } else {
    const country = view.slice(6);
    const cities = PLACES.find((p) => p.country === country)?.cities || [];
    const many = cities.length > 7;
    title = country;
    list = (
      <List many={many}>
        {cities.map((c, i) => (
          <Row key={c} i={i} size={many ? "xs" : "md"} to={`/city?city=${encodeURIComponent(c)}`} onClick={close}>
            {c}
          </Row>
        ))}
      </List>
    );
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[96] bg-[#0b0b0b] text-white lg:hidden"
          role="dialog"
          aria-modal="true"
          initial={{ clipPath: "circle(0% at 92% 6%)" }}
          animate={{ clipPath: "circle(150% at 92% 6%)" }}
          exit={{ clipPath: "circle(0% at 92% 6%)" }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.button
            onClick={close}
            aria-label="Close menu"
            className="absolute right-4 top-4 z-20 grid h-14 w-14 place-items-center rounded-full bg-white text-black"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 14 }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </motion.button>

          <div className="relative h-full overflow-hidden">
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={view}
                custom={dir}
                variants={panel}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 flex flex-col overflow-y-auto px-7 pb-36 pt-[4.5rem]"
              >
                {view !== "main" && (
                  <>
                    <button
                      onClick={back}
                      className="mb-1 flex items-center gap-2 font-display text-[clamp(1.3rem,3.6vh,1.9rem)] font-extrabold text-white"
                    >
                      <Chevron dir="left" /> Back
                    </button>
                    <p className="mb-2 font-display text-[clamp(1.6rem,4.2vh,2.2rem)] font-extrabold leading-tight text-white">
                      {title}
                    </p>
                  </>
                )}
                {list}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/90 to-transparent" />

          <motion.div
            className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
          >
            <Link
              to="/brief"
              onClick={close}
              className="rounded-full border-2 border-white bg-[#0b0b0b] px-14 py-4 font-display text-lg font-extrabold text-white transition-colors hover:bg-white hover:text-black"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}