import {motion,useScroll,useTransform,useVelocity,useSpring} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,HERO_LABELS,u,IMG} from "../../../data";
export default function Testimonials(){
 return <Sec bg="bg-sky"><div className="text-center"><Eyebrow className="!text-navy">[Eyebrow]</Eyebrow><H2 className="mx-auto">[Testimonials headline]</H2></div>
  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[0,1,2,3,4,5].map(i=><Reveal key={i} delay={(i%3)*.1}>
   <Tilt className="flex h-full min-h-[260px] flex-col justify-between rounded-3xl border border-navy/20 bg-cream p-6">
    <div className="flex items-center gap-3"><Img src={u(IMG.hero[(i*2)%12],200)} parallax={false} className="h-11 w-11 rounded-full"/>
     <div><p className="text-sm font-semibold">[Client name]</p><p className="text-xs">[Role, Company]</p></div></div>
    <p className="my-6 leading-relaxed">[Client quote]</p><p className="font-display text-lg">[Company logo]</p></Tilt></Reveal>)}</div></Sec>;}
