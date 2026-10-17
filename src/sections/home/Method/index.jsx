import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
const SP=["lg:col-span-5 lg:row-span-2 bg-navy text-cream","lg:col-span-7 bg-sky text-navy","lg:col-span-4 border border-sky","lg:col-span-3 bg-red text-cream","lg:col-span-5 border border-sky","lg:col-span-7 bg-navy text-cream"];
export default function Method(){
 return <Sec id="method"><div className="grid items-end  gap-4 md:grid-cols-2 md:gap-12"><div><Eyebrow className="text-[14px]">Our method</Eyebrow><H2>Six kinds of fit, checked before we recommend anyone.</H2></div>
   <Reveal><p className="text-lg">Every shortlist comes with a written rationale, profile links, indicative rates and clear notes on what data is verified, and what isn't.</p></Reveal></div>
  <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">{METHOD.map(([t,d],i)=><Reveal key={t} delay={(i%3)*.08} className={`${SP[i]?.split(" ").filter(c=>c.startsWith("lg:")).join(" ")}`}>
   <Tilt className={`flex h-full flex-col justify-between overflow-hidden rounded-3xl ${SP[i].split(" ").filter(c=>!c.startsWith("lg:")).join(" ")}`}>
    {i===0&&<Img src={u(IMG.method,900)} className="h-52"/>}
    <div className="p-6"><h3 className="font-display text-2xl">{t}</h3><p className="mt-2 leading-relaxed">{d}</p></div></Tilt></Reveal>)}</div></Sec>;}
