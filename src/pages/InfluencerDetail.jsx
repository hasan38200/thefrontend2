import { useSearchParams, useNavigate, Link } from "react-router";
import { motion } from "framer-motion";
import { Reveal, Sec, ease } from "../ui";
import { CITY_INFLUENCERS } from "../data";
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

const PLATFORMS = [
  { key: "instagram", Icon: FaInstagram, label: "Instagram", url: (u) => `https://instagram.com/${u}` },
  { key: "tiktok", Icon: FaTiktok, label: "TikTok", url: (u) => `https://tiktok.com/@${u}` },
  { key: "youtube", Icon: FaYoutube, label: "YouTube", url: (u) => `https://youtube.com/@${u}` },
  { key: "linkedin", Icon: FaLinkedin, label: "LinkedIn", url: (u) => `https://linkedin.com/in/${u}` },
];

// Shows every platform. Uses influencer.socials[key] if provided, otherwise builds a link from the handle.
const SocialIcons = ({ handle, socials }) => {
  const user = (handle || "").trim().replace(/^@/, "");
  if (!user && !socials) return null;

  const items = PLATFORMS.map((p) => ({
    ...p,
    href: socials?.[p.key] || (user ? p.url(user) : null),
  })).filter((p) => p.href);

  return (
    <div className="mt-3 flex items-center gap-4">
      {items.map(({ key, Icon, label, href }) => (
        <motion.a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.25, rotate: -8, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="inline-flex text-navy/60 transition-colors duration-300 hover:text-red"
        >
          <Icon size={22} />
        </motion.a>
      ))}
    </div>
  );
};

export default function InfluencerDetail() {
  const [params] = useSearchParams();
  const nav = useNavigate();

  const name = params.get("name");
  const city = params.get("city");

  let influencer = null;
  if (city && name && CITY_INFLUENCERS[city]) {
    influencer = CITY_INFLUENCERS[city].find((inf) => inf.name === name);
  }

  if (!influencer) {
    return (
      <Sec className="bg-cream min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-navy">Influencer not found.</h1>
          <p className="mt-2 text-navy/60">We couldn't find the profile for {name || "this creator"}.</p>
          <button
            onClick={() => nav(-1)}
            className="mt-6 inline-block rounded-full bg-red px-6 py-3 text-sm font-semibold text-cream hover:bg-red/90"
          >
            Go Back
          </button>
        </div>
      </Sec>
    );
  }

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 2) {
      nav(-1);
    } else {
      nav(`/city?city=${encodeURIComponent(city)}`);
    }
  };

  const workImages = influencer.work || [];

  return (
    <Sec className="bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pt-[5%] pb-20 md:px-10 ">

        <Reveal>
          <a
            href="#"
            onClick={handleBack}
            className=" inline-flex pb-9 items-center gap-2 text-base font-semibold text-navy transition-colors hover:text-red cursor-pointer"
          >
            <span>←</span> Back
          </a>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] bg-sky"
            >
              <img src={influencer.image} alt={influencer.name} className="h-full w-full object-cover" />
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h1 className="mt-3 font-display text-5xl font-semibold text-navy md:text-6xl">
                {influencer.name}
              </h1>

              {/* Social Icons instead of handle text */}
              <SocialIcons handle={influencer.handle} socials={influencer.socials} />

              <div className="mt-8">
                <p className="text-base leading-relaxed text-navy/80 md:text-lg">
                  {influencer.bio || "A passionate creator based in " + city + "."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {workImages.length > 0 && (
          <div id="portfolio" className="mt-32">
            <Reveal>
              <div className="border-t border-navy/20 pt-10">
                <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  Recent Work by {influencer.name.split(' ')[0]}
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy/5"
                  >
                    <img src={img} alt={`Work ${i + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mt-32">
          <Reveal>
            <div className="rounded-3xl bg-navy px-8 py-16 text-center md:px-16">
              <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
                Want to work with {influencer.name}?
              </h2>
              <p className="mt-4 text-base text-cream/80 md:text-lg">
                Submit a brief and we'll get back to you with availability and rates.
              </p>
              <div className="mt-8">
                <Link to="/brief" className="inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream transition hover:bg-red/90 md:text-base">
                  Submit a brief →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </Sec>
  );
}