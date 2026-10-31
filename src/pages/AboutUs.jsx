import { motion } from "framer-motion";
import { Link } from "react-router";
import { Reveal, Sec, ease } from "../ui";

// Icon for video play button
const PlayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/90 drop-shadow-md transition-transform duration-500 group-hover:scale-110">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
  </svg>
);

export default function AboutUs() {
  return (
    <Sec className="bg-[#FFFFFF] min-h-screen">
      <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-20 md:px-10 md:pt-32">

        {/* HERO */}
        <div className="max-w-[850px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]"
          >
            About The Right Talent
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mt-4 font-display text-[3rem] font-bold leading-[1.05] text-[#0F2C3D] sm:text-[4rem] md:text-[4.8rem] !pb-2"
          >
            Looking for the <span className="font-serif italic text-[#C82333] font-normal !pr-1">right</span> fit,<br /> not the biggest name.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-6 max-w-[650px] text-[15px] leading-[1.7] text-[#0F2C3D]/70 sm:text-base"
          >
            The Right Talent is a research-led talent and media agency, helping brands in Pakistan and international markets find the creators, influencers, models and actors who genuinely fit, then plan the content and media around them.
          </motion.p>
        </div>

        {/* TEAM VIDEO */}
        <Reveal delay={0.1}>
          <div className="mt-12 group relative aspect-[16/9] w-full overflow-hidden rounded-tl-[4rem] rounded-br-[6rem] bg-[#0F2C3D] cursor-pointer">
            <video
              src="https://videos.pexels.com/video-files/3189039/3189039-hd_1920_1080_25fps.mp4"
              poster="https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1200"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0F2C3D]/40 transition-colors duration-500 group-hover:bg-[#0F2C3D]/60">
              <PlayIcon />
              <p className="text-[13px] font-semibold tracking-wider text-white transition-transform duration-500 group-hover:-translate-y-1">
                [Video: the team at work, 8-12 sec loop]
              </p>
            </div>
          </div>
        </Reveal>

        {/* OUR STORY */}
        <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]">
              Our story
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.1] text-[#0F2C3D] md:text-[2.5rem]">
              Popularity isn't the same as the right fit.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-[#0F2C3D]/70">
              Too many campaigns are cast by follower count. A creator can be popular and still reach the wrong city, the wrong age group or the wrong buyer.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#0F2C3D]/70">
              We started The Right Talent to fix that: research first, then a clear recommendation, then the creative direction and media that make the match pay off.
            </p>
          </Reveal>

          {/* Story Visuals */}
          <div className="relative h-[400px] w-full md:h-[500px]">
            {/* Blue Shape (Founder) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
              className="group absolute left-0 top-0 h-[60%] w-[60%] overflow-hidden rounded-tr-[4rem]"
            >
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Founder" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
              />
            </motion.div>

            {/* Red Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="absolute left-[50%] top-0 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C82333] md:h-24 md:w-24"
            />

            {/* Red Shape (Team Planning) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="group absolute right-0 top-0 h-[50%] w-[35%] overflow-hidden rounded-bl-[4rem]"
            >
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team planning" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
              />
            </motion.div>

            {/* Navy Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="absolute bottom-0 right-0 flex h-[45%] w-[45%] flex-col justify-center bg-[#0F2C3D] p-6 rounded-tr-[2rem]"
            >
              <p className="font-serif text-base italic leading-snug text-white md:text-lg">
                "If we can't verify the audience, we don't recommend the creator. It's that simple."
              </p>
              <p className="mt-4 text-[11px] font-bold text-white/60">Zainab Riaz, Founder</p>
            </motion.div>
          </div>
        </div>

        {/* WHAT WE BELIEVE - 4 PRINCIPLES */}
        <div className="mt-32">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]">
              Principles
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[2.2rem] font-bold leading-[1.1] text-[#0F2C3D] md:text-[2.75rem]">
              Four principles behind every recommendation.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Reveal delay={0.05}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-between rounded-tr-[2rem] bg-[#0F2C3D] p-7 text-white">
                <p className="font-display text-[2rem] font-bold opacity-30">01</p>
                <div className="mt-12">
                  <h3 className="font-display text-[17px] font-semibold">Research before reach</h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-white/70">
                    Talent is chosen for fit: niche, audience, geography and brand. Never follower count alone.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.1}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-between rounded-tr-[2rem] bg-[#C82333] p-7 text-white">
                <p className="font-display text-[2rem] font-bold opacity-30">02</p>
                <div className="mt-12">
                  <h3 className="font-display text-[17px] font-semibold">Honest about data</h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-white/80">
                    Creator location is not proof of audience location. Anything that can't be verified is clearly flagged.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.15}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-between rounded-bl-[2rem] bg-[#67E8F9] p-7 text-[#0F2C3D]">
                <p className="font-display text-[2rem] font-bold opacity-30">03</p>
                <div className="mt-12">
                  <h3 className="font-display text-[17px] font-semibold">Transparent by default</h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-[#0F2C3D]/70">
                    Our fees, creator fees and commissions are kept separate and agreed in writing.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={0.2}>
              <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col justify-between rounded-bl-[2rem] bg-[#0F2C3D] p-7 text-white">
                <p className="font-display text-[2rem] font-bold opacity-30">04</p>
                <div className="mt-12">
                  <h3 className="font-display text-[17px] font-semibold">Craft in every brief</h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-white/70">
                    Every creator gets direction in their own voice: the hook, the script, the call to action.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* EXPERTISE */}
        <div className="mt-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C82333]">
             EXPERTISE
            </p>
            <h2 className="mt-3 font-display text-[2.5rem] font-bold leading-[1.1] text-[#0F2C3D] md:text-[3rem]">
              Talent first. Then everything around it.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-[#0F2C3D]/70">
              Talent & PR is our core. Around it we run social media, paid media and shoots, so the people, the content and the audience all line up.
            </p>
            <div className="mt-8">
              <Link
                to="/what-we-do"
                className="inline-flex items-center rounded-full bg-[#0F2C3D] px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0F2C3D]/90"
              >
                See what we do
              </Link>
            </div>
          </Reveal>

          <div className="flex w-full justify-start lg:justify-end">
            <div className="grid w-full max-w-[480px] grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "Talent & PR", 
                "Social media", 
                "Paid media", 
                "Shoots & production", 
                "Creative direction", 
                "Talent booking"
              ].map((item, i) => (
                <Reveal key={item} delay={i * 0.05} className="w-full">
                  <motion.div 
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex h-full w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-[#0F2C3D]/20 bg-white px-4 py-4 text-[13px] font-semibold text-[#0F2C3D] shadow-sm transition-colors duration-300 hover:border-[#0F2C3D] hover:bg-[#0F2C3D] hover:text-white"
                  >
                    {item}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* WHERE WE WORK */}
        <div className="mt-32">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-12">
            <Reveal>
              <h2 className="font-display text-[2rem] font-bold leading-[1.1] text-[#0F2C3D] md:text-[2.5rem]">
                Where we work.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-lg text-[14px] leading-[1.6] text-[#0F2C3D]/70">
                Rooted in Pakistan, working with brands and talent across international markets.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { city: "Karachi", country: "Pakistan", shape: "rounded-tr-[3rem]", img: "https://images.pexels.com/photos/14372997/pexels-photo-14372997.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { city: "Lahore", country: "Pakistan", shape: "rounded-tl-[3rem]", img: "https://images.pexels.com/photos/14299137/pexels-photo-14299137.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { city: "New York", country: "United States", shape: "rounded-bl-[3rem]", img: "https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { city: "Canada", country: "North America", shape: "rounded-br-[3rem]", img: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800" },
            ].map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.08}>
                <div className="group">
                  <div className={`relative aspect-[3/4] w-full overflow-hidden ${loc.shape}`}>
                    <img 
                      src={loc.img} 
                      alt={loc.city} 
                      className="h-full w-full object-cover transition-transform duration-800 ease-in group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0F2C3D] md:text-xl">{loc.city}</h3>
                  <p className="text-[13px] text-[#0F2C3D]/60">{loc.country}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* THE TEAM */}
        <div className="mt-32 rounded-tl-[4rem] rounded-br-[4rem] bg-[#0F2C3D] p-8 md:p-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                The team
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.1] text-white md:text-[2.5rem]">
                The people behind the picks.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/careers" className="rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0F2C3D]">
                Join the team
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { name: "Zainab Riaz", role: "Founder", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { name: "Ali Hassan", role: "Talent & PR Lead", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { name: "Sana Malik", role: "Social & Paid Media Lead", img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { name: "Usman Iqbal", role: "Production Lead", img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800" },
            ].map((member, i) => (
              <Reveal key={member.role} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[2rem]">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-[#C82333]">
                    {member.name}
                  </h3>
                  <p className="text-[13px] text-white/60">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </Sec>
  );
}