import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
export default function Scorecard(){
 return <Sec bg="bg-navy"><div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
  <div><Eyebrow dark className="text-[14px]">The scorecard</Eyebrow><H2>Every creator, scored the same way.</H2>
   <Reveal><p className="mt-5 max-w-md text-lg text-cream/80">A consistent, weighted model means our recommendations are explainable. Not gut feel, and never follower count on its own.</p>
    <div className="mt-8 rounded-3xl rounded-tr-[4rem] bg-cream p-7 text-navy"><p className="font-semibold text-red">Our honesty rule</p>
     <p className="mt-2 leading-relaxed">Creator location is not proof of audience location. Where geography matters, we ask for platform insights, and mark anything we can't verify as unverified.</p></div></Reveal></div>
  <div className="space-y-5">{SCORE.map(([c,w],i)=><Reveal key={c} delay={i*.05}>
   <div className="flex justify-between gap-4"><span>{c}</span><span className="font-semibold"><Count to={w}/></span></div>
   <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-sky/25"><motion.div className="h-full rounded-full bg-sky" initial={{width:0}} whileInView={{width:`${w/25*100}%`}} viewport={{once:false}} transition={{duration:1.2,delay:.2+i*.05,ease}}/></div></Reveal>)}</div></div></Sec>;}
