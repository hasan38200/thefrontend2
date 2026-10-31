import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow, H2, Sec } from "../../../ui";

const FAQS = [
  [
    "How do you choose creators?",
    "We check every creator for niche, audience location, content quality, engagement, brand safety, budget and past results. You get a ranked shortlist with a written reason for each recommendation.",
  ],
  [
    "Can I see the content before it goes live?",
    "Yes. We review all content against your brief first, and nothing is published until you have approved it.",
  ],
  [
    "Do you only work with big influencers?",
    "No. We choose by fit, not follower count. Often a smaller creator with the right audience works better than a famous one.",
  ],
  [
    "Can we work on a monthly basis?",
    "Yes. If you have a steady flow of briefs, our monthly plans give you a defined scope, regular planning and one team that knows your brand.",
  ],
  [
    "Do you work outside Pakistan?",
    "Yes. We work with creators in Karachi, Lahore and Islamabad, and in the UK and the US, with local audience and language checks for each market.",
  ],
];

// One shared curve and duration keep everything in sync
const SMOOTH = "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

function FaqItem({ q, a, i, open, onToggle }) {
  return (
    <Reveal delay={i * 0.08}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`overflow-hidden rounded-2xl border bg-white transition-[box-shadow,border-color] ${SMOOTH} ${
          open
            ? "border-navy/20 shadow-lg shadow-navy/10"
            : "border-navy/10 shadow-sm hover:shadow-md"
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="text-sm font-semibold text-navy sm:text-base">{q}</span>
          <span
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy text-white transition-transform ${SMOOTH} sm:h-8 sm:w-8 ${
              open ? "rotate-[135deg]" : "rotate-0"
            }`}
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>

        {/* Smooth open/close: grid row goes 0fr -> 1fr */}
        <div
          onTransitionEnd={(e) => {
            if (e.propertyName === "grid-template-rows") {
              window.__lenis?.resize();
            }
          }}
          className={`grid transition-[grid-template-rows] ${SMOOTH} ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p
              className={`px-4 pb-5 text-sm leading-relaxed text-navy/75 transition-[opacity,transform] ${SMOOTH} sm:px-6 sm:text-base ${
                open ? "translate-y-0 opacity-100 delay-100" : "-translate-y-2 opacity-0"
              }`}
            >
              {a}
            </p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Sec id="faq">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.7fr] lg:gap-12">
        {/* Left: label + heading */}
        <div>
          <Eyebrow className="text-[12px] sm:text-[13px]">Questions brands ask</Eyebrow>
          <H2 className="!text-navy">Good to know.</H2>
        </div>

        {/* Right: questions */}
        <div className="flex flex-col gap-3">
          {FAQS.map(([q, a], i) => (
            <FaqItem
              key={q}
              q={q}
              a={a}
              i={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Sec>
  );
}