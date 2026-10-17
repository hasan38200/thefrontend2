import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
export default function WhoWeWork(){
 return <Sec bg="bg-sky"><div className="text-center"><Eyebrow className="!text-navy">Who we work with</Eyebrow><H2 className="mx-auto">Brands and agencies, in Pakistan and beyond.</H2></div>
  <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{CLIENTS.map(([t,d],i)=><Reveal key={t} delay={(i%3)*.08}>
   <motion.div whileHover={{y:-6}} className="group relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[4/5]">
    <Img src={u(IMG.clients[i],900)} alt={t} className="absolute inset-0"/><div className="absolute inset-0 bg-navy/60 transition-colors duration-500 group-hover:bg-navy/80"/>
    <div className="absolute inset-x-0 bottom-0 p-6 text-cream transition-transform duration-500 group-hover:-translate-y-1"><h3 className="font-display text-2xl">{t}</h3><p className="mt-2 text-sm">{d}</p></div></motion.div></Reveal>)}</div></Sec>;}
