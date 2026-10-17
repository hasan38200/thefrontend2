import {motion,useScroll,useTransform,useVelocity,useSpring} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,HERO_LABELS,u,IMG} from "../../../data";
const ST=[[15,"Up to 15 creators assessed"],[5,"Ranked shortlist of 5"],[6,"Six kinds of fit, checked before we recommend anyone."],[7,"From brief to report, in seven clear steps."]];
export default function Stats(){
 return <Sec><div className="text-center"><H2 className="mx-auto">Not popularity alone.</H2></div>
  <div className="mt-8 grid gap-x-12 md:grid-cols-2">{ST.map(([n,t],i)=><Reveal key={t} delay={(i%2)*.1}>
   <div className="flex items-end justify-between gap-6 border-b border-navy/25 py-8"><p className="max-w-[14rem] text-navy/80">{t}</p>
    <motion.span whileHover={{scale:1.08,color:"#BE1D23"}} className="font-display text-5xl md:text-7xl"><Count to={n} suffix=""/></motion.span></div></Reveal>)}</div></Sec>;}
