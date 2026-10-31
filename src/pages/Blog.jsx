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
    bg: "bg-navy",
  },
  {
    id: 2,
    category: "Talent & PR",
    time: "6 min read",
    title: "How to brief a UGC creator so the content converts",
    desc: "The hook, the talking points and the CTA: a simple brief structure that gets better videos.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tl-[3rem]",
    bg: "bg-red",
  },
  {
    id: 3,
    category: "Social media",
    time: "4 min read",
    title: "Plan a month of social content in one afternoon",
    desc: "A simple calendar method for brands that want to post consistently without the panic.",
    image: "https://images.pexels.com/photos/5081933/pexels-photo-5081933.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-bl-[3rem]",
    bg: "bg-sky",
  },
  {
    id: 4,
    category: "Paid media",
    time: "5 min read",
    title: "Spark ads and whitelisting, explained",
    desc: "How to turn your best creator posts into ads, and what to agree with creators first.",
    image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-bl-[3rem]",
    bg: "bg-navy",
  },
  {
    id: 5,
    category: "Shoots",
    time: "6 min read",
    title: "What to prepare before a product shoot",
    desc: "Shot lists, mood boards, styling and approvals: the checklist that saves the day.",
    image: "https://images.pexels.com/photos/3014016/pexels-photo-3014016.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tr-[3rem]",
    bg: "bg-red",
  },
  {
    id: 6,
    category: "Agency news",
    time: "3 min read",
    title: "Meet The Right Talent: why we started",
    desc: "The story behind a research-led talent agency, and what 'the right fit' means to us.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    shape: "rounded-tl-[3rem]",
    bg: "bg-sky",
  },
];

// ---------- Components ----------
function ArticleCard({ article }) {
  return (
    <Reveal>
      <div className="group flex h-full flex-col cursor-pointer">
        {/* Image Container with unique shape */}
        <div className={`relative aspect-[4/3] w-full overflow-hidden ${article.shape} ${article.bg}`}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          />
        </div>
        
        {/* Meta tags */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#FBEFD6] px-4 py-1.5 text-xs font-semibold text-navy">
            {article.category}
          </span>
          <span className="text-xs font-medium text-navy/60">{article.time}</span>
        </div>

        {/* Title & Desc */}
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy transition-colors group-hover:text-red">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">
          {article.desc}
        </p>

        {/* Read Article Link */}
        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-red">
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

  // Filter logic
  const filteredArticles = activeCategory === "All" 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === activeCategory);

  const featuredArticle = ARTICLES[0];

  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pt-[10%] pb-20 md:px-10">

        {/* HERO */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-xs font-bold uppercase tracking-widest text-red md:text-sm"
          >
            Latest · Blogs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-navy md:text-5xl lg:text-6xl"
          >
            Ideas for finding the <span className="font-serif italic text-red">right</span> talent, and using it well.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-navy/75 md:text-lg"
          >
            Practical tips on talent, PR, social media, paid media and shoots, from the people who do it every day.
          </motion.p>
        </div>

        {/* FEATURED ARTICLE */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-1 items-center gap-10 overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] bg-navy p-8 md:grid-cols-2 md:p-12 lg:p-16">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-[3rem] bg-sky">
              <img 
                src={featuredArticle.image} 
                alt="Featured" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col items-start text-cream">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-red px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-sm font-medium text-cream/70">
                  {featuredArticle.category} · {featuredArticle.time}
                </span>
              </div>
              
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-5xl">
                {featuredArticle.title}
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-cream/80">
                {featuredArticle.desc}
              </p>
              
              <button className="mt-8 rounded-full bg-cream px-8 py-3 text-sm font-semibold text-navy transition hover:bg-white">
                Read the article
              </button>
            </div>
          </div>
        </Reveal>

        {/* ALL ARTICLES */}
        <div className="mt-32">
          {/* Header & Filters */}
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
                All articles
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      activeCategory === cat
                        ? "border-navy bg-navy text-cream"
                        : "border-navy/30 bg-transparent text-navy hover:border-navy"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Articles Grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* NEWSLETTER */}
        <Reveal delay={0.1}>
          <div className="relative mt-32 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] bg-sky px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-navy/60 md:text-sm">
                Newsletter
              </p>
              
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
                Get the <span className="font-serif italic text-white">right</span> ideas, monthly.
              </h2>
              
              <p className="mt-4 text-base text-navy/80">
                New posts, reports and talent insights in your inbox. No spam.
              </p>
              
              <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  className="w-full rounded-full border border-navy/20 bg-cream px-6 py-3.5 text-sm text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 sm:max-w-xs"
                />
                <button 
                  type="submit" 
                  className="rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-red/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Reveal>

      </div>
    </Sec>
  );
}