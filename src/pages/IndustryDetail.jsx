import { useSearchParams, Link } from "react-router";
import { motion } from "framer-motion";
import { Reveal, Sec, ease } from "../ui";

const TAGLINES = {
  "Fashion": "Style-forward creators shaping trends across Fashion.",
  "Beauty & Makeup": "Artists and educators redefining Beauty & Makeup.",
  "Skincare": "Trusted voices sharing real Skincare routines and results.",
  "Food & Restaurant": "Storytellers bringing Food & Restaurant to life.",
  "Fitness": "Trainers and athletes inspiring Fitness journeys.",
  "Health & Wellness": "Advocates for balanced, mindful Health & Wellness.",
  "Lifestyle": "Everyday creators capturing Lifestyle moments.",
  "Travel": "Explorers documenting Travel across the world.",
  "Comedy": "Humorists bringing Comedy to every feed.",
  "Dance": "Performers and choreographers moving Dance forward.",
  "Music": "Musicians and creators shaping Music culture.",
  "Education & Study": "Educators making Education & Study accessible.",
  "Tech & Gadgets": "Reviewers and enthusiasts covering Tech & Gadgets.",
  "Gaming": "Gamers and streamers defining Gaming culture.",
  "Finance & Business": "Experts simplifying Finance & Business.",
  "Motivation & Self-Help": "Voices powering Motivation & Self-Help journeys.",
  "Family & Mom": "Real stories from Family & Mom creators.",
  "Parenting": "Guidance and honesty on Parenting.",
  "Home Decor": "Designers transforming Home Decor spaces.",
  "Automotive (Cars & Bikes)": "Enthusiasts documenting Automotive (Cars & Bikes).",
  "Pets": "Pet parents sharing everyday joy.",
  "Books": "Readers and authors celebrating Books.",
  "Art & Calligraphy": "Artists mastering Art & Calligraphy.",
  "Wedding & Events": "Planners and creators capturing Wedding & Events.",
  "Sports": "Athletes and fans celebrating Sports.",
  "Photography": "Photographers shaping Photography today.",
};

const DUMMY_CREATORS = {
  "Fashion": [
    { name: "Ayesha Khan", handle: "@ayeshakhan", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Bilal Raza", handle: "@bilalraza", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Hina Siddiqui", handle: "@hinasiddiqui", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Usman Iqbal", handle: "@usmaniqbal", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Sana Malik", handle: "@sanamalik", image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Zara Ahmed", handle: "@zaraahmed", image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ],
  default: [
    { name: "Ayesha Khan", handle: "@ayeshakhan", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Bilal Raza", handle: "@bilalraza", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Hina Siddiqui", handle: "@hinasiddiqui", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Usman Iqbal", handle: "@usmaniqbal", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Sana Malik", handle: "@sanamalik", image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Zara Ahmed", handle: "@zaraahmed", image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ],
};

export default function IndustryDetail() {
  const [params] = useSearchParams();
  const industry = params.get("industry") || "Fashion";
  const tagline = TAGLINES[industry] || `Creators shaping trends across ${industry}.`;
  const creators = DUMMY_CREATORS[industry] || DUMMY_CREATORS.default;

  return (
    <Sec className="bg-cream min-h-screen pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          Industries · {industry}
        </p>

        {/* Industry Name + Get Started */}
        <div className="mt-4 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-5xl font-semibold text-navy md:text-7xl"
          >
            {industry}
          </motion.h1>
          <Link
            to="/brief"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 font-semibold text-cream transition hover:bg-navy/90"
          >
            Get Started →
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-6 max-w-2xl text-lg text-navy/80 md:text-xl">{tagline}</p>

        {/* Influencer Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator, i) => (
  <Reveal key={creator.name} delay={(i % 3) * 0.1}>
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group cursor-pointer"
    >
      {/* Card Image Container — scales on hover */}
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-navy/5"
      >
        <img
          src={creator.image}
          alt={creator.name}
          className="h-full w-full object-cover"
        />
        {/* Light blue gradient overlay on hover */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease }}
          className="pointer-events-none absolute inset-x-0 bottom-0 p-6"
          style={{
            background:
              "linear-gradient(to top, rgba(102,155,187,0.95), rgba(102,155,187,0.6), transparent)",
          }}
        >
          <p className="font-display text-xl font-semibold text-white md:text-2xl">
            {creator.name}
          </p>
          <p className="mt-1 text-sm text-white/90">{creator.handle}</p>
        </motion.div>
      </motion.div>

      {/* Name + Industry below card */}
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
          {creator.name}
        </h3>
        <span className="text-sm text-navy/60">{industry}</span>
      </div>
    </motion.div>
  </Reveal>
))}
        </div>
      </div>
    </Sec>
  );
}