import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandForm from "./BrandForm";
import CreatorForm from "./CreatorForm";

const TABS = [["brands", "For brands"], ["creators", "For creators"]];

export default function Brief() {
  const [tab, setTab] = useState("brands");
  
  return (
    <section className="min-h-screen bg-[#FFFFFF] px-5 pb-12 pt-28 md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1100px]">
        
        {/* Tab Switcher */}
        <div className="relative isolate mb-10 inline-flex rounded-full border-2 border-navy p-1">
          {TABS.map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${tab === k ? "text-white" : "text-navy"}`}>
              {tab === k && (
                <motion.span layoutId="brief-tab" className="absolute inset-0 -z-10 rounded-full bg-navy"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              {l}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.4 }}>
            {tab === "brands" ? <BrandForm /> : <CreatorForm />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}