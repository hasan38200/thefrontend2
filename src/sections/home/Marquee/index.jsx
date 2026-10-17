import {motion,useScroll,useTransform,useVelocity,useSpring} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,HERO_LABELS,u,IMG} from "../../../data";
const Row=({rev})=><motion.div className={`flex w-max gap-10 whitespace-nowrap font-display text-2xl md:text-3xl ${rev?"text-sky":""}`} animate={{x:rev?["-50%","0%"]:["0%","-50%"]}} transition={{duration:rev?40:30,ease:"linear",repeat:Infinity}}>
 {[...CATS,...CATS].map((c,i)=><span key={i} className="flex items-center gap-10">{c}<span className="h-3 w-3 rounded-full bg-red"/></span>)}</motion.div>;
export default function Marquee(){
 const {scrollY}=useScroll(),v=useSpring(useVelocity(scrollY),{stiffness:100,damping:30}),sk=useTransform(v,[-2000,2000],[-8,8]);
 return <div className="overflow-hidden border-y border-navy bg-navy py-5 text-cream"><motion.div style={{skewX:sk}} className="space-y-3"><Row/><Row rev/></motion.div></div>;}
