import { useRef, useState } from "react";
import { useLocation, useRoutes } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Brief } from "./pages";
import { Nav, Footer, Preloader, Cursor } from "./components";
import useLenis from "./hooks/useLenis";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import Places from "./pages/Places";
import CityDetail from "./pages/CityDetail";
import WhatWeDo from "./pages/WhatWeDo";   
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog"; // <-- NEW
import Reports from "./pages/Reports";

export default function App() {
  useLenis();
  const [ready, setReady] = useState(false);
  const loc = useLocation();
  const first = useRef(loc.pathname);
  const moved = useRef(false);
  if (loc.pathname !== first.current) moved.current = true;

  const page = useRoutes([
    { path: "/", element: <Home ready={ready} /> },
    { path: "/brief", element: <Brief /> },
    { path: "/industries", element: <Industries /> },
    { path: "/influencers", element: <IndustryDetail /> },
    { path: "/places", element: <Places /> },
    { path: "/city", element: <CityDetail /> },
    { path: "/what-we-do", element: <WhatWeDo /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/careers", element: <Careers /> },
    { path: "/blog", element: <Blog /> },  // <-- NEW
    { path: "/reports", element: <Reports /> }
  ]);

  return (
    <div className="min-h-screen bg-cream">
      <Cursor />
      <AnimatePresence>{!ready && <Preloader done={() => setReady(true)} />}</AnimatePresence>

      {moved.current && (
        <motion.div
          key={loc.pathname}
          className="pointer-events-none fixed inset-0 z-[90] bg-red"
          initial={{ y: "100%" }}
          animate={{ y: ["100%", "0%", "0%", "-100%"] }}
          transition={{ duration: 1.3, times: [0, 0.4, 0.55, 1], ease: "easeInOut" }}
        />
      )}

      <Nav />

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.__lenis?.scrollTo(0, { immediate: true });
          window.__lenis?.resize();
        }}
      >
        <motion.main
          key={loc.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {page}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}