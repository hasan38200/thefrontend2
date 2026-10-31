import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Reveal, Sec, ease } from "../ui";
import { SERVICES } from "../data";

// ---------- Check icon ----------
const Check = ({ color = "red" }) => (
  <span
    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
      color === "red" ? "bg-red" : "bg-sky"
    } text-white`}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

// ---------- Individual service block ----------
function ServiceBlock({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 0.05}>
      <section
        id={service.id}
        className="scroll-mt-32 border-t border-navy/15 pt-12 md:pt-[10%]"
      >
        <div className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>

          {/* Visual block */}
          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${isEven ? "rounded-tr-[4rem]" : "rounded-bl-[4rem]"}`}
            >
              <motion.video
                src={service.video}
                poster={service.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease }}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-navy/15 mix-blend-multiply" />
            </motion.div>

            {/* Secondary image below video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className={`mt-4 aspect-[4/3] w-2/3 overflow-hidden ${isEven ? "ml-0" : "ml-auto"}`}
            >
              <img
                src={service.secondary}
                alt=""
                className={`h-full w-full object-cover ${isEven ? "rounded-bl-[3rem]" : "rounded-br-[3rem]"}`}
              />
            </motion.div>

            {/* Decorative red circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 180 }}
              className={`absolute bottom-6 h-14 w-14 rounded-full bg-red md:h-20 md:w-20 ${isEven ? "right-4" : "left-4"}`}
            />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="lg:pt-6"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">
              {service.number} · {service.title}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
              {service.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/75 md:text-lg">
              {service.tagline}
            </p>

            {/* Checklist */}
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {service.checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-navy md:text-base">
                  <Check color={isEven ? "red" : "sky"} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Toggle */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-8 flex w-full items-center justify-between border-t border-navy/30 pt-4 text-left text-sm font-semibold text-navy transition-colors hover:text-red md:text-base"
            >
              <span>See everything included ({service.items.length})</span>
              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xl leading-none"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden"
                >
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.02 } } }}
                    className="grid grid-cols-1 gap-x-6 gap-y-1 pt-3 sm:grid-cols-2"
                  >
                    {service.items.map((item) => (
                      <motion.li
                        key={item}
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3, ease }}
                        className="border-b border-navy/15 py-2 text-xs text-navy/80 md:text-sm"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>

            <Link
              to="/brief"
              className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy/90 md:text-base"
            >
              {service.cta}
            </Link>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}

// ---------- FAQ item ----------
function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-navy/30">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-navy transition-colors hover:text-red md:text-lg"
        >
          <span>{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-xl leading-none text-red"
          >
            +
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm leading-relaxed text-navy/75 md:text-base">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

// ---------- Page ----------
export default function WhatWeDo() {
  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pt-[10%] pb-20 md:px-10">

        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">
              What we do
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-navy md:text-4xl lg:text-5xl">
              The <span className="font-serif italic text-red">right</span> talent, content and media, working as one.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/75 md:text-lg">
              Talent & PR, social media, paid media and shoots, planned together so every piece reaches the people who matter to your brand.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/brief"
                className="inline-flex items-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-cream transition hover:bg-red/90 md:text-base"
              >
                Start your project
              </Link>
              <a
                href="#talent-pr"
                className="inline-flex items-center rounded-full border border-navy/30 px-6 py-3 text-sm font-semibold text-navy transition hover:border-red hover:text-red md:text-base"
              >
                Explore services
              </a>
            </div>
          </motion.div>

          {/* Hero collage */}
          <div className="relative aspect-[5/4] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="absolute left-0 top-0 h-[70%] w-[55%] overflow-hidden rounded-tr-[3rem] bg-navy/10"
            >
              <video
                src="https://videos.pexels.com/video-files/3379943/3379943-uhd_2560_1440_30fps.mp4"
                poster="https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=800"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 150 }}
              className="absolute -top-3 right-[40%] h-10 w-10 rounded-full bg-red md:h-14 md:w-14"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="absolute right-0 top-0 h-[55%] w-[42%] overflow-hidden rounded-bl-[3rem] bg-sky"
            >
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="absolute bottom-0 right-0 h-[50%] w-[42%] overflow-hidden rounded-tl-[3rem] bg-red"
            >
              <img
                src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 150 }}
              className="absolute bottom-0 left-[10%] h-12 w-12 rounded-tr-full bg-sky md:h-16 md:w-16"
            />
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl lg:text-4xl">
            Four services. One team behind them.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-navy/70 md:text-base">
            Pick the one you need, or combine them. Tap a service to see everything included.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => {
              const colors = [
                { bg: "bg-navy", text: "text-cream", num: "text-sky", shape: "rounded-tr-[2rem]" },
                { bg: "bg-red", text: "text-cream", num: "text-white/70", shape: "rounded-tl-[2rem]" },
                { bg: "bg-sky", text: "text-navy", num: "text-navy/60", shape: "rounded-bl-[2rem]" },
                { bg: "bg-navy", text: "text-cream", num: "text-sky", shape: "rounded-br-[2rem]" },
              ][i];

              return (
                <Reveal key={service.id} delay={i * 0.06}>
                  <motion.a
                    href={`#${service.id}`}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex aspect-[4/5] w-full flex-col justify-between ${colors.shape} ${colors.bg} p-5 ${colors.text} sm:p-6`}
                  >
                    <p className={`text-xs font-bold ${colors.num}`}>{service.number}</p>
                    <div>
                      <h3 className="font-display text-xl font-semibold md:text-2xl">
                        {service.title}
                      </h3>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-xs opacity-90 md:text-sm">{service.shortTag}</p>
                        <span className="text-lg">→</span>
                      </div>
                    </div>
                  </motion.a>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* DETAILED SERVICE BLOCKS */}
        <div className="mt-20 space-y-20 md:space-y-24">
          {SERVICES.map((service, i) => (
            <ServiceBlock key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* GETTING STARTED — 3 STEPS */}
        <div className="mt-28 rounded-2xl bg-navy p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-widest text-cream/70 md:text-sm">
            Getting started
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            Three steps to your first campaign.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            <Reveal delay={0}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex aspect-[5/4] flex-col justify-between rounded-tr-[2.5rem] bg-cream p-6 text-navy md:p-7"
              >
                <p className="font-display text-3xl font-bold text-navy md:text-4xl">1</p>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
                    Tell us what you need
                  </h3>
                  <p className="mt-2 text-sm text-navy/80 md:text-base">
                    Share your brand, goal, audience and timeline in a short form.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex aspect-[5/4] flex-col justify-between rounded-tl-[2.5rem] bg-sky p-6 text-navy md:p-7"
              >
                <p className="font-display text-3xl font-bold text-navy md:text-4xl">2</p>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
                    Get a clear proposal
                  </h3>
                  <p className="mt-2 text-sm text-navy/80 md:text-base">
                    Scope, deliverables, timeline and quote, built around your brief.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.16}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex aspect-[5/4] flex-col justify-between rounded-br-[2.5rem] bg-red p-6 text-cream md:p-7"
              >
                <p className="font-display text-3xl font-bold text-cream md:text-4xl">3</p>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream md:text-xl">
                    We get to work
                  </h3>
                  <p className="mt-2 text-sm text-cream/90 md:text-base">
                    One team runs the talent, content and media from start to finish.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>

          <div className="mt-8">
            <Link
              to="/brief"
              className="inline-flex items-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-red/90 md:text-base"
            >
              Start your project
            </Link>
          </div>
        </div>

        {/* OUR WORK AT A GLANCE */}
        <div id="our-work"className="mt-28">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
              Our work, at a glance.
            </h2>
            <p className="max-w-lg text-sm text-navy/70 md:text-base">
              A space for your best shoots, campaigns and creator content.
            </p>
          </div>

          <div  className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4">
            <Reveal className="md:col-span-1 md:row-span-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative h-full min-h-[300px] w-full overflow-hidden rounded-tr-[3rem] bg-navy"
              >
                <video
                  src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4"
                  poster="https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=800"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </Reveal>

            <Reveal delay={0.06}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[2.5rem] bg-sky"
              >
                <img src="https://images.pexels.com/photos/5081933/pexels-photo-5081933.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full w-full object-cover" />
              </motion.div>
            </Reveal>

            <Reveal delay={0.12}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-[2.5rem] bg-red"
              >
                <img src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full w-full object-cover" />
              </motion.div>
            </Reveal>

            <Reveal delay={0.18}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-bl-[2.5rem] bg-red"
              >
                <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full w-full object-cover" />
              </motion.div>
            </Reveal>

            <Reveal delay={0.24}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-br-[2.5rem] bg-sky"
              >
                <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full w-full object-cover" />
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red md:text-sm">
                Questions
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
                Good to know before you start.
              </h2>
            </div>

            <div>
              {[
                { q: "Can I use just one service?", a: "Yes. Each service works on its own, and you can add others later as you grow." },
                { q: "Do you work on a monthly basis?", a: "Yes. Social media, paid media and talent work can run as a monthly partnership with a set scope and regular planning." },
                { q: "How is pricing decided?", a: "Every project is quoted to your brief, based on scope, deliverables, platform and the number of creators or shoot days." },
                { q: "Do you work with brands outside Pakistan?", a: "Yes. We work with brands in Pakistan and international markets, including New York and Canada." },
                { q: "Do you only work with influencers?", a: "No. We cast UGC creators, influencers, models, actors and presenters, and match each one to your niche and audience." },
              ].map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* SKY CTA — Use one service, or all four */}
<Reveal delay={0.1}>
  <section className="relative mt-28 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] bg-sky p-10 md:p-14">
    <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto]">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-navy/70 md:text-sm">
          One project or monthly
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
          Use one service, or all four.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-navy/80 md:text-base">
          Tell us about your brand and we'll come back with the right plan.
        </p>
      </div>
      <div>
        <Link
          to="/brief"
          className="inline-flex items-center rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-red/90 md:text-base"
        >
          Start your project
        </Link>
      </div>
    </div>
  </section>
</Reveal>

        

      </div>
    </Sec>
  );
}