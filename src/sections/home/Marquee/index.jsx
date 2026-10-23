import {motion,useScroll,useTransform,useVelocity,useSpring} from "framer-motion";

// Logos from Simple Icons, coloured dark navy (#0F2C3D) by the URL itself.
const LOGOS = [
  "https://cdn.simpleicons.org/nike/0F2C3D",
  "https://cdn.simpleicons.org/adidas/0F2C3D",
  "https://cdn.simpleicons.org/spotify/0F2C3D",
  "https://cdn.simpleicons.org/airbnb/0F2C3D",
  "https://cdn.simpleicons.org/netflix/0F2C3D",
  "https://cdn.simpleicons.org/google/0F2C3D",
  "https://cdn.simpleicons.org/samsung/0F2C3D",
  "https://cdn.simpleicons.org/tesla/0F2C3D",
  "https://cdn.simpleicons.org/uber/0F2C3D",
  "https://cdn.simpleicons.org/youtube/0F2C3D",
];

const Logo = ({ src }) => (
  <span className="group flex items-center justify-center">
    <img
      src={src}
      alt="Brand logo"
      loading="lazy"
      // If a logo ever fails to load, hide it instead of showing a broken icon
      onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
      // Dark by default. On hover: turns grey and fades to a light grey.
      className="h-5 w-auto object-contain opacity-30 transition-all duration-300 ease-in-out sm:h-7 md:h-10 lg:h-12 group-hover:opacity-100"
    />
  </span>
);

const Row = ({ rev }) => (
  <motion.div
    className="flex w-max items-center gap-8 whitespace-nowrap sm:gap-10 md:gap-16"
    animate={{ x: rev ? ["-50%", "0%"] : ["0%", "-50%"] }}
    transition={{ duration: rev ? 80 : 90, ease: "linear", repeat: Infinity }}
  >
    {[...LOGOS, ...LOGOS].map((src, i) => (
      <Logo key={i} src={src} />
    ))}
  </motion.div>
);

export default function Marquee(){
  const {scrollY} = useScroll();
  const v = useSpring(useVelocity(scrollY), { stiffness: 100, damping: 30 });
  const sk = useTransform(v, [-2000, 2000], [-8, 8]);

  return (
    <div className="overflow-hidden bg-white py-5 sm:py-6 md:py-8">
      <motion.div style={{ skewX: sk }} className="space-y-3 sm:space-y-4 md:space-y-6">
        <Row />
        <Row rev />
      </motion.div>
    </div>
  );
}