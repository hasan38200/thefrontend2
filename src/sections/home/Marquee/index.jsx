import {motion,useScroll,useTransform,useVelocity,useSpring} from "framer-motion";
import {useRef} from "react";

// Logos are set to White Smoke (#F5F5F5)
const LOGOS = [
  "https://cdn.simpleicons.org/nike/F5F5F5",
  "https://cdn.simpleicons.org/adidas/F5F5F5",
  "https://cdn.simpleicons.org/apple/F5F5F5",
  "https://cdn.simpleicons.org/spotify/F5F5F5",
  "https://cdn.simpleicons.org/netflix/F5F5F5",
  "https://cdn.simpleicons.org/airbnb/F5F5F5",
  "https://cdn.simpleicons.org/amazon/F5F5F5",
  "https://cdn.simpleicons.org/google/F5F5F5",
  "https://cdn.simpleicons.org/microsoft/F5F5F5",
  "https://cdn.simpleicons.org/samsung/F5F5F5",
];

const Row = ({ rev }) => (
  <motion.div 
    className="flex w-max gap-16 whitespace-nowrap items-center" 
    animate={{ x: rev ? ["-50%", "0%"] : ["0%", "-50%"] }} 
    transition={{ duration: rev ? 80 : 90, ease: "linear", repeat: Infinity }}
  >
    {[...LOGOS, ...LOGOS].map((src, i) => (
      <span key={i} className="flex items-center">
        <img 
          src={src} 
          alt="Brand Logo" 
          className="h-8 md:h-12 w-auto object-contain" 
        />
      </span>
    ))}
  </motion.div>
);

export default function Marquee(){
  const {scrollY} = useScroll();
  const v = useSpring(useVelocity(scrollY), { stiffness: 100, damping: 30 });
  const sk = useTransform(v, [-2000, 2000], [-8, 8]);

  return (
    <div className="overflow-hidden border-y border-navy bg-navy py-8">
      <motion.div style={{ skewX: sk }} className="space-y-6">
        <Row />
        <Row rev />
      </motion.div>
    </div>
  );
}