import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Sec, ease } from "../ui";

// ---------- Data ----------
const CATEGORIES = ["All", "Talent & PR", "Social media", "Paid media", "Shoots", "Agency news"];

const ARTICLES = [
  {
    id: 1,
    category: "Talent & PR",
    time: "5 min read",
    title: "Creator location vs. audience location: what brands miss",
    desc: "Why a Lahore-based creator might mostly reach viewers in Dubai, and how to check before you book.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tr-[3rem]",
    bg: "bg-[#0F2C3D]",
  },
  {
    id: 2,
    category: "Talent & PR",
    time: "6 min read",
    title: "How to brief a UGC creator so the content converts",
    desc: "The hook, the talking points and the CTA: a simple brief structure that gets better videos.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tl-[3rem]",
    bg: "bg-[#C82333]",
  },
  {
    id: 3,
    category: "Social media",
    time: "4 min read",
    title: "Plan a month of social content in one afternoon",
    desc: "A simple calendar method for brands that want to post consistently without the panic.",
    image: "https://images.pexels.com/photos/5081933/pexels-photo-5081933.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-bl-[3rem]",
    bg: "bg-[#67E8F9]",
  },
  {
    id: 4,
    category: "Paid media",
    time: "5 min read",
    title: "Spark ads and whitelisting, explained",
    desc: "How to turn your best creator posts into ads, and what to agree with creators first.",
    image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-bl-[3rem]",
    bg: "bg-[#0F2C3D]",
  },
  {
    id: 5,
    category: "Shoots",
    time: "6 min read",
    title: "What to prepare before a product shoot",
    desc: "Shot lists, mood boards, styling and approvals: the checklist that saves the day.",
    image: "https://images.pexels.com/photos/3014016/pexels-photo-3014016.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tr-[3rem]",
    bg: "bg-[#C82333]",
  },
  {
    id: 6,
    category: "Agency news",
    time: "3 min read",
    title: "Meet The Right Talent: the story behind the agency",
    desc: "The story behind a research-led talent agency, and what 'the right fit' means to us.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tl-[3rem]",
    bg: "bg-[#67E8F9]",
  },
];

// ---------- Components ----------
function ArticleCard({ article }) {
  return (
    <Reveal>
      <div className="group flex h-full flex-col cursor-pointer">
        
        {/* Image Container with specific shape and background */}
        <div className={`relative aspect-[4/3] w-full overflow-hidden ${article.shape} ${article.bg}`}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          />
        </div>
        
        {/* Meta tags */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0F2C3D]/50">
            {article.category}
          </span>
          <span className="text-[11px] text-[#0F2C3D]/40">·</span>
          <span className="text-[11px] font-medium text-[#0F2C3D]/50">{article.time}</span>
        </div>

        {/* Title & Desc */}
        <h3 className="mt-2 font-display text-[1.15rem] font-bold leading-[1.3] text-[#0F2C3D] transition-colors group-hover:text-[#C82333]">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-[1.6] text-[#0F2C3D]/70">
          {article.desc}
        </p>

        {/* Read Article Link */}
        <div className="mt-5 flex items-center gap-1.5 text-[13px] font-bold text-[#C82333]">
          <span>Read article</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Reveal>
  );
}

// ---------- Page ----------
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === activeCategory);

  const featuredArticle = ARTICLES[0];

  return (
    <Sec className="bg-[#FFFFFF] min-h-screen">
      <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-20 md:px-10 md:pt-32">

        {/* FEATURED ARTICLE (Matched EXACTLY to UI) */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 overflow-hidden rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-[1.25rem] bg-[#0F2C3D] md:grid-cols-2 md:rounded-tl-[4rem] md:rounded-tr-[4rem] md:rounded-bl-[4rem] md:rounded-br-[1.5rem]">

            {/* Left side: image inset inside the navy card */}
            <div className="p-5 pb-0 md:py-9 md:pb-7 md:pl-8 md:pr-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-[3rem] bg-[#67E8F9] md:aspect-auto md:h-full md:min-h-[300px] md:rounded-tr-[3.5rem]">
                <img
                  src={featuredArticle.image}
                  alt="Featured"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right side Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 md:py-10 md:pl-10 md:pr-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#C82333] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Featured
                </span>
                <span className="text-[11px] font-medium text-white/60">
                  Talent & PR · 6 min read
                </span>
              </div>

              <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.1] text-white md:text-[2.5rem]">
                Why follower count is the wrong way to pick an influencer
              </h2>

              <p className="mt-4 text-[14px] leading-[1.6] text-white/70">
                Big numbers don't guarantee the right buyers. Here's a better scorecard: niche, audience, geography, brand and campaign fit.
              </p>

              <button className="mt-8 self-start rounded-full bg-white px-6 py-3 text-[13px] font-bold text-[#0F2C3D] transition hover:bg-white/90">
                Read the article
              </button>
            </div>
          </div>
        </Reveal>

        {/* ALL ARTICLES */}
        <div className="mt-24">
          {/* Header & Filters */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Reveal>
              <h2 className="font-display text-[2.2rem] font-bold text-[#0F2C3D] md:text-[2.75rem]">
                All articles
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full border px-4 py-1.5 text-[11px] font-bold transition-all duration-300 ${
                      activeCategory === cat
                        ? "border-[#0F2C3D] bg-[#0F2C3D] text-white"
                        : "border-[#0F2C3D]/20 bg-transparent text-[#0F2C3D] hover:border-[#0F2C3D]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Articles Grid (3 columns) */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </Sec>
  );
}