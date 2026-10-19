import { useSearchParams, Link } from "react-router";
import { motion } from "framer-motion";
import { CITY_INFLUENCERS, PLACES } from "../data";
import { Reveal, Sec, ease } from "../ui";

function findCountry(city) {
  for (const place of PLACES) {
    if (place.cities.includes(city)) return place.country;
  }
  return "";
}

export default function CityDetail() {
  const [params] = useSearchParams();
  const city = params.get("city") || "Karachi";
  const country = findCountry(city);
  const creators = CITY_INFLUENCERS[city] || [];

  return (
    <Sec className="bg-cream min-h-screen pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          Places · {country} · {city}
        </p>

        <div className="mt-4 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-5xl font-semibold text-navy md:text-7xl"
          >
            {city}
          </motion.h1>
          <Link to="/places" className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-cream">
            ← Back to Places
          </Link>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-navy/80 md:text-xl">
          Local voices, national reach. Meet the trusted creators shaping conversations in {city}.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator, i) => (
            <Reveal key={creator.name} delay={(i % 3) * 0.1}>
              <Link to={`/influencer?name=${encodeURIComponent(creator.name)}&city=${encodeURIComponent(city)}`} className="block">
                <motion.div whileHover="hover" initial="rest" animate="rest" className="group cursor-pointer">
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-navy/5"
                  >
                    <img src={creator.image} alt={creator.name} className="h-full w-full object-cover" />
                    <motion.div
                      variants={{ rest: { opacity: 0, y: 20 }, hover: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.4, ease }}
                      className="pointer-events-none absolute inset-x-0 bottom-0 p-6"
                      style={{ background: "linear-gradient(to top, rgba(102,155,187,0.95), rgba(102,155,187,0.6), transparent)" }}
                    >
                      <p className="font-display text-xl font-semibold text-white md:text-2xl">{creator.name}</p>
                      <p className="mt-1 text-sm text-white/90">{creator.handle}</p>
                    </motion.div>
                  </motion.div>

                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold text-navy md:text-xl">{creator.name}</h3>
                    <span className="text-sm text-navy/60">{city}</span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        {creators.length === 0 && (
          <p className="mt-16 text-navy/60">No creators found for this city yet.</p>
        )}
      </div>
    </Sec>
  );
}