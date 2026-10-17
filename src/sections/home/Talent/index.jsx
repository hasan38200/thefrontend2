import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
const SP=["lg:col-span-7","lg:col-span-5","lg:col-span-5","lg:col-span-7"];
export default function Talent(){
 return <Sec id="talent"><div className="grid items-end gap-4 md:grid-cols-2 md:gap-12"><div><Eyebrow className="text-[14px]">Our talent</Eyebrow><H2>A curated, vetted roster.</H2></div>
   <Reveal><p className="text-lg">Every profile is reviewed before it's listed. We'd rather recommend five right people than fifty available ones.</p></Reveal></div>
  <div className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-12">{TALENT.map(([t,d],i)=><Reveal key={t} delay={(i%2)*.1} className={SP[i]}>
   <motion.div whileHover="h" className="group">
    <motion.div className="relative aspect-[4/3] overflow-hidden rounded-3xl" initial={{clipPath:"inset(100% 0 0 0)"}} whileInView={{clipPath:"inset(0% 0 0 0)"}} viewport={{once:false}} transition={{duration:1,ease}}>
     <Img src={u(IMG.talent[i],1000)} alt={t} className="h-full transition-transform duration-700 group-hover:scale-105"/>
     <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy">[Talent portrait]</span></motion.div>
    <h3 className="mt-3 font-display text-2xl">{t}</h3><p className="mt-1 text-sm">{d}</p></motion.div></Reveal>)}</div></Sec>;}
