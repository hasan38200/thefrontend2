import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
export default function Difference(){
 return <Sec bg="bg-navy"><div className="text-center"><Eyebrow dark className="text-[14px]">The difference</Eyebrow><H2 className="mx-auto">Picking by popularity vs. picking the right fit.</H2></div>
  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">{DIFF.map(([a,b,c])=><Reveal key={a}><div className="rounded-2xl border border-cream/20 p-5"><h3 className="font-display text-xl">{a}</h3><p className="mt-3 text-sm text-cream/70">The usual approach</p><p>{b}</p><div className="mt-3 rounded-xl bg-sky p-4 text-navy"><p className="text-sm font-semibold">The Right Talent</p><p className="mt-1">{c}</p></div></div></Reveal>)}</div>
  <div className="mt-10 hidden overflow-x-auto no-scrollbar lg:block"><div className="mx-auto min-w-[680px] max-w-5xl">
   <div className="grid grid-cols-[.7fr_1fr_1.3fr] text-sm font-semibold"><div/><div className="p-4">The usual approach</div><div className="rounded-t-2xl bg-sky p-4 text-navy">The Right Talent</div></div>
   {DIFF.map(([a,b,c],i)=><Reveal key={a} delay={i*.08}><div className="grid grid-cols-[.7fr_1fr_1.3fr] border-t border-cream/20">
    <div className="p-4 font-display text-lg">{a}</div><div className="p-4 text-cream/80">{b}</div>
    <motion.div whileHover={{x:6}} className={`bg-sky p-4 font-medium text-navy ${i===DIFF.length-1?"rounded-b-2xl":""}`}>{c}</motion.div></div></Reveal>)}</div></div></Sec>;}
